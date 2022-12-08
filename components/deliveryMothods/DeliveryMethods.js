import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import tw from "twrnc";
import { gray, primary, white } from "../../styles/colors";
import { deliveryList } from "../../data/deliveryModeList";

const DeliveryMethods = () => {
    const [selected, setSelected] = useState("dhl");

    return (
        <View style={tw`flex flex-row justify-between w-full my-4`}>
            {deliveryList.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={tw`flex flex-col justify-center items-center p-4 rounded ${
                        selected === item.name ? `bg-[${primary}]` : `bg-[${white}]`
                    }`}
                    onPress={() => setSelected(item.name)}
                >
                    <Image source={item.image} resizeMode="cover" />
                    <Text style={tw`text-[${gray}] text-sm`}>2 - 3 days </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default DeliveryMethods;
