import { View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";
import { gray, dark, primary, white } from "../../styles/colors";
import DropdownDrawerButton from "../../components/dopdownDrawer/DropdownDrawerButton";
import Button from "../../components/button/Button";
import Slick from "react-native-slick";
import ProductCard from "../../components/products/ProductCard";
import { productList } from "../../data/productList";

const ProductDetails = ({ navigation }) => {
    const { image, name, tag, rating, company, discountedPrice, price, liked, outOfStock, desc } = productList[4];
    return (
        <AuthenticatedLayout>
            <View>
                <Image source={image} resizeMode="stretch" style={tw`w-100 h-90`} />
            </View>
            <View style={tw`p-4`}>
                <View style={tw`flex flex-row my-2`}>
                    <DropdownDrawerButton text={"Size"} />
                    <DropdownDrawerButton text={"Color"} />
                    <View
                        style={tw`flex justify-center items-center bg-[${
                            liked ? primary : dark
                        }] rounded-full w-12 h-12`}
                    >
                        <Entypo name="heart-outlined" size={18} color={liked ? white : gray} />
                    </View>
                </View>
                <View style={tw`flex flex-row justify-between mt-2`}>
                    <View style={tw`flex flex-col text-left`}>
                        <Text style={tw`text-white text-2xl`}>{company}</Text>
                        <Text style={tw`text-[${gray}] text-sm`}>{name}</Text>
                        <View style={tw`mt-2 flex flex-row`}>
                            <AirbnbRating defaultRating={rating} count={5} size={12} showRating={false} isDisabled />
                            <Text style={tw`text-[${gray}] text-sm`}>({rating})</Text>
                        </View>
                    </View>
                    <View>
                        {discountedPrice ? (
                            <View style={tw`flex flex-row`}>
                                <Text style={tw`line-through text-[${gray}] text-2xl`}>${price}</Text>
                                <Text style={tw`text-[${primary}] text-2xl ml-2`}>${discountedPrice}</Text>
                            </View>
                        ) : (
                            <Text style={tw`text-white text-2xl`}>${price}</Text>
                        )}
                    </View>
                </View>
                <Text style={tw`text-[${gray}] text-sm my-4`}>{desc}</Text>
                <Button name={"Add to Cart"} block />
                <TouchableOpacity onPress={() => navigation.navigate("Review")}>
                    <View
                        style={tw`border-t border-b border-[${dark}] py-2 flex flex-row justify-between items-center`}
                    >
                        <Text style={tw`text-lg text-[${gray}]`}>Reviews and Ratings</Text>
                        <AntDesign name="right" size={24} color={gray} />
                    </View>
                </TouchableOpacity>
                <View style={tw`my-2 flex flex-col`}>
                    <Text style={tw`text-[${white}] text-xl`}>Look at similar products</Text>
                    <Slick
                        style={tw`h-[350px]`}
                        horizontal={true}
                        loop={true}
                        showsButtons={false}
                        dotColor={dark}
                        activeDotColor={primary}
                    >
                        <View style={tw`flex flex-row justify-between`}>
                            <ProductCard navigation={navigation} product={productList[0]} />
                            <ProductCard navigation={navigation} product={productList[1]} />
                        </View>
                        <View style={tw`flex flex-row justify-between`}>
                            <ProductCard navigation={navigation} product={productList[2]} />
                            <ProductCard navigation={navigation} product={productList[3]} />
                        </View>
                    </Slick>
                </View>
            </View>
        </AuthenticatedLayout>
    );
};

export default ProductDetails;
