import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { primary } from "../styles/colors";
import Header from "../components/header/Header";
import CoverMain from "../screens/landing/CoverMain";
import Categories from "../screens/categories/Categories";
import ProductList from "../screens/productList/ProductList";
import Favourite from "../screens/favourite/Favourite";
import Cart from "../screens/cart/Cart";
import Checkout from "../screens/checkout/Checkout";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                header: ({ navigation, route, options }) => <Header title={route.name} navigation={navigation} />,
            }}
        >
            <Stack.Screen name="Categories" component={Categories} options={{ headerShown: true }} />
            <Stack.Screen name="ProductList" component={ProductList} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
};

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                header: ({ navigation, route, options }) => <Header title={route.name} navigation={navigation} />,
            }}
        >
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: true }} />
            <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: true }} />
            <Stack.Screen name="ShippingAddresses" component={ProductList} options={{ headerShown: true }} />
            <Stack.Screen name="AddShippingAddresses" component={ProductList} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
};

export const routes = {
    Home: {
        title: "Home",
        component: CoverMain,
        icon: (focused) => <Entypo name="home" size={20} color={focused ? primary : "white"} />,
        options: { headerShown: false },
        children: {},
    },
    Shop: {
        title: "Shop",
        component: ShopStack,
        icon: (focused) => <AntDesign name="shoppingcart" size={20} color={focused ? primary : "white"} />,
        options: { headerShown: false },
        children: {},
    },
    Cart: {
        title: "Cart",
        component: CartStack,
        icon: (focused) => <Entypo name="shopping-bag" size={20} color={focused ? primary : "white"} />,
        options: { headerShown: false },
        children: {},
    },
    Favourite: {
        title: "Favourite",
        component: Favourite,
        icon: (focused) => <Entypo name="heart-outlined" size={20} color={focused ? primary : "white"} />,
        options: {
            headerShown: true,
            header: ({ navigation, route, options }) => <Header title={route.name} navigation={navigation} />,
        },
        children: {},
    },
    Account: {
        title: "Account",
        component: Categories,
        icon: (focused) => <MaterialCommunityIcons name="account" size={20} color={focused ? primary : "white"} />,
        options: { headerShown: false },
        children: {},
    },
};
