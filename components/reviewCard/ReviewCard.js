import { View, Text, Image } from "react-native";
import tw from "twrnc";
import { dark, gray, white } from "../../styles/colors";
import { AirbnbRating } from "react-native-ratings";
import { AntDesign } from "@expo/vector-icons";

const ReviewCard = ({ review }) => {
    const { name, rating, date, desc, avatar } = review;
    return (
        <View style={tw`flex flex-col bg-[${dark}] rounded-xl mx-4 my-4`}>
            <View style={tw`absolute z-40`}>
                <View style={tw``}>
                    <Image
                        source={avatar}
                        resizeMode="cover"
                        style={tw`relative bottom-5 right-5 rounded-full w-10 h-10`}
                    />
                </View>
            </View>
            <View style={tw`m-2 flex-col pt-4`}>
                <View style={tw`flex flex-row justify-between`}>
                    <View style={tw`flex flex-col items-start`}>
                        <Text style={tw`text-white text-lg`}>{name}</Text>
                        <AirbnbRating defaultRating={rating} count={5} size={12} showRating={false} isDisabled />
                    </View>
                    <View>
                        <Text style={tw`text-[${gray}] text-xs mt-2`}>{date}</Text>
                    </View>
                </View>
                <View>
                    <Text style={tw`text-[${white}] mt-2 leading-normal text-base`}>{desc}</Text>
                </View>
                <View style={tw`flex flex-row text-right justify-end items-center`}>
                    <Text style={tw`text-[${gray}] mr-2 mt-1`}>Helpful</Text>
                    <AntDesign name="like1" size={24} color={gray} />
                </View>
            </View>
        </View>
    );
};

export default ReviewCard;
