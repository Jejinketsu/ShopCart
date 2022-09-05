import { createNativeStackNavigator } from "@react-navigation/native-stack";

import More from "../pages/More";

const { Navigator, Screen } = createNativeStackNavigator();

export default function MoreRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: true }}>
            <Screen
                name="StackMore"
                component={More}
                options={{ headerTitle: "More" }}
            />
        </Navigator>
    );
}
