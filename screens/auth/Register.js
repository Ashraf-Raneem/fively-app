import AuthHeader from "../../components/authHeader/authHeader";
import { TextInput, Alert, View, Text } from "react-native";
import { globalPublicStyles, globalStyle } from "../../styles/global";
import tw from "twrnc";
import { Ionicons, Entypo, MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import Button from "../../components/button/Button";
import { useState } from "react";
import { dark, error, primary, success } from "../../styles/colors";

const fields = {
    email: "",
    name: "",
    password: "",
};

const RegisterScreen = ({ navigation }) => {
    const [loader, setLoader] = useState(false);
    const [form, setForm] = useState(fields);

    const authCheck = () => {
        if (form.email !== "" || form.name !== "" || form.password !== "") {
            Alert.alert("Account Created Successfully", "Proceed to login");
            navigation.navigate("Login");
        } else {
            Alert.alert("All the fields needs to be filled", "Try again please");
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
                <AuthHeader name={"Register"} />
            </View>
            <View style={tw`flex justify-center items-center mt-22`}>
                <View style={tw`flex flex-row justify-between items-center bg-[${dark}] px-4 my-2 rounded w-9/12`}>
                    <TextInput
                        style={tw`my-2 text-white w-11/12 py-2`}
                        placeholder="Name"
                        placeholderTextColor="white"
                        value={form.name}
                        onChangeText={(value) => setForm({ ...form, name: value })}
                    />
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-[${dark}] px-4 my-2 rounded w-9/12`}>
                    <TextInput
                        style={tw`my-2 text-white w-11/12 py-2`}
                        placeholder="Email"
                        placeholderTextColor="white"
                        value={form.email}
                        onChangeText={(value) => setForm({ ...form, email: value })}
                    />
                </View>
                <View style={tw`flex flex-row justify-between bg-[${dark}] items-center px-4 my-2 rounded w-9/12`}>
                    <TextInput
                        style={tw`my-2 text-white w-11/12 py-2`}
                        textContentType="password"
                        placeholder="Password"
                        placeholderTextColor="white"
                        value={form.password}
                        onChangeText={(value) => setForm({ ...form, password: value })}
                    />
                </View>
                <View style={tw`flex flex-row items-center text-right self-end mr-12`}>
                    <Text style={tw`text-sm text-white mr-1`} onPress={() => navigation.navigate("Login")}>
                        Already have an account ?
                    </Text>
                    <MaterialIcons name="arrow-right-alt" size={24} color={primary} />
                </View>
                <Button name={"Register"} loader={loader} loaderText={"Registering"} onPress={onSubmit} />
            </View>
            <Text style={tw`text-white mt-12 text-center mb-8`}>Or Register with social account</Text>
            <View style={tw`flex flex-row justify-center mb-22`}>
                <AntDesign name="google" size={24} color={primary} style={tw`mr-12`} />
                <FontAwesome name="facebook" size={24} color={primary} />
            </View>
        </View>
    );
};

export default RegisterScreen;
