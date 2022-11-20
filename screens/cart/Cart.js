import { View, Text, TouchableOpacity } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { dark, gray, primary, white } from "../../styles/colors";
import { useSelector } from "react-redux";
import CartCard from "../../components/cartCard/CartCard";
import Button from "../../components/button/Button";
import { AntDesign } from "@expo/vector-icons";
import BottomDrawer from "../../components/bottomDrawer/BottomDrawer";
import { useRef, useState } from "react";
import PromoCodeList from "../../components/promoCodeList/promoCodeList";

const Cart = () => {
    const { cart } = useSelector((state) => state);
    const { cartList, subTotal } = cart;
    const [promoCodeText, setPromoCodeText] = useState("");
    const refRBSheet = useRef();

    return (
        <AuthenticatedLayout>
            <View style={tw`flex-1 mt-8 mb-12 pt-8 mx-2`}>
                <Text style={tw`text-4xl text-[${white}]`}>My Bag</Text>
                <View style={tw`flex flex-col items-center justify-center my-4`}>
                    {cartList.length > 0 ? (
                        cartList.map((item) => <CartCard item={item} key={item.id} />)
                    ) : (
                        <View style={tw`py-4 items-center justify-center`}>
                            <AntDesign name="shoppingcart" size={120} color={primary} />
                            <Text style={tw`text-lg text-[${white}]`}>No product added to cart yet !</Text>
                        </View>
                    )}
                </View>
                <View>
                    <TouchableOpacity
                        style={tw`w-full h-10 bg-[${dark}] rounded-xl flex items-start justify-center px-4`}
                        onPress={() => refRBSheet.current.open()}
                    >
                        <Text style={tw`text-[${gray}]`}>
                            {promoCodeText === "" ? "Add promo code" : promoCodeText}
                        </Text>
                    </TouchableOpacity>
                    <View style={tw`flex flex-row justify-between items-center my-4`}>
                        <Text style={tw`text-[${gray}] text-lg`}>Total Amount</Text>
                        <Text style={tw`text-[${white}] text-2xl`}>${subTotal}</Text>
                    </View>
                </View>
                <Button name={"Checkout"} block />
                <BottomDrawer drawerRef={refRBSheet} height={430}>
                    <PromoCodeList pres setOnPress={setPromoCodeText} promoCodeText={promoCodeText} />
                </BottomDrawer>
            </View>
        </AuthenticatedLayout>
    );
};

export default Cart;
