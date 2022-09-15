import { View, Text } from "react-native";
import AuthHeader from "../components/authHeader/authHeader";
import { globalStyle } from "../styles/global";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
    return (
        <View style={globalStyle}>
            <Ionicons name="chevron-back" size={32} color="white" style={tw`m-2`} />
            <View style={tw`mt-4 ml-4`}>
                <AuthHeader name={"Login"} />
            </View>
        </View>
    );
};

export default LoginScreen;
