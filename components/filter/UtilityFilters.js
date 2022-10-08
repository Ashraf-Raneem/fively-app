import { TouchableHighlight, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { useState, useRef } from "react";
import { white } from "../../styles/colors";

const UtilityFilters = ({ navigation }) => {
    const [gridView, setGridView] = useState(false);
    const [sortDrawer, setSortDrawer] = useState(false);
    const [sort, setSort] = useState(false);

    const panelRef = useRef(null);

    const toggleView = () => {
        setGridView(!gridView);
    };

    const togglePanel = () => {
        setSortDrawer(!sortDrawer);
    };

    return (
        <View style={tw`flex flex-row justify-between mx-4 mb-2`}>
            <TouchableHighlight onPress={() => navigation.navigate("Filter")}>
                <View style={tw`flex flex-row items-center`}>
                    <Ionicons name="filter" size={24} color="white" />
                    <Text style={tw`text-[${white}] text-sm ml-2`}>Filter</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => togglePanel()}>
                <View style={tw`flex flex-row items-center`}>
                    <Ionicons name="md-swap-vertical" size={24} color="white" />
                    <Text style={tw`text-[${white}] text-sm ml-2`}>Price: Highest to lowest</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => panelRef.current.togglePanel()}>
                <View>
                    {gridView ? (
                        <Ionicons name="md-grid-outline" size={24} color="white" />
                    ) : (
                        <Ionicons name="ios-list-outline" size={24} color="white" />
                    )}
                </View>
            </TouchableHighlight>
        </View>
    );
};

export default UtilityFilters;
