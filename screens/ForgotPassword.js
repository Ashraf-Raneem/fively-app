import AuthHeader from "../components/authHeader/authHeader";
import { TextInput, Alert, View, Text } from "react-native";
import { globalPublicStyles } from "../styles/global";
import tw from "twrnc";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import Button from "../components/button/Button";
import { dark, error, primary, success } from "../styles/colors";

const ForgotPassword = ({ navigation }) => {
    const onSubmit = () => {
        Alert.alert("Pressed Login");
    };

    const SuccessIcon = <AntDesign name="check" size={24} color={success} />;
    const ErrorIcon = <Entypo name="cross" size={24} color={error} />;

    return (
        <View style={globalPublicStyles}>
            <Ionicons name="chevron-back" size={32} color="white" style={tw`m-2`} onPress={() => navigation.goBack()} />
            <View style={tw`mt-4 ml-4`}>
                <AuthHeader name={"Forgot Password"} />
            </View>
            <View style={tw`flex mt-22 justify-center items-center`}>
                <Text style={tw`text-white text-sm mb-1 w-9/12`}>
                    Please, enter your email address. You will receive a link to create a new password via email.
                </Text>
                <View style={tw`flex flex-row justify-between items-center bg-[${dark}] px-4 my-2 rounded w-9/12`}>
                    <TextInput
                        style={tw`my-2 text-white w-11/12 py-2`}
                        placeholder="Email"
                        placeholderTextColor="white"
                    />
                </View>

                <Button name={"Send Link"} onPress={onSubmit} />
            </View>
        </View>
    );
};

export default ForgotPassword;
