import { TouchableOpacity, View } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { gray, primary, white } from "../../styles/colors";
import RatingBar from "../../components/ratingbar/RatingBar";
import { AirbnbRating } from "react-native-ratings";
import { reviewList } from "../../data/reviewList";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const Review = (props) => {
    const { rating } = product;
    const [reviewDrawer, setReviewDrawer] = useState(false);

    return (
        <AuthenticatedLayout>
            <View style={tw`flex flex-row justify-between`}>
                <View style={tw`flex flex-col`}>
                    <Text style={tw`text-white text-xl`}>{rating}</Text>
                    <Text style={tw`text-[${gray}] text-xs`}>23 ratings</Text>
                </View>
                <View style={tw`flex flex-col`}>
                    <View style={tw`flex flex-row items-center`}>
                        <AirbnbRating defaultRating={5} count={5} size={12} showRating={false} isDisabled />
                        <RatingBar size={12} />
                        <Text style={tw`text-[${gray}]`}>12</Text>
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                        <AirbnbRating defaultRating={4} count={4} size={12} showRating={false} isDisabled />
                        <RatingBar size={8} />
                        <Text style={tw`text-[${gray}]`}>5</Text>
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                        <AirbnbRating defaultRating={3} count={3} size={12} showRating={false} isDisabled />
                        <RatingBar size={6} />
                        <Text style={tw`text-[${gray}]`}>0</Text>
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                        <AirbnbRating defaultRating={2} count={2} size={12} showRating={false} isDisabled />
                        <RatingBar size={4} />
                        <Text style={tw`text-[${gray}]`}>2</Text>
                    </View>
                    <View style={tw`flex flex-row items-center`}>
                        <AirbnbRating defaultRating={1} count={1} size={12} showRating={false} isDisabled />
                        <RatingBar size={2} />
                        <Text style={tw`text-[${gray}]`}>1</Text>
                    </View>
                </View>
            </View>
            <View style={tw`flex flex-col`}>
                <Text style={tw`text-white text-xl`}>8 Reviews</Text>
                <View style={tw`mt-4`}>
                    {reviewList.map((item) => (
                        <ReviewCard review={item} />
                    ))}
                </View>
            </View>
            <TouchableOpacity
                style={tw`absolute bottom-0 right-0 m-4 flex flex-row rounded-xl p-2 bg-[${primary}]`}
                onPress={() => setReviewDrawer(true)}
            >
                <MaterialIcons name="edit" size={12} color={white} />
                <Text style={tw`text-[${white}]`}>Write a review</Text>
            </TouchableOpacity>
        </AuthenticatedLayout>
    );
};

export default Review;
