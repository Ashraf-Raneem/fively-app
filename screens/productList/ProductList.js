import { View } from "react-native";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import tw from "twrnc";
import { productList } from "../../data/productList";
import ProductCard from "../../components/products/ProductCard";

const ProductList = () => {
    return (
        <AuthenticatedLayout>
            <View style={tw`flex flex-row flex-wrap justify-evenly mb-12 w-full`}>
                {productList.map((item) => (
                    <View>
                        <ProductCard product={item} />
                    </View>
                ))}
            </View>
        </AuthenticatedLayout>
    );
};

export default ProductList;
