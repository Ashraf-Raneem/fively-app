import { View, Text, ImageBackground } from "react-native";
import Navbar from "../../components/navbar/Navbar";
import { globalStyle } from "../../styles/global";
import tw from "twrnc";
import CoverImage from "../../assets/images/cover-main.png";
import Button from "../../components/button/Button";

const CoverMain = () => {
    return (
        <View style={globalStyle}>
            <View>
                <ImageBackground source={CoverImage} resizeMode="cover" style={tw`relative w-full h-[536px]`}>
                    <View style={tw`absolute bottom-0 left-0 w-8/12 ml-4`}>
                        <Text style={tw` font-bold text-white text-6xl`}>Fashion Sale</Text>
                        <Button name={"Check"}></Button>
                    </View>
                </ImageBackground>
            </View>
            <Navbar page={"home"} />
        </View>
    );
};

export default CoverMain;
