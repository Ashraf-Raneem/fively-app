import { View, Text, ImageBackground } from "react-native";
import tw from "twrnc";
import CoverImage from "../../assets/images/cover-main.png";
import Button from "../../components/button/Button";
import { white, dark, gray, primary } from "../../styles/colors";
import ProductCard from "../../components/products/ProductCard";
import { productList } from "../../data/productList";
import Slick from "react-native-slick";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";

const CoverMain = ({ navigation }) => {
    return (
        <AuthenticatedLayout page="home">
            <View>
                <ImageBackground source={CoverImage} resizeMode="cover" style={tw`relative w-full h-[536px]`}>
                    <View style={tw`absolute bottom-0 left-0 w-8/12 ml-4`}>
                        <Text style={tw` font-bold text-white text-6xl`}>Fashion Sale</Text>
                        <Button name={"Check"}></Button>
                    </View>
                </ImageBackground>
            </View>
            <View style={tw`p-4 pb-0 w-full flex flex-col`}>
                <View style={tw`flex flex-row justify-between`}>
                    <View>
                        <Text style={tw`text-[${white}] text-[32px] font-bold`}>New</Text>
                        <Text style={tw`text-[${gray}] text-sm`}>You've never seen it before !</Text>
                    </View>
                    <View>
                        <Text style={tw`text-[${gray}] text-sm mt-4`}>View All</Text>
                    </View>
                </View>
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
            <View style={tw`px-4 w-full flex flex-col mb-20`}>
                <View style={tw`flex flex-row justify-between`}>
                    <View>
                        <Text style={tw`text-[${white}] text-[32px] font-bold`}>On Sale</Text>
                        <Text style={tw`text-[${gray}] text-sm`}>Cash in the discounts!</Text>
                    </View>
                    <View>
                        <Text style={tw`text-[${gray}] text-sm mt-4`}>View All</Text>
                    </View>
                </View>
                <Slick
                    style={tw`h-[350px]`}
                    horizontal={true}
                    loop={true}
                    showsButtons={false}
                    dotColor={dark}
                    activeDotColor={primary}
                >
                    <View style={tw`flex flex-row justify-between`}>
                        <ProductCard product={productList[4]} />
                        <ProductCard product={productList[5]} />
                    </View>
                    <View style={tw`flex flex-row justify-between`}>
                        <ProductCard product={productList[6]} />
                        <ProductCard product={productList[7]} />
                    </View>
                </Slick>
            </View>
        </AuthenticatedLayout>
    );
};

export default CoverMain;
