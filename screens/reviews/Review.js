import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import tw from "twrnc";
import { gray, primary, white, dark } from "../../styles/colors";
import RatingBar from "../../components/ratingbar/RatingBar";
import { AirbnbRating } from "react-native-ratings";
import { reviewList } from "../../data/reviewList";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { productList } from "../../data/productList";
import { globalStyle } from "../../styles/global";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef } from "react";
import ReviewForm from "../../components/forms/ReviewForm";
import BottomDrawer from "../../components/bottomDrawer/BottomDrawer";

const Review = (props) => {
    const { rating } = productList[0];
    const [reviewDrawer, setReviewDrawer] = useState({ container: 0, open: false });

    const refRBSheet = useRef();

    const toggleDrawer = () => {
        if (reviewDrawer.open) {
            setReviewDrawer({ container: 0, open: false });
        } else {
            setReviewDrawer({ container: 100, open: true });
        }
    };

    return (
        <View style={globalStyle}>
            <ScrollView>
                <View style={tw`p-4 mb-8`}>
                    <View style={tw`flex flex-row`}>
                        <View style={tw`flex flex-col w-20`}>
                            <Text style={tw`text-white text-4xl`}>4.7</Text>
                            <Text style={tw`text-[${gray}] text-sm`}>23 ratings</Text>
                        </View>
                        <View style={tw`flex flex-col justify-end`}>
                            <AirbnbRating defaultRating={5} count={5} size={14} showRating={false} isDisabled />
                            <AirbnbRating
                                defaultRating={4}
                                count={4}
                                size={14}
                                showRating={false}
                                isDisabled
                                starContainerStyle={{ alignSelf: "flex-end" }}
                            />
                            <AirbnbRating
                                defaultRating={3}
                                count={3}
                                size={14}
                                showRating={false}
                                isDisabled
                                starContainerStyle={{ alignSelf: "flex-end" }}
                            />
                            <AirbnbRating
                                defaultRating={2}
                                count={2}
                                size={14}
                                showRating={false}
                                isDisabled
                                starContainerStyle={{ alignSelf: "flex-end" }}
                            />
                            <AirbnbRating
                                defaultRating={1}
                                count={1}
                                size={14}
                                showRating={false}
                                isDisabled
                                starContainerStyle={{ alignSelf: "flex-end" }}
                            />
                        </View>
                        <View style={tw`flex flex-col ml-2 w-32`}>
                            <View>
                                <RatingBar size={32} />
                            </View>
                            <View style={tw`mt-1`}>
                                <RatingBar size={18} />
                            </View>
                            <View style={tw`mt-1`}>
                                <RatingBar size={24} />
                            </View>
                            <View style={tw`mt-1`}>
                                <RatingBar size={12} />
                            </View>
                            <View style={tw`mt-1`}>
                                <RatingBar size={6} />
                            </View>
                        </View>
                        <View style={tw`flex flex-col ml-6`}>
                            <Text style={tw`text-[${gray}]`}>12</Text>
                            <Text style={tw`text-[${gray}]`}>5</Text>
                            <Text style={tw`text-[${gray}]`}>10</Text>
                            <Text style={tw`text-[${gray}]`}>2</Text>
                            <Text style={tw`text-[${gray}]`}>1</Text>
                        </View>
                    </View>
                    <View style={tw`flex flex-col`}>
                        <Text style={tw`text-white text-xl`}>8 Reviews</Text>
                        <View style={tw`mt-4`}>
                            {reviewList.map((item, index) => (
                                <ReviewCard review={item} key={index} />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={tw`absolute bottom-0 right-0 m-4 flex flex-row rounded-xl p-2 bg-[${primary}] items-center`}
                onPress={() => refRBSheet.current.open()}
            >
                <MaterialIcons name="edit" size={18} color={white} style={tw`mr-2`} />
                <Text style={tw`text-[${white}] text-base`}>Write a review</Text>
            </TouchableOpacity>
            <BottomDrawer drawerRef={refRBSheet} height={400}>
                <ReviewForm />
            </BottomDrawer>
            {/* <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                height={400}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent",
                    },
                    container: {
                        backgroundColor: dark,
                        borderTopEndRadius: 24,
                        borderTopLeftRadius: 24,
                    },
                    draggableIcon: {
                        backgroundColor: gray,
                    },
                }}
            >
                <ReviewForm />
            </RBSheet> */}
        </View>
    );
};

export default Review;
