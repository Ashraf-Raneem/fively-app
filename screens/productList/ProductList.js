import { View } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { productList } from "../../data/productList";
import ProductCard from "../../components/products/ProductCard";
import CommonFilter from "../../components/filter/CommonFilter";
import UtilityFilters from "../../components/filter/UtilityFilters";

const ProductList = ({ navigation }) => {
    return (
        <AuthenticatedLayout>
            <CommonFilter />
            <UtilityFilters navigation={navigation} />
            <View style={tw`flex flex-row flex-wrap justify-evenly mb-12 w-full`}>
                {productList.map((item, index) => (
                    <View key={index}>
                        <ProductCard navigation={navigation} product={item} />
                    </View>
                ))}
            </View>
        </AuthenticatedLayout>
    );
};

export default ProductList;
