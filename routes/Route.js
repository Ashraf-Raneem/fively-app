import { View, Text } from "react-native";
import tw from "twrnc";
import { Entypo, AntDesign, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { primary, dark } from "../styles/colors";
import CoverMain from "../screens/landing/CoverMain";
import Categories from "../screens/categories/Categories";
import ProductList from "../screens/productList/ProductList";

const Stack = createNativeStackNavigator();

const Header = (props) => {
    return (
        <View style={tw`flex flex-row justify-between items-center h-18 pt-6 bg-[${dark}]`}>
            <Ionicons
                name="arrow-back"
                size={24}
                color="white"
                style={tw`ml-2`}
                onPress={() => props.navigation.goBack()}
            />
            <Text style={tw`text-lg text-white`}>{props.title}</Text>
            <Ionicons name="search" size={24} color="white" style={tw`mr-2`} />
        </View>
    );
};

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
        component: Categories,
        icon: (focused) => <Entypo name="shopping-bag" size={20} color={focused ? primary : "white"} />,
        options: { headerShown: false },
        children: {},
    },
    Favourite: {
        title: "Favourite",
        component: Categories,
        icon: (focused) => <Entypo name="heart-outlined" size={20} color={focused ? primary : "white"} />,
        options: { headerShown: false },
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
