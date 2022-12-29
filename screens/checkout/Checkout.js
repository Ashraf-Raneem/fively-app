import { View, Text, TouchableOpacity, TextInput } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { dark, gray, hot, white } from "../../styles/colors";
import DeliveryMethods from "../../components/deliveryMothods/DeliveryMethods";
import Button from "../../components/button/Button";
import { useSelector } from "react-redux";

const Checkout = ({ navigation }) => {
    const { cart, address } = useSelector((state) => state);
    const { subTotal } = cart;
    const { selected } = address;

    return (
        <AuthenticatedLayout>
            <View style={tw`flex flex-col mx-4`}>
                <View style={tw`w-full my-4`}>
                    <Text style={tw`text-[${white}] text-lg`}>Shipping Address</Text>
                    <View style={tw`flex flex-col bg-[${dark}] p-4 mt-4 rounded`}>
                        <View style={tw`flex flex-row justify-between`}>
                            <Text style={tw`text-[${white}]`}>{selected.name}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("shippingAddresses")}>
                                <Text style={tw`text-[${hot}]`}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={tw`text-[${white}] w-50`}>{selected.address}</Text>
                    </View>
                </View>
                <View>
                    <Text style={tw`text-[${white}] text-lg`}>Card Information</Text>
                    <TextInput
                        textContentType="creditCardNumber"
                        style={tw`p-2 text-white my-2 border border-white rounded`}
                    />
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
                <Button name={"Submit Order"} block onPress={() => navigation.navigate("checkoutSuccess")} />
            </View>
        </AuthenticatedLayout>
    );
};

export default Checkout;
