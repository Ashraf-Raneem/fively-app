import { useState } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import tw from "twrnc";
import { dark, primary, gray } from "../../../styles/colors";

const SizeSelect = () => {
    const [size, setSize] = useState("");

    return (
        <View style={tw`flex flex-wrap flex-row my-4`}>
            <TouchableHighlight
                onPress={() => setSize("xs")}
                style={tw`flex justify-center items-center p-2 rounded-lg bg-[${
                    size === "xs" ? primary : dark
                }] w-12 mx-2 border border-${size === "xs" ? `[${primary}]` : `[${gray}]`}`}
            >
                <Text style={tw`text-white text-sm`}>XS</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => setSize("md")}
                style={tw`flex justify-center items-center p-2 rounded-lg bg-[${
                    size === "md" ? primary : dark
                }] w-12 mx-2 border border-${size === "md" ? `[${primary}]` : `[${gray}]`}`}
            >
                <Text style={tw`text-white text-sm`}>MD</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => setSize("l")}
                style={tw`flex justify-center items-center p-2 rounded-lg bg-[${
                    size === "l" ? primary : dark
                }] w-12 mx-2 border border-${size === "l" ? `[${primary}]` : `[${gray}]`}`}
            >
                <Text style={tw`text-white text-sm`}>L</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => setSize("xl")}
                style={tw`flex justify-center items-center p-2 rounded-lg bg-[${
                    size === "xl" ? primary : dark
                }] w-12 mx-2 border border-${size === "xl" ? `[${primary}]` : `[${gray}]`}`}
            >
                <Text style={tw`text-white text-sm`}>XL</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={() => setSize("xxl")}
                style={tw`flex justify-center items-center p-2 rounded-lg bg-[${
                    size === "xxl" ? primary : dark
                }] w-12 mx-2 border border-${size === "xxl" ? `[${primary}]` : `[${gray}]`}`}
            >
                <Text style={tw`text-white text-sm`}>XXL</Text>
            </TouchableHighlight>
        </View>
    );
};

export default SizeSelect;
