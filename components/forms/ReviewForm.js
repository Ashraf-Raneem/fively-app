import { View, Text, TextInput } from "react-native";
import tw from "twrnc";
import { background, gray, white } from "../../styles/colors";
import { AirbnbRating } from "react-native-ratings";
import Button from "../button/Button";

const ReviewForm = () => {
    return (
        <View style={tw`flex flex-col justify-center items-center mx-2`}>
            <Text style={tw`text-[${white}] text-lg font-bold`}>What is your rate ?</Text>
            <View style={tw`my-4`}>
                <AirbnbRating defaultRating={0} count={5} size={40} showRating={false} />
            </View>
            <Text style={tw`text-[${white}] text-lg`}>Please share your opinnion about the product</Text>
            <TextInput
                style={tw`my-2 text-white w-11/12 p-2 h-30 bg-[${background}] rounded-xl align-text-top`}
                multiline={true}
                numberOfLines={10}
                placeholder="Review"
                placeholderTextColor={gray}
            />
            <Button name={"Send Review"} block />
        </View>
    );
};

export default ReviewForm;
