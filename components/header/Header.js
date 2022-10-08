import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { dark } from "../../styles/colors";
import tw from "twrnc";

const Header = (props) => {
    return (
        <View style={tw`flex flex-row justify-between items-center h-18 pt-6 bg-[${dark}]`}>
            <Ionicons
                name="arrow-back"
                size={24}
                color="white"
                style={tw`ml-2`}
                onPress={() => props.navigation.goBack()}
            />
            <Text style={tw`text-lg text-white`}>{props.title}</Text>
            <Ionicons name="search" size={24} color="white" style={tw`mr-2`} />
        </View>
    );
};

export default Header;
