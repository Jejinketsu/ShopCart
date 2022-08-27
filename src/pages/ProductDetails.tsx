import React from "react";
import ProductDetailsTemplate from "../components/templates/ProductDetails";
import { PageProps } from "../routes/interfaces";

const ProductDetails = ({ route }: PageProps) => {
    const product = route?.params?.product;

    return <ProductDetailsTemplate product={product} />;
};

export default ProductDetails;
