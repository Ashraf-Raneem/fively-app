import Navbar from "../components/navbar/Navbar";
import { globalStyle } from "../styles/global";

const { View, ScrollView } = require("react-native");

const AuthenticatedLayout = (props) => {
    const { page, children } = props;
    return (
        <View style={globalStyle}>
            <ScrollView>{children}</ScrollView>
            <Navbar page={page} />
        </View>
    );
};

export default AuthenticatedLayout;
