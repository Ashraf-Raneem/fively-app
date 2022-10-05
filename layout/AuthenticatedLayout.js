import { globalStyle } from "../styles/global";

const { View, ScrollView } = require("react-native");

const AuthenticatedLayout = (props) => {
    const { page, navigation, children } = props;
    return (
        <View style={globalStyle}>
            <ScrollView>{children}</ScrollView>
        </View>
    );
};

export default AuthenticatedLayout;
