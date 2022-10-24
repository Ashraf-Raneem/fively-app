import { View, Image } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";
import { gray, dark, primary, white } from "../../styles/colors";
import DropdownDrawerButton from "../../components/dopdownDrawer/DropdownDrawerButton";
import Button from "../../components/button/Button";
import Slick from "react-native-slick";
import { productList } from "../../data/productList";

const ProductDetails = ({ navigation }) => {
    const { image, name, tag, rating, company, discountedPrice, price, liked, outOfStock, desc } = productList[4];
    return (
        <AuthenticatedLayout>
            <View style={tw`h-23 w-full`}>
                <Image source={image} resizeMode="cover" />
            </View>
            <View style={tw`flex flex-row`}>
                <DropdownDrawerButton text={"Size"} />
                <DropdownDrawerButton text={"Color"} />
                <View
                    style={tw`relative top-5 flex justify-center items-center bg-[${
                        liked ? primary : dark
                    }] rounded-full w-12 h-12`}
                >
                    <Entypo name="heart-outlined" size={18} color={liked ? white : gray} />
                </View>
            </View>
            <View style={tw`flex flex-row justify-between mt-1`}>
                <View style={tw`flex flex-col text-left`}>
                    <Text style={tw`text-white text-xl`}>{company}</Text>
                    <Text style={tw`text-[${gray}] text-xs`}>{name}</Text>
                    <View style={tw`mt-2 flex flex-row`}>
                        <AirbnbRating defaultRating={rating} count={5} size={12} showRating={false} isDisabled />
                        <Text style={tw`text-[${gray}] text-sm`}>({rating})</Text>
                    </View>
                </View>
                <View>
                    {discountedPrice ? (
                        <View style={tw`flex flex-row`}>
                            <Text style={tw`line-through text-[${gray}] text-xl`}>${price}</Text>
                            <Text style={tw`text-[${primary}] text-xl ml-2`}>${discountedPrice}</Text>
                        </View>
                    ) : (
                        <Text style={tw`text-white text-xl`}>${price}</Text>
                    )}
                </View>
            </View>
            <View>
                <Text>{desc}</Text>
            </View>
            <View>
                <Button name={"Add to Cart"} block />
            </View>
            <View style={tw`border-y py-2 flex flex-row justify-between items-center`}>
                <Text style={tw`text-lg text-[${gray}]`}>Reviews and Ratings</Text>
                <AntDesign name="right" size={24} color={gray} />
            </View>
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
                        <ProductCard product={productList[0]} />
                        <ProductCard product={productList[1]} />
                    </View>
                    <View style={tw`flex flex-row justify-between`}>
                        <ProductCard product={productList[2]} />
                        <ProductCard product={productList[3]} />
                    </View>
                </Slick>
            </View>
        </AuthenticatedLayout>
    );
};

export default ProductDetails;
