import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import RootRoutes from "./root.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <RootRoutes />
        </NavigationContainer>
    );
}
