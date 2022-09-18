import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import RegisterScreen from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
    const [loaded] = useFonts({
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

    return (
        <NavigationContainer onReady={onLayoutRootView}>
            <Stack.Navigator initialRouteName="Register">
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Forgot_Password" component={ForgotPassword} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
