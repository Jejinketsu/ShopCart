import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Purchases from "../pages/Purchases";

const { Navigator, Screen } = createNativeStackNavigator();

export default function HomeRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="StackHome" component={Home} />
            <Screen name="Purchases" component={Purchases} />
        </Navigator>
    );
}
