import { View, Text, TextInput, TouchableOpacity, Switch } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { background, dark, gray } from "../../styles/colors";
import { useState } from "react";
import BottomDrawer from "../../components/bottomDrawer/BottomDrawer";
import Button from "../../components/button/Button";
import { useRef } from "react";

const notificationStatus = {
    sales: true,
    newArrivals: false,
    deliveryStatusChange: false,
};

const Settings = () => {
    const [notification, setNotification] = useState(notificationStatus);

    const toggleSwitch = (name, value) => {
        setNotification({ ...notification, [name]: value });
    };

    const refRBSheet = useRef();
    return (
        <AuthenticatedLayout>
            <View style={tw`m-4`}>
                <View style={tw`flex flex-col my-4`}>
                    <Text style={tw`text-white text-lg`}>Personal Information</Text>
                    <TextInput
                        style={tw`my-2 text-white py-2 bg-[${dark}] rounded-lg px-4`}
                        placeholder="Full Name"
                        placeholderTextColor={gray}
                    />
                    <TextInput
                        style={tw`my-2 text-white py-2 bg-[${dark}] rounded-lg px-4`}
                        placeholder="Date of Birth"
                        placeholderTextColor={gray}
                    />
                </View>
                <View style={tw`flex flex-col`}>
                    <View style={tw`flex flex-row justify-between items-center`}>
                        <Text style={tw`text-white text-lg`}>Password</Text>
                        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                            <Text style={tw`text-[${gray}] text-sm`}>Change</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={tw`my-2 text-[${gray}] bg-[${dark}] rounded-lg py-2 px-4`}
                        placeholder="Password"
                        value="*************"
                        disableFullscreenUI
                        placeholderTextColor={gray}
                    />
                </View>
                <View style={tw`flex flex-col my-4`}>
                    <Text style={tw`text-white text-lg`}>Notifications</Text>
                    <View style={tw`flex flex-row justify-between items-center`}>
                        <Text style={tw`text-white text-sm`}>Sales</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={notification.sales ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onChange={(e) => toggleSwitch("sales", e)}
                            value={notification.sales}
                        />
                    </View>
                    <View style={tw`flex flex-row justify-between items-center`}>
                        <Text style={tw`text-white text-sm`}>New Arrivals</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={notification.newArrivals ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onChange={(e) => toggleSwitch("newArrivals", e)}
                            value={notification.newArrivals}
                        />
                    </View>
                    <View style={tw`flex flex-row justify-between items-center`}>
                        <Text style={tw`text-white text-sm`}>Delivery Status Change</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={notification.deliveryStatusChange ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onChange={(e) => toggleSwitch("deliveryStatusChange", e)}
                            value={notification.deliveryStatusChange}
                        />
                    </View>
                </View>
            </View>
            <BottomDrawer drawerRef={refRBSheet} height={350}>
                <View style={tw`flex flex-col m-4`}>
                    <Text style={tw`text-white text-lg text-center`}>Password Change</Text>
                    <TextInput
                        style={tw`my-2 text-white bg-[${background}] px-4 rounded-lg py-2`}
                        placeholder="Old Password"
                        placeholderTextColor={gray}
                    />
                    <TextInput
                        style={tw`my-2 text-white bg-[${background}] px-4 rounded-lg py-2`}
                        placeholder="New Password"
                        placeholderTextColor={gray}
                    />
                    <TextInput
                        style={tw`my-2 text-white bg-[${background}] px-4 rounded-lg py-2`}
                        placeholder="Repeat Password"
                        placeholderTextColor={gray}
                    />
                    <Button name={"Submit"} block />
                </View>
            </BottomDrawer>
        </AuthenticatedLayout>
    );
};

export default Settings;
