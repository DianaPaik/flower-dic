import { View, Text, } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import CustomSnackbar from '@/app/components/CustomSnackBar';

const bookmark = () => {
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);


    return (
        <View>
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

export default bookmark;
