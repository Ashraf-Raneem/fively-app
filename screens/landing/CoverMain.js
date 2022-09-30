import { View, Text, ImageBackground, ScrollView } from "react-native";
import Navbar from "../../components/navbar/Navbar";
import { globalStyle } from "../../styles/global";
import tw from "twrnc";
import CoverImage from "../../assets/images/cover-main.png";
import Button from "../../components/button/Button";
import { white, dark, gray } from "../../styles/colors";
import ProductCard from "../../components/products/ProductCard";
import { productList } from "../../data/productList";

const CoverMain = () => {
    return (
        <View style={globalStyle}>
            <ScrollView>
                <View>
                    <ImageBackground source={CoverImage} resizeMode="cover" style={tw`relative w-full h-[536px]`}>
                        <View style={tw`absolute bottom-0 left-0 w-8/12 ml-4`}>
                            <Text style={tw` font-bold text-white text-6xl`}>Fashion Sale</Text>
                            <Button name={"Check"}></Button>
                        </View>
                    </ImageBackground>
                </View>
                <View style={tw`p-4 w-full flex flex-col mb-20`}>
                    <View style={tw`flex flex-row justify-between`}>
                        <View>
                            <Text style={tw`text-[${white}] text-[32px] font-bold`}>New</Text>
                            <Text style={tw`text-[${gray}] text-sm`}>You've never seen it before !</Text>
                        </View>
                        <View>
                            <Text style={tw`text-[${gray}] text-sm mt-4`}>View All</Text>
                        </View>
                    </View>
                    <ProductCard product={productList[0]} />
                </View>
            </ScrollView>
            <Navbar page={"home"} />
        </View>
    );
};

export default CoverMain;
