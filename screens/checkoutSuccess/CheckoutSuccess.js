import { View, Image, Text } from "react-native";
import tw from "twrnc";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import SuccessBags from "../../assets/images/bags.png";
import Button from "../../components/button/Button";

const CheckoutSuccess = ({ navigation }) => {
    return (
        <AuthenticatedLayout>
            <View style={tw`flex-1 justify-center items-center mt-8 pt-32`}>
                <Image source={SuccessBags} resizeMode="cover" />
                <Text style={tw`text-white text-2xl my-4`}>Success</Text>
                <Text style={tw`text-white text-sm mb-2 mx-12 text-center`}>
                    Your order will be delivered soon. Thank you for choosing our app!
                </Text>
                <Button name={"Continue Shopping"} onPress={() => navigation.navigate("Home")} />
            </View>
        </AuthenticatedLayout>
    );
};

export default CheckoutSuccess;
