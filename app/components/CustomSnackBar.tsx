import React from 'react';
import { Portal, Snackbar } from 'react-native-paper';
import { StyleSheet, Dimensions, Text, View } from 'react-native';

interface CustomSnackbarProps {
    visible: boolean;
    message: string;
    onDismiss: () => void;
    actionLabel?: string;
    onActionPress?: () => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
    visible,
    message,
    onDismiss,
    // actionLabel = 'Undo',
    onActionPress = () => { }
}) => {
    return (
        <Portal>
            <Snackbar
                style={styles.toast}
                visible={visible}
                onDismiss={onDismiss}
                elevation={0}
                duration={500}
            // action={{
            //     label: actionLabel,
            //     onPress: onActionPress,
            // }}

            >
                <View style={styles.textContainer}>
                    <Text style={styles.toastFont}>{message}</Text>
                </View>
            </Snackbar>
        </Portal>
    );
};

const styles = StyleSheet.create({
    toast: {
        marginBottom: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        // color: '#fff',
        lineHeight: 38,
        maxWidth: 552,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toastFont: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'KyoboHandwriting2019'
    }
});

export default CustomSnackbar;
