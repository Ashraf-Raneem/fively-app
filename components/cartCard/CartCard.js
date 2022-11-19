import { View, Text, Image, TouchableHighlight } from "react-native";
import tw from "twrnc";
import { background, dark, gray, white } from "../../styles/colors";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import cartSlice from "../../redux/cart/Cart";

const CartCard = ({ item }) => {
    const dispatch = useDispatch();
    const { addToCart, decreaseFromCart } = cartSlice.actions;

    const { id, image, name, size, color, price, discountedPrice, quantity } = item;

    return (
        <View style={tw`h-[140px] w-full flex flex-row bg-[${dark}] my-4 rounded-lg`}>
            <View style={tw``}>
                <Image source={image} resizeMode="cover" style={tw`rounded-l h-full w-40`} />
            </View>
            <View style={tw`flex flex-col ml-4 w-48`}>
                <View style={tw`flex flex-row justify-between`}>
                    <View style={tw`flex flex-col mt-2`}>
                        <Text style={tw`text-[${white}] text-lg`}>{name}</Text>
                        <View style={tw`flex flex-row mb-4`}>
                            <Text style={tw`text-[${white}] font-extralight`}>
                                <Text style={tw`text-[${gray}]`}>Size:</Text> {size}
                            </Text>
                            <Text style={tw`ml-3 text-[${white}] font-extralight`}>
                                <Text style={tw`ml-3 text-[${gray}]`}>Color:</Text> {color}
                            </Text>
                        </View>
                    </View>
                    <Entypo name="dots-three-vertical" size={24} color={gray} style={tw`mt-5`} />
                </View>
                <View style={tw`flex flex-row justify-between items-center`}>
                    <View style={tw`flex flex-row items-center`}>
                        <TouchableHighlight
                            onPress={() => dispatch(decreaseFromCart(item))}
                            style={tw`w-10 h-10 rounded-full justify-center items-center bg-[${background}]`}
                        >
                            <Text style={tw`text-[${gray}]`}> - </Text>
                        </TouchableHighlight>
                        <Text style={tw`mx-2 text-[${white}]`}>{quantity}</Text>
                        <TouchableHighlight
                            onPress={() => dispatch(addToCart(item))}
                            style={tw`w-10 h-10 rounded-full justify-center items-center bg-[${background}]`}
                        >
                            <Text style={tw`text-[${gray}]`}> + </Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Text style={tw`text-[${gray}] text-xl mb-2`}>
                            $ {discountedPrice ? discountedPrice : price}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CartCard;
