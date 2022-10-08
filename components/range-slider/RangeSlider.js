import { useState, useCallback } from "react";
import { View, StyleSheet, Text } from "react-native";
import RangeSlider from "rn-range-slider";
import tw from "twrnc";
import { primary, white } from "../../styles/colors";

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

const Label = ({ text, ...restProps }) => {
    return (
        <View style={styles.root} {...restProps}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const Notch = (props) => {
    return <View style={styles.rail} {...props} />;
};

const Rail = () => {
    return <View style={styles.rail} />;
};

const Thumb = ({ name }) => {
    return <View style={name === "high" ? styles.rootHigh : styles.rootLow} />;
};

const RailSelected = () => {
    return <View style={styles.railSelected} />;
};

const RangeSliderComponent = () => {
    const [high, setHigh] = useState(0);
    const [low, setLow] = useState(0);

    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback((value) => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const handleValueChange = useCallback((low, high) => {
        setLow(low);
        setHigh(high);
    }, []);

    return (
        <View style={tw`mx-2 my-6`}>
            <View style={tw`flex flex-row justify-between mb-2`}>
                <Text style={tw`text-[${white}]`}>${low}</Text>
                <Text style={tw`text-[${white}]`}>${high}</Text>
            </View>
            <RangeSlider
                min={0}
                max={1000}
                step={1}
                floatingLabel
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                renderNotch={renderNotch}
                onValueChanged={handleValueChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 8,
        backgroundColor: primary,
        borderRadius: 4,
    },
    text: {
        fontSize: 16,
        color: "#fff",
    },
    notch: {
        width: 8,
        height: 8,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: primary,
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderTopWidth: 8,
    },
    rail: {
        flex: 1,
        height: 4,
        borderRadius: 2,
        backgroundColor: "#7f7f7f",
    },
    railSelected: {
        height: 4,
        backgroundColor: primary,
        borderRadius: 2,
    },
    rootLow: {
        width: THUMB_RADIUS_LOW * 2,
        height: THUMB_RADIUS_LOW * 2,
        borderRadius: THUMB_RADIUS_LOW,
        borderWidth: 2,
        borderColor: primary,
        backgroundColor: primary,
    },
    rootHigh: {
        width: THUMB_RADIUS_HIGH * 2,
        height: THUMB_RADIUS_HIGH * 2,
        borderRadius: THUMB_RADIUS_HIGH,
        borderWidth: 2,
        borderColor: primary,
        backgroundColor: primary,
    },
});

export default RangeSliderComponent;
