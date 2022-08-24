import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthenticationStackProps } from "./interfaces";

import Login from "../pages/Login";
import Register from "../pages/Register";
import RootRoutes from "./root.routes";

const Stack = createNativeStackNavigator<AuthenticationStackProps>();

function AuthenticationRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Root"
                component={RootRoutes}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default AuthenticationRoutes;
