import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { promoCodeList } from "../../data/promoCodeList";
import { background, gray, hot, primary, white } from "../../styles/colors";

const PromoCodeList = ({ promoCodeText, setOnPress }) => {
    return (
        <View style={tw`flex flex-col m-2`}>
            <Text style={tw`text-[${white}] text-xl mb-2`}>Available Promo Codes</Text>
            {promoCodeList.map((item) => (
                <View style={tw`flex flex-row justify-between rounded my-2 h-[80px] bg-[${background}]`}>
                    <View style={tw`bg-[${hot}] flex flex-row justify-center w-22 items-center rounded-l h-full`}>
                        <Text style={tw`text-4xl text-[${white}]`}>{item.percentageOff}</Text>
                        <View style={tw`flex flex-col ml-2`}>
                            <Text style={tw`text-sm text-[${white}]`}>%</Text>
                            <Text style={tw`text-sm text-[${white}] relative bottom-1`}>off</Text>
                        </View>
                    </View>
                    <View style={tw`flex flex-col items-start justify-center`}>
                        <Text style={tw`text-lg text-[${gray}]`}>{item.name}</Text>
                        <Text style={tw`text-sm font-thin text-[${gray}]`}>{item.code}</Text>
                    </View>
                    <View style={tw`mr-2`}>
                        <Text style={tw`text-sm font-thin text-[${gray}] py-2`}>{item.remaining} days remaining</Text>
                        <TouchableOpacity disabled={promoCodeText === item.code} onPress={() => setOnPress(item.code)}>
                            <View
                                style={tw`py-1 rounded-full ${
                                    promoCodeText === item.code ? `bg-[${gray}]` : `bg-[${primary}]`
                                }`}
                            >
                                <Text style={tw`text-[${white}] font-bold uppercase text-sm text-center`}>
                                    {promoCodeText === item.code ? "Applied" : "Apply"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default PromoCodeList;
