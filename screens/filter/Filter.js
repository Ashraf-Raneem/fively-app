import { View, Text } from "react-native";
import { globalStyle } from "../../styles/global";
import tw from "twrnc";
import RangeSlider from "rn-range-slider";
import { gray, primary } from "../../styles/colors";
import { useState } from "react";
import RangeSliderComponent from "../../components/range-slider/RangeSlider";

const FilterScreen = () => {
    const [price, setPrice] = useState(40);

    return (
        <View style={globalStyle}>
            <View style={tw`m-2 flex flex-col`}>
                <Text style={tw`text-white text-xl`}>Price Range</Text>
                <RangeSliderComponent />
            </View>
            <View style={tw`m-2 flex flex-col`}>
                <Text style={tw`text-white text-xl`}>Colors</Text>
            </View>
            <View style={tw`m-2 flex flex-col`}>
                <Text style={tw`text-white text-xl`}>Sizes</Text>
            </View>
            <View style={tw`m-2 flex flex-col`}>
                <Text style={tw`text-white text-xl`}>Category</Text>
            </View>
        </View>
    );
};

export default FilterScreen;
