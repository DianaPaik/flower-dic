import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import CustomSnackbar from '@/app/components/SnackBar';

const bookmark = () => {
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);


    return (
        <View style={styles.container}>
            <Text>🌸 Bookmark</Text>
            <Button onPress={onToggleSnackBar}>
                {visible ? 'Hide' : 'Show'}
            </Button>
            <CustomSnackbar
                visible={visible}
                message="꽃갈피에서 꽃을 삭제하였습니다."
                onDismiss={onDismissSnackBar}
                actionLabel="Undo"
                onActionPress={() => console.log('Undo clicked')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
        backgroundColor: '#f0f8ff',
    },
});

export default bookmark;
