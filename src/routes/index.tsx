import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthenticationRoutes from "./Authentication.routes";
import RootRoutes from "./root.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            {true ? <AuthenticationRoutes /> : <RootRoutes />}
        </NavigationContainer>
    );
}
