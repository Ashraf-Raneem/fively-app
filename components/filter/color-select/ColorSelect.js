import { useState } from "react";
import { TouchableHighlight, View } from "react-native";
import tw from "twrnc";
import { gray, white } from "../../../styles/colors";

const ColorSelect = () => {
    const [color, setColor] = useState("");
    return (
        <View style={tw`flex flex-row justify-evenly my-4`}>
            <TouchableHighlight
                style={tw`border rounded-full flex justify-center ${color === "black" ? `border-[${white}]` : ""}`}
                onPress={() => setColor("black")}
            >
                <View style={tw`h-12 w-12 rounded-full bg-black m-[2px]`}></View>
            </TouchableHighlight>
            <TouchableHighlight
                style={tw`border rounded-full flex justify-center ${color === "red" ? `border-[${white}]` : ""}`}
                onPress={() => setColor("red")}
            >
                <View style={tw`h-12 w-12 rounded-full bg-red-300 m-[2px]`}></View>
            </TouchableHighlight>
            <TouchableHighlight
                style={tw`border rounded-full flex justify-center ${color === "yellow" ? `border-[${white}]` : ""}`}
                onPress={() => setColor("yellow")}
            >
                <View style={tw`h-12 w-12 rounded-full bg-yellow-300 m-[2px]`}></View>
            </TouchableHighlight>
            <TouchableHighlight
                style={tw`border rounded-full flex justify-center ${color === "blue" ? `border-[${white}]` : ""}`}
                onPress={() => setColor("blue")}
            >
                <View style={tw`h-12 w-12 rounded-full bg-blue-300 m-[2px]`}></View>
            </TouchableHighlight>
            <TouchableHighlight
                style={tw`border rounded-full flex justify-center ${color === "green" ? `border-[${white}]` : ""}`}
                onPress={() => setColor("green")}
            >
                <View style={tw`h-12 w-12 rounded-full bg-green-300 m-[2px]`}></View>
            </TouchableHighlight>
        </View>
    );
};

export default ColorSelect;
