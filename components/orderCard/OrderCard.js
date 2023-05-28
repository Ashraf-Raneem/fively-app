import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { dark, gray } from "../../styles/colors";
import { useDispatch } from "react-redux";
import orderDetailSlice from "../../redux/orderDetail/OrderDetail";

const OrderCard = ({ item, navigation }) => {
    const { order, tracking, items, status, date } = item;
    const dispatch = useDispatch();
    const { setOrderDetail } = orderDetailSlice.actions;
    let totalAmount = items.reduce((sum, item) => sum + item.price, 0);
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
                    {items.length}
                </Text>
                <Text style={tw`text-white`}>
                    <Text style={tw`text-[${gray}]`}>Total Amount: </Text>$ {totalAmount.toFixed(2)}
                </Text>
            </View>
            <View style={tw`flex flex-row justify-between mt-4 items-center`}>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(setOrderDetail(item));
                        navigation.navigate("OrderDetail");
                    }}
                    style={tw`flex justify-center items-center p-2 border border-white rounded-lg`}
                >
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
