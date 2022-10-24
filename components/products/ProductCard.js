import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { gray, dark, primary, white } from "../../styles/colors";
import { Entypo } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";

const ProductCard = (props) => {
    const { product, navigation } = props;
    const { image, name, tag, rating, company, discountedPrice, price, liked, outOfStock } = product;
    return (
        <View style={tw`w-[162px] my-4`}>
            <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
                <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={tw`relative w-[162px] h-[182px] rounded-xl overflow-hidden`}
                >
                    {tag && (
                        <View style={tw`absolute top-0 left-0 ml-2 bg-[${tag.tagColor}] rounded-xl mt-2 p-1 px-2`}>
                            <Text style={tw`text-white text-xs uppercase`}>{tag.value}</Text>
                        </View>
                    )}
                </ImageBackground>
                <View style={tw`absolute right-0 bottom-0 z-40`}>
                    <View
                        style={tw`relative top-5 flex justify-center items-center bg-[${
                            liked ? primary : dark
                        }] rounded-full w-12 h-12`}
                    >
                        <Entypo name="heart-outlined" size={18} color={liked ? white : gray} />
                    </View>
                </View>
            </TouchableOpacity>
            <View style={tw`flex flex-col text-left ml-2 mt-1`}>
                <View style={tw`mt-2 flex flex-row`}>
                    <AirbnbRating defaultRating={rating} count={5} size={12} showRating={false} isDisabled />
                    <Text style={tw`text-[${gray}] text-sm`}>({rating})</Text>
                </View>
                <Text style={tw`text-[${gray}] text-xs`}>{company}</Text>
                <Text style={tw`text-white text-xl`}>{name}</Text>
                {discountedPrice ? (
                    <View style={tw`flex flex-row`}>
                        <Text style={tw`line-through text-[${gray}] text-lg`}>${price}</Text>
                        <Text style={tw`text-[${primary}] text-lg ml-2`}>${discountedPrice}</Text>
                    </View>
                ) : (
                    <Text style={tw`text-white text-lg`}>${price}</Text>
                )}
            </View>
        </View>
    );
};

export default ProductCard;
