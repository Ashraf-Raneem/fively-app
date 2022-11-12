import { View, Text } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { gray, white } from "../../styles/colors";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/cartCard/CartCard";
import Button from "../../components/button/Button";
import cartSlice from "../../redux/cart/Cart";

const Cart = () => {
    const dispatch = useDispatch();
    const { getTotal } = cartSlice.actions;
    const { cartList } = useSelector((store) => store.cart);

    return (
        <AuthenticatedLayout>
            <Text style={tw`text-2xl text-[${gray}]`}>My Bag</Text>
            <View style={tw`flex flex-col`}>
                {cartList.length > 0 ? (
                    cartList.map((item) => <CartCard item={item} />)
                ) : (
                    <Text>No product added to cart yet!</Text>
                )}
            </View>
            <View>
                <View style={tw`w-full h-18 bg-[${gray}] rounded-xl`}>
                    <Text>Add promo code</Text>
                </View>
                <View style={tw`flex flex-row justify-between`}>
                    <Text style={tw`text-[${gray}]`}>Total Amount</Text>
                    <Text style={tw`text-[${white}]`}>{dispatch(getTotal())}</Text>
                </View>
                <Button name={"Checkout"} block />
            </View>
        </AuthenticatedLayout>
    );
};

export default Cart;
