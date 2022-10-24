import { View } from "react-native";
import tw from "twrnc";
import { primary } from "../../styles/colors";

const RatingBar = (props) => {
    const { size } = props;
    return <View style={tw`h-2 w-${size} rounded-full bg-[${primary}]`} />;
};

export default RatingBar;
