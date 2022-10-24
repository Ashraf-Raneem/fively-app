import { View, Text } from "react-native";
import tw from "twrnc";
import { gray } from "../../styles/colors";
import { AntDesign } from "@expo/vector-icons";

const DropdownDrawerButton = ({ text }) => {
    return (
        <View style={tw`flex flex-row justify-between items-center bg-transparent border border-[${gray}] p-2`}>
            <Text>{text}</Text>
            <AntDesign name="down" size={24} color={gray} />
        </View>
    );
};

export default DropdownDrawerButton;
