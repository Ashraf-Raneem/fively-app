import { View, Text, TouchableOpacity } from "react-native";
import { globalStyle } from "../../styles/global";
import tw from "twrnc";
import { dark, gray, primary, white } from "../../styles/colors";
import RangeSliderComponent from "../../components/filter/range-slider/RangeSlider";
import ColorSelect from "../../components/filter/color-select/ColorSelect";
import SizeSelect from "../../components/filter/size-select/SizeSelect";
import CategorySelect from "../../components/filter/category-select/CategorySelect";

const FilterScreen = ({ navigation }) => {
    return (
        <View style={globalStyle}>
            <View style={tw`m-2 flex flex-col`}>
                <Text style={tw`text-white text-xl`}>Price Range</Text>
                <RangeSliderComponent />
            </View>
            <View style={tw`m-2 flex flex-col`}>
                <Text style={tw`text-white text-xl`}>Colors</Text>
                <ColorSelect />
            </View>
            <View style={tw`m-2 flex flex-col`}>
                <Text style={tw`text-white text-xl`}>Sizes</Text>
                <SizeSelect />
            </View>
            <View style={tw`m-2 flex flex-col`}>
                <Text style={tw`text-white text-xl`}>Category</Text>
                <CategorySelect />
            </View>
            <View style={tw`absolute bottom-0 right-0 left-0 flex flex-row justify-between mb-4`}>
                <View style={tw`w-46 my-4 mx-2`}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={tw`py-4 rounded-full bg-[${dark}] border border-[${gray}]`}>
                            <Text style={tw`text-[${white}] font-bold uppercase text-sm text-center`}>Discard</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={tw`w-46 my-4`}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={tw`py-4 rounded-full bg-[${primary}]`}>
                            <Text style={tw`text-[${white}] font-bold uppercase text-sm text-center`}>Apply</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default FilterScreen;
