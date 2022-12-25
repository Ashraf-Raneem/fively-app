import React, { useEffect, useId, useState } from "react";
import { View, TextInput } from "react-native";
import tw from "twrnc";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import addressSlice from "../../redux/address/Address";
import { dark } from "../../styles/colors";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";

const formFields = {
    name: "",
    address: "",
};

const EditShippingAddress = ({ navigation }) => {
    const dispatch = useDispatch();
    const { address } = useSelector((state) => state);
    const { edited } = address;
    const { updateAddress } = addressSlice.actions;

    const [form, setForm] = useState(formFields);

    useEffect(() => {
        if (edited) {
            setForm({ name: edited.name, address: edited.address });
        }
    }, []);

    const onSubmit = () => {
        const payload = {
            id: edited.id,
            name: form.name,
            address: form.address,
        };
        dispatch(updateAddress(payload));
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
                <Button name={"Update Address"} onPress={onSubmit} />
            </View>
        </AuthenticatedLayout>
    );
};

export default EditShippingAddress;
