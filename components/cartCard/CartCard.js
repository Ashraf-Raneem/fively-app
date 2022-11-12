import { View, Text, Image, TouchableHighlight } from "react-native";
import tw from "twrnc";
import { dark, gray } from "../../styles/colors";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import cartSlice from "../../redux/cart/Cart";

const CartCard = (props) => {
    const dispatch = useDispatch();
    const { addToCart, decreaseFromCart } = cartSlice.actions;

    const { id, image, name, size, color, quantity, price, discountedPrice } = props;

    return (
        <View style={tw`h-[184px] w-full flex flex-row bg-[${gray}]`}>
            <View style={tw``}>
                <Image source={image} resizeMode="cover" style={tw`absolute bottom-0 left-0`} />
            </View>
            <View style={tw`flex flex-col`}>
                <Text>{name}</Text>
                <View style={tw`flex flex-col mb-4`}>
                    <Text>
                        <Text>Size:</Text> {size}
                    </Text>
                    <Text>
                        <Text>Color:</Text> {color}
                    </Text>
                </View>
                <View style={tw`flex flex-row`}>
                    <TouchableHighlight
                        onPress={() => dispatch(decreaseFromCart(id))}
                        style={tw`w-12 h-12 rounded-full bg-[${dark}]`}
                    >
                        <Text style={tw`text-[${gray}]`}> - </Text>
                    </TouchableHighlight>
                    <Text style={tw`mx-2`}>{quantity}</Text>
                    <TouchableHighlight
                        onPress={() => dispatch(addToCart(id))}
                        style={tw`w-12 h-12 rounded-full bg-[${dark}]`}
                    >
                        <Text style={tw`text-[${gray}]`}> + </Text>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={tw`flex flex-col`}>
                <Entypo name="dots-three-vertical" size={24} color={gray} />
                <Text style={tw`mt-4 text-[${gray}]`}>{discountedPrice ? discountedPrice : price}</Text>
            </View>
        </View>
    );
};

export default CartCard;
