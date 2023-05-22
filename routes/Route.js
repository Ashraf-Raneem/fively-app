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
import AddShippingAddress from "../screens/addShippingAddress/AddShippingAddress";
import EditShippingAddress from "../screens/editShippingAddress/EditShippingAddress";
import CheckoutSuccess from "../screens/checkoutSuccess/CheckoutSuccess";
import Profile from "../screens/profile/Profile";
import OrderScreen from "../screens/order/Order";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                header: ({ navigation, route, options }) => (
                    <Header title={options.title ? options.title : route.name} navigation={navigation} />
                ),
            }}
        >
            <Stack.Screen name="Categories" component={Categories} options={{ headerShown: true }} />
            <Stack.Screen
                name="ProductList"
                component={ProductList}
                options={{ headerShown: true, title: "Product List" }}
            />
        </Stack.Navigator>
    );
};

export const ProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                header: ({ navigation, route, options }) => (
                    <Header title={options.title ? options.title : route.name} navigation={navigation} />
                ),
            }}
        >
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: true, title: "Orders" }} />
        </Stack.Navigator>
    );
};

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                header: ({ navigation, route, options }) => (
                    <Header title={options.title ? options.title : route.name} navigation={navigation} />
                ),
            }}
        >
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: true }} />
            <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: true }} />
            <Stack.Screen
                name="addShippingAddresses"
                component={AddShippingAddress}
                options={{ headerShown: true, title: "Add Shipping Addresses" }}
            />
            <Stack.Screen
                name="editShippingAddress"
                component={EditShippingAddress}
                options={{ headerShown: true, title: "Edit Shipping Address" }}
            />
            <Stack.Screen name="checkoutSuccess" component={CheckoutSuccess} options={{ headerShown: false }} />
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
        component: ProfileStack,
        icon: (focused) => <MaterialCommunityIcons name="account" size={20} color={focused ? primary : "white"} />,
        options: { headerShown: false },
        children: {},
    },
};
