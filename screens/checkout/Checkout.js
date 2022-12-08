import { View, Text, Image } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { dark, gray, hot, white } from "../../styles/colors";
import DeliveryMethods from "../../components/deliveryMothods/DeliveryMethods";
import Button from "../../components/button/Button";
// import { CreditCardInput } from "react-native-credit-card-input";
import { useSelector } from "react-redux";

const Checkout = ({ navigation }) => {
    const { cart } = useSelector((state) => state);
    const { subTotal } = cart;

    return (
        <AuthenticatedLayout>
            <View style={tw`flex flex-col mx-4`}>
                <View style={tw`w-full my-4`}>
                    <Text style={tw`text-[${white}] text-lg`}>Shipping Address</Text>
                    <View style={tw`flex flex-col bg-[${dark}] p-4 mt-4 rounded`}>
                        <View style={tw`flex flex-row justify-between`}>
                            <Text style={tw`text-[${white}]`}>Dean Jones</Text>
                            <Text style={tw`text-[${hot}]`}>Change</Text>
                        </View>
                        <Text style={tw`text-[${white}] w-50`}>
                            3 Newbridge Court Chino Hills, CA 91709, United States
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={tw`text-[${white}] text-lg`}>Payment</Text>
                    {/* <CreditCardInput /> */}
                </View>
                <View>
                    <Text style={tw`text-[${white}] text-lg`}>Delivery Methods</Text>
                    <DeliveryMethods />
                </View>
                <View style={tw`flex flex-row justify-between px-1 my-2`}>
                    <Text style={tw`text-[${gray}]`}>Order</Text>
                    <Text style={tw`text-[${white}]`}>${subTotal}</Text>
                </View>
                <View style={tw`flex flex-row justify-between px-1 my-1`}>
                    <Text style={tw`text-[${gray}]`}>Delivery</Text>
                    <Text style={tw`text-[${white}]`}>$15</Text>
                </View>
                <View style={tw`flex flex-row justify-between px-1 my-1`}>
                    <Text style={tw`text-[${gray}] text-lg`}>Summary</Text>
                    <Text style={tw`text-[${white}] text-lg`}>${subTotal + 15}</Text>
                </View>
                <Button name={"Submit Order"} block />
            </View>
        </AuthenticatedLayout>
    );
};

export default Checkout;
