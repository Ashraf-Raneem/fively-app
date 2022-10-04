import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { primary } from "../styles/colors";
import CoverMain from "../screens/landing/CoverMain";
import Categories from "../screens/categories/Categories";

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
        component: Categories,
        icon: (focused) => <AntDesign name="shoppingcart" size={20} color={focused ? primary : "white"} />,
        options: { headerShown: true },
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
