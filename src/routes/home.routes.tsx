import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatedLists from "../pages/CreatedLists";
import ListDetails from "../pages/ListDetails";
import CreatePurchase from "../pages/CreatePurchase";
import Home from "../pages/Home";
import Purchases from "../pages/Purchases";
import PurchaseTracking from "../pages/PurchaseTracking";
import PurchaseDetails from "../pages/PurchaseDetails";
import ProductDetails from "../pages/ProductDetails";

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

            <Screen
                name="ListDetails"
                component={ListDetails}
                options={{ headerTitle: "Detalhes da lista" }}
            />

            <Screen
                name="PurchaseDetails"
                component={PurchaseDetails}
                options={{ headerTitle: "Detalhes da Compra" }}
            />

            <Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{ headerTitle: "Detalhes do Produto" }}
            />
        </Navigator>
    );
}
