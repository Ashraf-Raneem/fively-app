import React, { useId, useState } from "react";
import { View, TextInput } from "react-native";
import tw from "twrnc";
import Button from "../../components/button/Button";
import { useDispatch } from "react-redux";
import addressSlice from "../../redux/address/Address";
import { dark } from "../../styles/colors";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";

const formFields = {
    name: "",
    address: "",
    city: "",
    zip: "",
    country: "",
};

const AddShippingAddress = ({ navigation }) => {
    const dispatch = useDispatch();
    const { addAddress } = addressSlice.actions;
    const id = useId();

    const [form, setForm] = useState(formFields);

    const onSubmit = () => {
        const payload = {
            id: id,
            name: form.name,
            address: form.address + " " + form.city + " " + form.zip + ", " + form.country,
        };
        dispatch(addAddress(payload));
        navigation.navigate("shippingAddresses");
    };

    return (
        <AuthenticatedLayout>
            <View style={tw`flex justify-center items-center mt-22`}>
                <View style={tw`flex flex-row justify-between items-center bg-[${dark}] px-4 my-2 rounded w-10/12`}>
                    <TextInput
                        style={tw`my-2 text-white w-11/12 py-2`}
                        placeholder="Name"
                        placeholderTextColor="white"
                        value={form.name}
                        onChangeText={(text) => setForm({ ...form, name: text })}
                    />
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-[${dark}] px-4 my-2 rounded w-10/12`}>
                    <TextInput
                        style={tw`my-2 text-white w-11/12 py-2`}
                        placeholder="Address"
                        placeholderTextColor="white"
                        value={form.address}
                        onChangeText={(text) => setForm({ ...form, address: text })}
                    />
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-[${dark}] px-4 my-2 rounded w-10/12`}>
                    <TextInput
                        style={tw`my-2 text-white w-11/12 py-2`}
                        placeholder="City"
                        placeholderTextColor="white"
                        value={form.city}
                        onChangeText={(text) => setForm({ ...form, city: text })}
                    />
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-[${dark}] px-4 my-2 rounded w-10/12`}>
                    <TextInput
                        style={tw`my-2 text-white w-11/12 py-2`}
                        placeholder="Zip / Postal code"
                        placeholderTextColor="white"
                        value={form.zip}
                        onChangeText={(text) => setForm({ ...form, zip: text })}
                    />
                </View>
                <View style={tw`flex flex-row justify-between items-center bg-[${dark}] px-4 my-2 rounded w-10/12`}>
                    <TextInput
                        style={tw`my-2 text-white w-11/12 py-2`}
                        placeholder="Country"
                        placeholderTextColor="white"
                        value={form.country}
                        onChangeText={(text) => setForm({ ...form, country: text })}
                    />
                </View>
                <Button name={"Save Address"} onPress={onSubmit} />
            </View>
        </AuthenticatedLayout>
    );
};

export default AddShippingAddress;
