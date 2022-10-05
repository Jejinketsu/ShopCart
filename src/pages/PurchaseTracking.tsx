import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalRefInterface } from "../components/organisms/ModalSlider/interfaces";
import PurchaseTrackingTemplate from "../components/templates/PurchaseTracking";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { createProducts, productActions } from "../redux/slices/products";
import { purchaseActions } from "../redux/slices/purchase";
import { PageProps } from "../routes/interfaces";
import { Products } from "../database/interfaces";

type Producs = {
    name: string;
    price: number;
    quantity: number;
};

const PurchaseTracking = ({ navigation }: PageProps) => {
    const [listProducts, setListProducts] = React.useState<Producs[]>([]);
    const [spended, setSpended] = React.useState<number>(0);
    const [progress, setProgress] = React.useState<number>(0);
    const { control, handleSubmit, reset, setValue } = useForm();
    const modalRef = useRef<ModalRefInterface>(null);
    const { isFullfilled, purchaseSelected } = useAppSelector(
        (state) => state.purchase
    );
    const { isFullfilled: productFulfilled, productList } = useAppSelector(
        (state) => state.products
    );
    const dispatch = useAppDispatch();
    console.log("productList:", productList);
    const [search, setSearch] = React.useState<string[]>([]);

    React.useEffect(() => {
        if (!isFullfilled) {
            dispatch(purchaseActions.fetchPurchases());
        }
        if (!productFulfilled) {
            dispatch(productActions.fetchProducts());
        }
    }, [isFullfilled, productFulfilled]);

    React.useEffect(() => {
        return () => {
            dispatch(productActions.reset());
        };
    }, []);

    React.useEffect(() => {
        function calcSpended() {
            const sumTotalSpend: number = listProducts.reduce(
                (previousValue, currentValue) =>
                    previousValue + currentValue.price * currentValue.quantity,
                0
            );

            const progressValue =
                (sumTotalSpend / purchaseSelected.budget) * 100;

            setSpended(sumTotalSpend);
            setProgress(progressValue);
        }

        calcSpended();
    }, [listProducts]);

    const onSubmit: SubmitHandler<any> = async (data) => {
        const newProduct: Producs = {
            name: data.product,
            quantity: Number(data.quantity),
            price: Number(data.price),
        };
        setListProducts((prevState) => {
            const list = [...prevState, newProduct];
            return list;
        });

        reset();
    };

    const handleFinishPurchase = () => {
        dispatch(
            purchaseActions.finishPurchase({
                products: listProducts,
                purchaseId: purchaseSelected.id,
            })
        );
        navigation.replace("StackHome");
    };

    return (
        <PurchaseTrackingTemplate
            ModalRef={modalRef}
            purchaseSelected={purchaseSelected}
            spended={spended}
            progress={progress}
            ModalProps={{ title: "Novo item", modalHeight: 70 }}
            products={listProducts}
            ProductInputProps={{
                control,
                data: search,
                onSearch: (value) => {
                    const filtered = productList
                        .filter((item) =>
                            item.name
                                ?.toUpperCase()
                                .includes(value.toUpperCase())
                        )
                        .map((item) => item.name);
                    setSearch(filtered);
                },
                onItemSelected: (value) => {
                    const product = productList.find(
                        (item) => item.name === value
                    );
                    setValue("product", product?.name);
                },
                showList: true,
                serchInputProps: {
                    name: "product",
                    title: "Produto",
                    control,
                },
            }}
            PriceInputProps={{ name: "price", title: "Preço", control }}
            QuantityInputProps={{
                name: "quantity",
                title: "Quantidade",
                control,
            }}
            DoneButtonProps={{
                label: "Finalizar",
                onPress: handleFinishPurchase,
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
