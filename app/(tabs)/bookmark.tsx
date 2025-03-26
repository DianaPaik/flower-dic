import { View, Text, } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import CustomSnackbar from '@/app/components/CustomSnackBar';

const bookmark = () => {
    const [visible, setVisible] = React.useState(false);

    const onDismissSnackBar = () => setVisible(false);


    return (
        <View>
            <CustomSnackbar
                visible={visible}
                message="꽃갈피에서 꽃을 삭제하였습니다."
                onDismiss={onDismissSnackBar}
            />
        </View>
    );
}

export default bookmark;
