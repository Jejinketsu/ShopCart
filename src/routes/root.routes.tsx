import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Backup from "../pages/Backup";
import MoreRoutes from "./more.routes";
import Profile from "../pages/Profile";
import HomeRoutes from "./home.routes";
import { FontAwesome5 } from "@expo/vector-icons";
import useGetTheme from "../hooks/useGetTheme";

const { Navigator, Screen } = createBottomTabNavigator();

const TabIcons = {
    Home: "home",
    Perfil: "user",
    Backup: "cloud-upload-alt",
    More: "ellipsis-h",
} as const;

type TabIconsName = keyof typeof TabIcons;

export default function Root() {
    const { theme } = useGetTheme();
    return (
        <Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const iconName = TabIcons[route.name as TabIconsName];
                    return (
                        <FontAwesome5
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
                tabBarHideOnKeyboard: true,
                tabBarStyle: { backgroundColor: theme.colors.LIGHT },
                header: () => {},
            })}
        >
            <Screen
                name="Home"
                component={HomeRoutes}
                options={{ title: "Valor em caixa" }}
            />
            <Screen name="Perfil" component={Profile} />
            <Screen name="Backup" component={Backup} />
            <Screen name="More" component={MoreRoutes} />
        </Navigator>
    );
}
