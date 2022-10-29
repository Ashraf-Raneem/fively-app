import { globalStyle } from "../styles/global";
import BottomSheet from "react-native-simple-bottom-sheet";
import { View, Text, ScrollView } from "react-native";
import { useRef } from "react";

const AuthenticatedLayout = (props) => {
    const { page, navigation, children, stickyArray } = props;
    const panelRef = useRef(null);
    return (
        <View style={globalStyle}>
            <ScrollView stickyHeaderIndices={stickyArray ? stickyArray : []}>{children}</ScrollView>
            <BottomSheet isOpen={false} ref={(ref) => (panelRef.current = ref)} sliderMinHeight={0}>
                <View>
                    <Text>Drawer Data</Text>
                </View>
            </BottomSheet>
        </View>
    );
};

export default AuthenticatedLayout;
