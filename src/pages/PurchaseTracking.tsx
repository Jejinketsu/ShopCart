import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalRefInterface } from "../components/organisms/ModalSlider/interfaces";
import PurchaseTrackingTemplate from "../components/templates/PurchaseTracking";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchPurchases } from "../redux/slices/purchase";

type Producs = {
    name: string;
    price: number;
    status: string;
};

const PurchaseTracking = () => {
    const [mockProducts, setMockProducts] = React.useState<Producs[]>([]);
    const { control, handleSubmit } = useForm();
    const modalRef = useRef<ModalRefInterface>(null);
    const { isFullfilled, purchaseSelected } = useAppSelector(
        (state) => state.purchase
    );
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (!isFullfilled) {
            dispatch(fetchPurchases());
        }
    }, [isFullfilled]);

    const onSubmit: SubmitHandler<any> = async (data) => {
        const newProduct:Producs = {
            name: data.product,
            status: data.quantity,
            price: data.price,
        };
        setMockProducts((prevState) => {
            const list = [...prevState, newProduct];
            return list;
        });
    };

    return (
        <PurchaseTrackingTemplate
            ModalRef={modalRef}
            purchaseSelected={purchaseSelected}
            ModalProps={{ title: "Novo item", modalHeight: 70 }}
            products={mockProducts}
            ProductInputProps={{ name: "product", title: "Produto", control }}
            PriceInputProps={{ name: "price", title: "Preço", control }}
            QuantityInputProps={{
                name: "quantity",
                title: "Quantidade",
                control,
            }}
            DoneButtonProps={{ label: "Finalizar", onPress: () => {} }}
            AddButtonProps={{
                label: "Adicionar a Lista",
                onPress: handleSubmit(onSubmit),
            }}
            PlusButtonProps={{
                iconName: "plus",
                color: "LIGHT",
                bgColor: "ACCENTED_0",
                onPress: () => modalRef?.current?.open(),
            }}
        />
    );
};

export default PurchaseTracking;
