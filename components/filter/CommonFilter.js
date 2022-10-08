import { useState } from "react";
import { View, Text, ScrollView, TouchableHighlight } from "react-native";
import Slick from "react-native-slick";
import tw from "twrnc";
import { filterList } from "../../data/filterList";
import { dark, white, hot } from "../../styles/colors";

const CommonFilter = () => {
    const [filter, setFilter] = useState("");
    return (
        <ScrollView horizontal={true} scrollEnabled={true} showsHorizontalScrollIndicator>
            {filterList.map((item, index) => {
                return (
                    <TouchableHighlight
                        key={index}
                        onPress={() => setFilter(item.id)}
                        style={tw`flex justify-center items-center rounded-2xl bg-[${
                            item.id === filter ? hot : white
                        }] h-8 w-26 my-4 mx-2`}
                    >
                        <Text style={tw`text-sm text-[${item.id === filter ? white : dark}]`}>{item.name}</Text>
                    </TouchableHighlight>
                );
            })}
        </ScrollView>
    );
};

export default CommonFilter;
