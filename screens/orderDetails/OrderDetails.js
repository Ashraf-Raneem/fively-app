import { View, Image, Text } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import { gray, dark, white } from "../../styles/colors";

const OrderDetails = ({ navigation }) => {
    const dispatch = useDispatch();
    const { orderDetail, address } = useSelector((state) => state);
    const { orderInfo } = orderDetail;
    const { selected } = address;
    const { order, tracking, status, date, items } = orderInfo;
    let totalAmount = items.reduce((sum, item) => sum + item.price, 0);
    let quantities = items.length;

    return (
        <AuthenticatedLayout>
            <View style={tw`flex flex-col m-4`}>
                <View style={tw`flex flex-row justify-between items-center`}>
                    <Text style={tw`text-white text-lg`}>Order #{order}</Text>
                    <Text style={tw`text-[${gray}] text-lg`}>{date}</Text>
                </View>
                <View style={tw`flex flex-row justify-between mt-2 items-center`}>
                    <Text style={tw`text-white mt-2 text-lg`}>
                        <Text style={tw`text-[${gray}] text-lg`}>Tracking Number: </Text>
                        {tracking}
                    </Text>
                    <Text
                        style={tw`text-${
                            status === "Delivered" ? "green-400" : status === "Pending" ? "orange-400" : "red-400"
                        } text-lg`}
                    >
                        {status}
                    </Text>
                </View>
                <Text style={tw`text-white text-xl my-2`}>{quantities} items</Text>
                <View>
                    {items.map((el) => (
                        <View style={tw`h-[120px] w-full flex flex-row bg-[${dark}] my-4 rounded-lg`}>
                            <View style={tw``}>
                                <Image source={el.picture} resizeMode="cover" style={tw`rounded-l h-full w-30`} />
                            </View>
                            <View style={tw`flex flex-col ml-4 w-52`}>
                                <View style={tw`flex flex-col mt-2`}>
                                    <Text style={tw`text-[${white}] text-lg`}>{el.name}</Text>
                                    <View style={tw`flex flex-col mb-2`}>
                                        <Text style={tw`text-[${white}] font-extralight`}>
                                            <Text style={tw`text-[${gray}]`}>Size:</Text> {el.size}
                                        </Text>
                                        <Text style={tw`text-[${white}] font-extralight`}>
                                            <Text style={tw`text-[${gray}]`}>Color:</Text> {el.color}
                                        </Text>
                                    </View>
                                </View>
                                <View style={tw`flex flex-row justify-between items-center`}>
                                    <View style={tw`flex flex-row items-center`}>
                                        <Text style={tw`text-[${white}] font-extralight`}>
                                            <Text style={tw`ml-3 text-[${gray}]`}>Unit:</Text> {el.unit}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={tw`text-[${gray}] text-xl mb-2`}>$ {el.price}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

                <Text style={tw`text-white text-xl`}>Order Information</Text>
                <View style={tw`flex flex-row justify-between my-2`}>
                    <Text style={tw`w-1/2 text-left text-[${gray}] text-lg mr-1`}>Shipping Address</Text>
                    <Text style={tw`w-1/2 text-left text-white text-lg`}>{selected.address}</Text>
                </View>
                <View style={tw`flex flex-row justify-between my-2`}>
                    <Text style={tw`w-1/2 text-left text-[${gray}] text-lg mr-1`}>Payment Method</Text>
                    <Text style={tw`w-1/2 text-left text-white text-lg`}>Mastercard *** *** *** 3785</Text>
                </View>
                <View style={tw`flex flex-row justify-between my-2`}>
                    <Text style={tw`w-1/2 text-left text-[${gray}] text-lg mr-1`}>Delivery Method</Text>
                    <Text style={tw`w-1/2 text-left text-white text-lg`}>FedEx 2-4 days</Text>
                </View>
                <View style={tw`flex flex-row justify-between my-2`}>
                    <Text style={tw`w-1/2 text-left text-[${gray}] text-lg mr-1`}>Discount Used</Text>
                    <Text style={tw`w-1/2 text-left text-white text-lg`}>$ 0</Text>
                </View>
                <View style={tw`flex flex-row justify-between my-2 mb-14`}>
                    <Text style={tw`w-1/2 text-left text-[${gray}] text-lg mr-1`}>Total Amount</Text>
                    <Text style={tw`w-1/2 text-left text-white text-lg`}>$ {totalAmount.toFixed(2)}</Text>
                </View>
            </View>
        </AuthenticatedLayout>
    );
};

export default OrderDetails;
