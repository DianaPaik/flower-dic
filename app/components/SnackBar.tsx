import React from 'react';
import { Snackbar } from 'react-native-paper';
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

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
    actionLabel = 'Undo',
    onActionPress = () => { }
}) => {
    return (
        <Snackbar
            style={styles.toast}
            visible={visible}
            onDismiss={onDismiss}
            action={{
                label: actionLabel,
                onPress: onActionPress,
            }}
        >
            {message}
        </Snackbar>
    );
};

const styles = StyleSheet.create({
    toast: {
        marginBottom: 80,
        width: width - 40,
        borderRadius: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: '#fff',
        lineHeight: 38,
        maxWidth: 552,
    },
});

export default CustomSnackbar;
