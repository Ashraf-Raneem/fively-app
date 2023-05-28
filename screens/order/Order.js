import { View } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import { orderList } from "../../data/orderList";
import OrderCard from "../../components/orderCard/OrderCard";
import tw from "twrnc";

const OrderScreen = ({ navigation }) => {
    return (
        <AuthenticatedLayout>
            <View style={tw`flex flex-col mx-4 mb-14`}>
                {orderList.map((item) => (
                    <OrderCard item={item} navigation={navigation} />
                ))}
            </View>
        </AuthenticatedLayout>
    );
};

export default OrderScreen;
