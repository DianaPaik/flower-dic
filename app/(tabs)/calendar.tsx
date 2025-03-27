import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import CustomCalendar from '@/app/components/CustomCalendar';

const calendar = () => {
    return (
        <>
            <ImageBackground
                style={styles.imgWrapper}
                source={require('../../assets/images/background.png')}
            >
                <View style={styles.contentWrap}>
                    <CustomCalendar />
                </View>
            </ImageBackground>
        </>
    );
}
const styles = StyleSheet.create({
    contentWrap: {
        flex: 1,  // ✅ 유연한 크기 조정
        width: '100%',  // ✅ 화면 전체 기준 정렬
        marginTop: 56,
        marginBottom: 60,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },

    imgWrapper: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
});

export default calendar;
