import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Backup from "../pages/Backup";
import More from "../pages/More";
import Profile from "../pages/Profile";
import HomeRoutes from "./home.routes";
import { FontAwesome5 } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

const TabIcons = {
    Home: "home",
    Perfil: "user",
    Backup: "cloud-upload-alt",
    More: "ellipsis-h",
} as const;

type TabIconsName = keyof typeof TabIcons;

export default function Root() {
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
            })}
        >
            <Screen name="Home" component={HomeRoutes} />
            <Screen name="Perfil" component={Profile} />
            <Screen name="Backup" component={Backup} />
            <Screen name="More" component={More} />
        </Navigator>
    );
}
