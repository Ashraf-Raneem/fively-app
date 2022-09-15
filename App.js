import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

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
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
