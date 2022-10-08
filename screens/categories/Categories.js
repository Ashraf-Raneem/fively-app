import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import SummerSaleBanner from "../../components/banner/SummerSale";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { dark, white } from "../../styles/colors";
import { categoryList } from "../../data/categoryList";

const Categories = ({ navigation }) => {
    return (
        <AuthenticatedLayout page="Categories">
            <SummerSaleBanner />
            <View style={tw`flex flex-col`}>
                {categoryList.map((item, index) => (
                    <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate("ProductList")}>
                        <View key={item.id} style={tw`mx-2 my-4 flex flex-row justify-between rounded-xl bg-[${dark}]`}>
                            <Text style={tw`self-center text-[${white}] text-lg ml-4`}>{item.name}</Text>
                            <Image source={item.image} />
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </View>
        </AuthenticatedLayout>
    );
};

export default Categories;
