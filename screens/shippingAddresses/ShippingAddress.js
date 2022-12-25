import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { globalStyle } from "../../styles/global";
import tw from "twrnc";
import { dark, gray, hot, primary, white } from "../../styles/colors";
import { useSelector } from "react-redux";
import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";
import addressSlice from "../../redux/address/Address";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const ShippingAddresses = ({ navigation }) => {
    const dispatch = useDispatch();
    const { address } = useSelector((state) => state);
    const { addressList, selected } = address;
    const { setAddress, setEdit } = addressSlice.actions;

    const [isChecked, setChecked] = useState();

    const onShippingAddressChange = (item) => {
        setChecked(item.id);
        dispatch(setAddress(item));
    };

    const onEditTap = (item) => {
        dispatch(setEdit(item));
        navigation.navigate("editShippingAddress");
    };

    // Updates the current address on initial load;
    useEffect(() => {
        setChecked(selected.id);
    }, []);

    return (
        <View style={globalStyle}>
            <ScrollView>
                <View style={tw`flex flex-col mx-4`}>
                    {addressList.map((item) => {
                        return (
                            <View key={item.id} style={tw`flex flex-col bg-[${dark}] p-4 mt-4 rounded`}>
                                <View style={tw`flex flex-row justify-between`}>
                                    <Text style={tw`text-[${white}]`}>{item.name}</Text>
                                    <TouchableOpacity onPress={() => onEditTap(item)}>
                                        <Text style={tw`text-[${hot}]`}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={tw`text-[${white}] w-50`}>{item.address}</Text>
                                <View style={tw`flex flex-row my-4`}>
                                    <Checkbox
                                        value={isChecked === item.id}
                                        onValueChange={() => onShippingAddressChange(item)}
                                        color={isChecked ? primary : gray}
                                    />
                                    <Text style={tw`ml-2 text-[${white}]`}>Set as default address</Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
            <TouchableOpacity
                style={tw`absolute bottom-0 right-0 m-8 flex flex-row rounded-xl p-2 bg-[${primary}] items-center`}
                onPress={() => navigation.navigate("addShippingAddresses")}
            >
                <Ionicons name="add-outline" size={24} color={white} />
            </TouchableOpacity>
        </View>
    );
};

export default ShippingAddresses;
