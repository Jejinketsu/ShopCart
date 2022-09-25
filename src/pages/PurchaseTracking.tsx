import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalRefInterface } from "../components/organisms/ModalSlider/interfaces";
import PurchaseTrackingTemplate from "../components/templates/PurchaseTracking";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { createProducts } from "../redux/slices/products";
import { fetchPurchases } from "../redux/slices/purchase";
import { PageProps } from "../routes/interfaces";
import { Products } from '../database/interfaces';

type Producs = {
    name: string;
    price: number;
    status: number;
};

const PurchaseTracking = ({ navigation }: PageProps) => {
    const [mockProducts, setMockProducts] = React.useState<Producs[]>([]);
    const [spended, setSpended] = React.useState<number>(0);
    const [progress, setProgress] = React.useState<number>(0);
    const { control, handleSubmit, reset } = useForm();
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

    React.useEffect(() => {
        function calcSpended() {
            const sumTotalSpend: number = mockProducts.reduce(
                (previousValue, currentValue) =>
                    previousValue + currentValue.price * currentValue.status,
                0
            );

            const progressValue =
                (sumTotalSpend / purchaseSelected.budget) * 100;

            setSpended(sumTotalSpend);
            setProgress(progressValue);
        }

        calcSpended();
    }, [mockProducts]);

    const onSubmit: SubmitHandler<any> = async (data) => {
        const newProduct: Producs = {
            name: data.product,
            status: Number(data.quantity),
            price: Number(data.price),
        };
        setMockProducts((prevState) => {
            const list = [...prevState, newProduct];
            return list;
        });

        reset();
    };

    const finishProductsList = () => {
        mockProducts.map((mockproduct) => {
            const newproduct: Products = {
                name: mockproduct.name,
                quantity: mockproduct.status,
                unityId: mockproduct.status,
            }
            dispatch(createProducts(newproduct));
        })
    }

    return (
        <PurchaseTrackingTemplate
            ModalRef={modalRef}
            purchaseSelected={purchaseSelected}
            spended={spended}
            progress={progress}
            ModalProps={{ title: "Novo item", modalHeight: 70 }}
            products={mockProducts}
            ProductInputProps={{ name: "product", title: "Produto", control }}
            PriceInputProps={{ name: "price", title: "Preço", control }}
            QuantityInputProps={{
                name: "quantity",
                title: "Quantidade",
                control,
            }}
            DoneButtonProps={{
                label: "Finalizar",
                onPress: () => {
                    finishProductsList();
                    navigation.replace("Root");
                },
            }}
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
