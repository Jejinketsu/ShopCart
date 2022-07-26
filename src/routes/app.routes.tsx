import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Purchases from "../pages/Purchases";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Home" component={Home} />
            <Screen name="Purchase" component={Purchases} />
        </Navigator>
    );
}
