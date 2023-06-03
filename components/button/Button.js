import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";
import tw from "twrnc";
import { dark, primary, white } from "../../styles/colors";

const Button = ({ name, onPress, block, className, loader, loaderText }) => {
    return (
        <View style={tw`${block ? "w-full" : "w-9/12"} my-4 ${className ? className : ""}`}>
            <TouchableOpacity onPress={onPress}>
                <View style={tw`py-4 rounded-full bg-[${primary}]`}>
                    {loader ? (
                        <View style={tw`text-center flex flex-row items-center justify-center`}>
                            <ActivityIndicator size={"small"} color={dark} />
                            <Text style={tw`text-[${white}] font-bold uppercase text-sm text-center ml-2`}>
                                {loaderText}
                            </Text>
                        </View>
                    ) : (
                        <Text style={tw`text-[${white}] font-bold uppercase text-sm text-center`}>{name}</Text>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
