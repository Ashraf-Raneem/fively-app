import { View, Text } from "react-native";
import tw from "twrnc";
import { gray } from "../../styles/colors";
import { AntDesign } from "@expo/vector-icons";

const DropdownDrawerButton = ({ text }) => {
    return (
        <View
            style={tw`flex flex-row justify-between items-center bg-transparent border border-[${gray}] p-1 px-2 w-32 rounded-lg mr-4`}
        >
            <Text style={tw`text-[${gray}]`}>{text}</Text>
            <AntDesign name="down" size={12} color={gray} />
        </View>
    );
};

export default DropdownDrawerButton;
