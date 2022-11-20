import { forwardRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { dark, gray } from "../../styles/colors";

const BottomDrawer = forwardRef((props, ref) => {
    const { drawerRef, children, height, restProps } = props;

    return (
        <RBSheet
            ref={drawerRef}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height={height}
            customStyles={{
                wrapper: {
                    backgroundColor: "transparent",
                },
                container: {
                    backgroundColor: dark,
                    borderTopEndRadius: 24,
                    borderTopLeftRadius: 24,
                },
                draggableIcon: {
                    backgroundColor: gray,
                },
            }}
            {...restProps}
        >
            {children}
        </RBSheet>
    );
});

export default BottomDrawer;
