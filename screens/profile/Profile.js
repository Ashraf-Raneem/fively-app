import { View, Text, TouchableOpacity, Image } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { dark, gray } from "../../styles/colors";
import { AntDesign } from "@expo/vector-icons";
import ProfileImage from "../../assets/images/avatars/ava.png";

const Profile = ({ navigation }) => {
    return (
        <AuthenticatedLayout>
            <View style={tw`mt-12 px-4`}>
                <Text style={tw`text-4xl text-white mb-4 font-bold`}>My profile</Text>
                <View style={tw`flex flex-row items-center mt-4`}>
                    <View>
                        <Image source={ProfileImage} resizeMode="cover" style={tw`rounded-l`} />
                    </View>
                    <View style={tw`ml-2`}>
                        <Text style={tw`text-xl text-white`}>Matilda Brown</Text>
                        <Text style={tw`text-sm text-[${gray}] mt-1`}>matildaBrown@example.com</Text>
                    </View>
                </View>
                <View style={tw`flex flex-col mt-8`}>
                    <TouchableOpacity style={tw`flex flex-row justify-between items-center my-4`}>
                        <View>
                            <Text style={tw`text-lg text-white`}>My Orders</Text>
                            <Text style={tw`text-sm text-[${gray}]`}>You have 12 pending orders</Text>
                        </View>
                        <AntDesign name="right" size={24} color={gray} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex flex-row justify-between items-center my-4`}>
                        <View>
                            <Text style={tw`text-lg text-white`}>Shipping Addresses</Text>
                            <Text style={tw`text-sm text-[${gray}]`}>
                                You have 3 different shipping addresses saved
                            </Text>
                        </View>
                        <AntDesign name="right" size={24} color={gray} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex flex-row justify-between items-center my-4`}>
                        <View>
                            <Text style={tw`text-lg text-white`}>Payment Methods</Text>
                            <Text style={tw`text-sm text-[${gray}]`}>Update Payment Method</Text>
                        </View>
                        <AntDesign name="right" size={24} color={gray} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex flex-row justify-between items-center my-4`}>
                        <View>
                            <Text style={tw`text-lg text-white`}>Activity Log</Text>
                            <Text style={tw`text-sm text-[${gray}]`}>Activity</Text>
                        </View>
                        <AntDesign name="right" size={24} color={gray} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex flex-row justify-between items-center my-4`}>
                        <View>
                            <Text style={tw`text-lg text-white`}>Promocodes</Text>
                            <Text style={tw`text-sm text-[${gray}]`}>Add or remove promocodes</Text>
                        </View>
                        <AntDesign name="right" size={24} color={gray} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex flex-row justify-between items-center my-4`}>
                        <View>
                            <Text style={tw`text-lg text-white`}>Settings</Text>
                            <Text style={tw`text-sm text-[${gray}]`}>Notification, Passwords etc.</Text>
                        </View>
                        <AntDesign name="right" size={24} color={gray} />
                    </TouchableOpacity>
                </View>
            </View>
        </AuthenticatedLayout>
    );
};

export default Profile;
