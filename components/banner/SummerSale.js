import { View, Text } from "react-native";
import tw from "twrnc";
import { white, hot } from "../../styles/colors";

const SummerSaleBanner = () => {
    return (
        <View
            style={tw`flex flex-col justify-center items-center text-center bg-[${hot}] text-white rounded-xl h-24 my-4 mx-2`}
        >
            <Text style={tw`text-2xl text-[${white}]`}>SUMMER SALES</Text>
            <Text style={tw`text-sm text-[${white}]`}>Upto 20% off</Text>
        </View>
    );
};

export default SummerSaleBanner;
