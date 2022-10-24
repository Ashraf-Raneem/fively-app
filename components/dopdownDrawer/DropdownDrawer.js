import { View } from "react-native";
import tw from "twrnc";
import { dark, gray } from "../../styles/colors";

const DropdownDrawer = (props) => {
    return (
        <View
            style={tw`absolute bg-[${dark}] py-4 border-[${dark}] rounded-t-lg flex flex-col justify-center items-center`}
        >
            <View style={tw`my-2 h-2 w-12 rounded-full bg-[${gray}]`}></View>
            {props.children}
        </View>
    );
};

export default DropdownDrawer;
