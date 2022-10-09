import { useState } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import tw from "twrnc";
import { dark, primary, gray } from "../../../styles/colors";

const CategorySelect = () => {
    const [category, setCategory] = useState("");

    return (
        <View style={tw`flex flex-wrap flex-row my-4`}>
            <TouchableHighlight
                onPress={() => setCategory("All")}
                style={tw`flex justify-center items-center p-2 rounded-lg bg-[${
                    category === "All" ? primary : dark
                }] w-18 m-2 border border-${category === "All" ? `[${primary}]` : `[${gray}]`}`}
            >
                <Text style={tw`text-white text-sm`}>All</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => setCategory("Men")}
                style={tw`flex justify-center items-center p-2 rounded-lg bg-[${
                    category === "Men" ? primary : dark
                }] w-18 m-2 border border-${category === "Men" ? `[${primary}]` : `[${gray}]`}`}
            >
                <Text style={tw`text-white text-sm`}>Men</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => setCategory("Women")}
                style={tw`flex justify-center items-center p-2 rounded-lg bg-[${
                    category === "Women" ? primary : dark
                }] w-18 m-2 border border-${category === "Women" ? `[${primary}]` : `[${gray}]`}`}
            >
                <Text style={tw`text-white text-sm`}>Women</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => setCategory("Boys")}
                style={tw`flex justify-center items-center p-2 rounded-lg bg-[${
                    category === "Boys" ? primary : dark
                }] w-18 m-2 border border-${category === "Boys" ? `[${primary}]` : `[${gray}]`}`}
            >
                <Text style={tw`text-white text-sm`}>Boys</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => setCategory("Girls")}
                style={tw`flex justify-center items-center p-2 rounded-lg bg-[${
                    category === "Girls" ? primary : dark
                }] w-18 m-2 border border-${category === "Girls" ? `[${primary}]` : `[${gray}]`}`}
            >
                <Text style={tw`text-white text-sm`}>Girls</Text>
            </TouchableHighlight>
        </View>
    );
};

export default CategorySelect;
