import ProductA from "../assets/images/product/white_tshirt_prod.png";
import ProductB from "../assets/images/product/denim_shirt_prod.png";
import ProductC from "../assets/images/product/female_white_tshirt.png";
import ProductD from "../assets/images/product/female_white_tshirt_black.png";
import { dark, primary } from "../styles/colors";

export const productList = [
    {
        id: 1,
        name: "T-shirt Sailing",
        image: ProductA,
        tag: {
            value: "new",
            tagColor: dark,
        },
        rating: 0,
        company: "Mango Boy",
        size: "L",
        color: "White",
        price: 10,
        discountedPrice: null,
        outOfStock: false,
        liked: false,
    },
    {
        id: 2,
        name: "Denim Shirt",
        image: ProductB,
        rating: 10,
        company: "LIME",
        size: "L",
        color: "Blue",
        price: 12,
        discountedPrice: null,
        outOfStock: false,
        liked: true,
    },
    {
        id: 3,
        name: "Plain White T's",
        image: ProductC,
        tag: {
            value: "-20%",
            tagColor: primary,
        },
        rating: 6,
        company: "Doroth Perkins",
        size: "S",
        color: "White",
        price: 20,
        discountedPrice: 12,
        outOfStock: false,
        liked: false,
    },
    {
        id: 4,
        name: "",
        image: ProductD,
        tag: {
            value: "New",
            tagColor: dark,
        },
        rating: 0,
        company: "Mango",
        size: "M",
        color: "White",
        price: 17,
        discountedPrice: null,
        outOfStock: false,
        liked: false,
    },
];
