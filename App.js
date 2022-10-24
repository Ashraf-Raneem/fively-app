import tw from "twrnc";
import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./screens/auth/Login";
import RegisterScreen from "./screens/auth/Register";
import ForgotPassword from "./screens/auth/ForgotPassword";
import { dark, primary, gray } from "./styles/colors";
import { routes } from "./routes/Route";
import Header from "./components/header/Header";
import FilterScreen from "./screens/filter/Filter";
import ProductDetails from "./screens/productDetails/ProductDetails";
import { Entypo, Ionicons, FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    const [loaded] = useFonts({
        ...Ionicons.font,
        ...FontAwesome.font,
        ...AntDesign.font,
        ...Entypo.font,
        ...MaterialIcons.font,
        Inter: require("./assets/fonts/Inter-Thin.ttf"),
    });

    const onLayoutRootView = React.useCallback(async () => {
        if (loaded) {
            await SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    const TabTitle = ({ focused, title }) => {
        return <Text style={tw`text-[${focused ? primary : gray}] text-xs mb-1`}>{title}</Text>;
    };

    const TabNavigator = () => {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: dark,
                        borderColor: dark,
                        borderTopColor: dark,
                        borderTopLeftRadius: 14,
                        borderTopRightRadius: 14,
                        paddingVertical: 4,
                        height: 50,
                        position: "absolute",
                    },
                    header: ({ navigation, route, options }) => <Header title={route.name} navigation={navigation} />,
                }}
            >
                {Object.keys(routes).map((item, index) => (
                    <Tab.Screen
                        key={index}
                        name={routes[item].title}
                        component={routes[item].component}
                        options={{
                            ...routes[item].options,
                            tabBarLabel: ({ focused }) => <TabTitle focused={focused} title={routes[item].title} />,
                            tabBarIcon: ({ focused }) => routes[item].icon(focused),
                        }}
                    />
                ))}
            </Tab.Navigator>
        );
    };

    return (
        <NavigationContainer onReady={onLayoutRootView}>
            <Stack.Navigator initialRouteName="Register">
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Forgot_Password" component={ForgotPassword} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Filter"
                    component={FilterScreen}
                    options={{ header: ({ navigation }) => <Header title={"Filter"} navigation={navigation} /> }}
                />
                <Stack.Screen
                    name="ProductDetails"
                    component={ProductDetails}
                    options={{
                        header: ({ navigation }) => <Header title={"Product Details"} navigation={navigation} />,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
