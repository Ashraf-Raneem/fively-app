import { View, Text } from "react-native";
import tw from "twrnc";

const AuthHeader = ({ name }) => {
    return (
        <View>
            <Text style={tw`text-5xl text-white`}>{name}</Text>
        </View>
    );
};

export default AuthHeader;
