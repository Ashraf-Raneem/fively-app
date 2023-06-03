import AuthHeader from "../../components/authHeader/authHeader";
import { TextInput, Alert, View, Text } from "react-native";
import { globalPublicStyles } from "../../styles/global";
import tw from "twrnc";
import { Ionicons, Entypo, MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import Button from "../../components/button/Button";
import { dark, error, primary, success } from "../../styles/colors";
import { useState } from "react";
import { credentials } from "../../data/credentials";

const LoginScreen = ({ navigation }) => {
    const [loader, setLoader] = useState(false);
    const [cred, setCred] = useState(credentials);

    const authCheck = () => {
        if (cred.username !== credentials.username || cred.password !== credentials.password) {
            Alert.alert("Username or Password incorrect", "Try Again!");
        } else {
            navigation.navigate("Home");
        }
        setLoader(false);
    };

    const onSubmit = () => {
        setLoader(true);
        setTimeout(() => authCheck(), 1000);
    };

    const SuccessIcon = <AntDesign name="check" size={24} color={success} />;
    const ErrorIcon = <Entypo name="cross" size={24} color={error} />;

    return (
        <View style={globalPublicStyles}>
            <Ionicons name="chevron-back" size={32} color="white" style={tw`m-2`} onPress={() => navigation.goBack()} />
            <View style={tw`mt-4 ml-4`}>
                <AuthHeader name={"Login"} />
            </View>
            <View style={tw`flex mt-22 justify-center items-center`}>
                <View style={tw`flex flex-row justify-between items-center bg-[${dark}] px-4 my-2 rounded w-9/12`}>
                    <TextInput
                        style={tw`my-2 text-white w-11/12 py-2`}
                        placeholder="Name"
                        placeholderTextColor="white"
                        value={cred.username}
                        onChangeText={(e) => setCred({ ...cred, username: e })}
                    />
                </View>
                <View style={tw`flex flex-row justify-between bg-[${dark}] items-center px-4 my-2 rounded w-9/12`}>
                    <TextInput
                        style={tw`my-2 text-white w-11/12 py-2`}
                        textContentType="password"
                        placeholder="Password"
                        placeholderTextColor="white"
                        value={cred.password}
                        onChangeText={(e) => setCred({ ...cred, password: e })}
                    />
                </View>
                <View style={tw`flex flex-row items-center text-right self-end mr-12`}>
                    <Text style={tw`text-sm text-white mr-1`} onPress={() => navigation.navigate("Forgot_Password")}>
                        Forgot password
                    </Text>
                    <MaterialIcons name="arrow-right-alt" size={24} color={primary} />
                </View>
                <Button name={"Login"} loader={loader} loaderText={"Logging in"} onPress={onSubmit} />
            </View>
            <Text style={tw`text-white text-base mt-12 text-center mb-8`}>Or login with social account</Text>
            <View style={tw`flex flex-row justify-center mb-22`}>
                <AntDesign name="google" size={24} color={primary} style={tw`mr-12`} />
                <FontAwesome name="facebook" size={24} color={primary} />
            </View>
        </View>
    );
};

export default LoginScreen;
