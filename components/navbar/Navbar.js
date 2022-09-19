import { View, Text } from "react-native";
import tw from "twrnc";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { dark, gray, primary } from "../../styles/colors";

const Navbar = ({ page }) => {
    return (
        <View style={tw`absolute bottom-0 right-0 left-0 rounded-l-xl rounded-r-xl bg-[${dark}]`}>
            <View style={tw`flex flex-row justify-evenly items-center py-4 shadow-md`}>
                <View style={tw`flex flex-col justify-center items-center`}>
                    <Entypo name="home" size={24} color={page === "home" ? primary : "white"} />
                    <Text style={tw`text-[${page === "home" ? primary : gray}]`}>Home</Text>
                </View>
                <View style={tw`flex flex-col justify-center items-center`}>
                    <AntDesign name="shoppingcart" size={24} color={page === "shop" ? primary : "white"} />
                    <Text style={tw`text-[${page === "shop" ? primary : gray}]`}>Shop</Text>
                </View>
                <View style={tw`flex flex-col justify-center items-center`}>
                    <Entypo name="shopping-bag" size={24} color={page === "cart" ? primary : "white"} />
                    <Text style={tw`text-[${page === "cart" ? primary : gray}]`}>Bag</Text>
                </View>
                <View style={tw`flex flex-col justify-center items-center`}>
                    <Entypo name="heart-outlined" size={24} color={page === "favorite" ? primary : "white"} />
                    <Text style={tw`text-[${page === "favorite" ? primary : gray}]`}>Favourite</Text>
                </View>
                <View style={tw`flex flex-col justify-center items-center`}>
                    <MaterialCommunityIcons name="account" size={24} color={page === "account" ? primary : "white"} />
                    <Text style={tw`text-[${page === "account" ? primary : gray}]`}>Account</Text>
                </View>
            </View>
        </View>
    );
};

export default Navbar;
