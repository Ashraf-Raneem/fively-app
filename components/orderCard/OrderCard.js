import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { dark, gray } from "../../styles/colors";

const OrderCard = ({ item }) => {
    const { order, tracking, quantity, status, amount, date } = item;
    return (
        <View style={tw`h-[160px] w-full flex bg-[${dark}] my-4 rounded-lg p-4`}>
            <View style={tw`flex flex-row justify-between items-center`}>
                <Text style={tw`text-white`}>Order #{order}</Text>
                <Text style={tw`text-[${gray}]`}>{date}</Text>
            </View>
            <Text style={tw`text-white mt-2`}>
                <Text style={tw`text-[${gray}]`}>Tracking Number: </Text>
                {tracking}
            </Text>
            <View style={tw`flex flex-row justify-between mt-2 items-center`}>
                <Text style={tw`text-white`}>
                    <Text style={tw`text-[${gray}]`}>Quantity: </Text>
                    {quantity}
                </Text>
                <Text style={tw`text-white`}>
                    <Text style={tw`text-[${gray}]`}>Total Amount: </Text>$ {amount}
                </Text>
            </View>
            <View style={tw`flex flex-row justify-between mt-4 items-center`}>
                <TouchableOpacity style={tw`flex justify-center items-center p-2 border border-white rounded-lg`}>
                    <Text style={tw`text-white`}>Details</Text>
                </TouchableOpacity>
                <Text
                    style={tw`text-${
                        status === "Delivered" ? "green-400" : status === "Pending" ? "orange-400" : "red-400"
                    }`}
                >
                    {status}
                </Text>
            </View>
        </View>
    );
};

export default OrderCard;
