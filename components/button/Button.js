import { TouchableOpacity, Text, View } from "react-native";
import tw from "twrnc";
import { primary, white } from "../../styles/colors";

const Button = ({ name, onPress }) => {
    return (
        <View style={tw`w-9/12 my-4`}>
            <TouchableOpacity onPress={onPress}>
                <View style={tw`py-4 rounded-full bg-[${primary}]`}>
                    <Text style={tw`text-[${white}] font-bold uppercase text-sm text-center`}>{name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
