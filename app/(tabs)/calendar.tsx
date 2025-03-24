import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import CustomCalendar from '@/app/components/CustomCalendar';

const calendar = () => {
    return (
        <View style={styles.contentWrap}>
            <CustomCalendar />
        </View>
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
    }
});

export default calendar;
