import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatedLists from "../pages/CreatedLists";
import CreatePurchase from "../pages/CreatePurchase";
import Home from "../pages/Home";
import Purchases from "../pages/Purchases";
import PurchaseTracking from "../pages/PurchaseTracking";

const { Navigator, Screen } = createNativeStackNavigator();

export default function HomeRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: true }}>
            <Screen
                name="StackHome"
                component={Home}
                options={{ headerTitle: "Home" }}
            />
            <Screen name="Purchases" component={Purchases} />
            <Screen
                name="CreatePurchase"
                component={CreatePurchase}
                options={{ headerTitle: "Nova Compra" }}
            />
            <Screen
                name="PurchaseTracking"
                component={PurchaseTracking}
                options={{
                    headerTitle: "Rastrear Compra",
                }}
            />
            <Screen
                name="CreatedLists"
                component={CreatedLists}
                options={{ headerTitle: "Listas Criadas" }}
            />
        </Navigator>
    );
}
