import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useGetTheme from "../hooks/useGetTheme";

import More from "../pages/More";

const { Navigator, Screen } = createNativeStackNavigator();

export default function MoreRoutes() {
    const { theme } = useGetTheme();
    return (
        <Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: theme.colors.LIGHT,
                },
                headerTitleStyle: { color: theme.colors.DARK },
            }}
        >
            <Screen
                name="StackMore"
                component={More}
                options={{ headerTitle: "More" }}
            />
        </Navigator>
    );
}
