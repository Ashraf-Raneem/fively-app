import { TouchableOpacity, Text, View } from "react-native";
import tw from "twrnc";
import { primary, white } from "../../styles/colors";

const Button = ({ name, onPress, block, className }) => {
    return (
        <View style={tw`${block ? "w-full" : "w-9/12"} my-4 ${className ? className : ""}`}>
            <TouchableOpacity onPress={onPress}>
                <View style={tw`py-4 rounded-full bg-[${primary}]`}>
                    <Text style={tw`text-[${white}] font-bold uppercase text-sm text-center`}>{name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
