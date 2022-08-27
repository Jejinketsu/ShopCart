import React from "react";
import PurchaseDetailsTemplate from "../components/templates/PurchaseDetails";
import { PageProps } from "../routes/interfaces";

const PurchaseDetails = ({ route }: PageProps) => {
    const purchase = route?.params?.purchase;

    return <PurchaseDetailsTemplate purchase={purchase} />;
};

export default PurchaseDetails;
