import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { IconButton, Button, Dialog, Portal, Text, Modal } from 'react-native-paper';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import Arrow from '@/assets/icon/arrow.svg';
import CloseIcon from '@/assets/icon/close.svg';


// 대한민국(KST) 기준으로 오늘 날짜 반환
const getTodayInKST = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 1월 = 0이므로 +1
    const day = now.getDate();
    return { year, month, day };
};


// 해당 월의 실제 일 수 계산
const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
};


// 해당 월의 시작 요일을 계산 (이전 달의 종료 요일 다음 날이 시작 요일)
const getStartDayOfMonth = (year: number, month: number) => {
    if (month === 1) {
        const prevYear = year - 1;
        const prevMonth = 12;
        return (new Date(prevYear, prevMonth, 0).getDay() + 1) % 7;
    } else {
        return (new Date(year, month - 1, 0).getDay() + 1) % 7;
    }
};


const CustomCalendar: React.FC = () => {
    const [dialogVisible, setDialogVisible] = React.useState(false);
    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => setDialogVisible(false);
    const LEAP_YEAR = 2024; // 윤년

    const { month, day: today } = getTodayInKST();

    const [currentMonth, setCurrentMonth] = useState<number>(month);

    const [fontsLoaded] = useFonts({
        'KyoboHandwriting2019': require('@/assets/fonts/KyoboHandwriting2019.ttf'),
    });

    const daysInMonth = getDaysInMonth(LEAP_YEAR, currentMonth);
    const startDay = getStartDayOfMonth(LEAP_YEAR, currentMonth);

    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

    const handleMonthSelect = (selectedMonth: number) => {
        setCurrentMonth(selectedMonth);
        hideDialog();
    };

    return (
        <View style={styles.calendarBox}>
            {/* 월 표시 */}
            <View style={styles.monthBox}>
                <View style={styles.monthButton}>
                    <Text style={styles.monthText}>{currentMonth}월</Text>
                    <IconButton
                        icon={() => <Arrow width={24} height={24} />}
                        onPress={showDialog}
                    />
                </View>
            </View>

            {/* 날짜 표시 */}
            <View style={styles.dateBox}>
                {/* 빈 공간 채우기 (이전 월의 종료 요일 다음 칸에서 시작) */}
                {/* {Array.from({ length: startDay }).map((_, index) => ( */}
                {/* <View key={`empty-${index}`} style={styles.emptyDate} /> */}
                {/* ))} */}

                {/* 날짜 렌더링 */}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((date) => {
                    const isToday = currentMonth === month && date === today;

                    return (
                        <TouchableOpacity
                            key={date}
                            style={styles.date}
                            onPress={() => { }}
                        >
                            {isToday && <View style={styles.selectedCircle} />}
                            <Text
                                style={[
                                    styles.dateText,
                                    isToday && styles.selectedText
                                ]}
                            >
                                {date}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* Dialog 컴포넌트 추가 */}
            <Portal>
                <Modal visible={dialogVisible} onDismiss={hideDialog} contentContainerStyle={styles.modalContainer} style={styles.dialog}>
                    <ImageBackground
                        source={require('@/assets/images/background.png')}
                        style={styles.dialogBackground}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 8 }}
                    >
                        {/* 닫기 버튼 */}
                        <View style={styles.closebox}>
                            <TouchableOpacity onPress={hideDialog}>
                                <CloseIcon style={styles.closeIcon} />
                            </TouchableOpacity>
                        </View>
                        {/* 월 선택 박스 */}
                        <View style={styles.contentbox}>
                            {months.map((month, index) => (
                                <TouchableOpacity key={month} style={styles.dateButton} onPress={() => handleMonthSelect(index + 1)}>
                                    <Text style={styles.dateText}>{month}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ImageBackground>
                </Modal>
            </Portal>
        </View>
    );
};


const styles = StyleSheet.create({
    calendarBox: {
        width: '100%',
        height: '100%',
    },
    monthBox: {
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',

    },
    monthButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    monthText: {
        fontFamily: 'KyoboHandwriting2019',
        fontSize: 18,
    },
    dateBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    emptyDate: {
        width: '14.285%', // 요일 위치 맞춤을 위한 빈 칸
        height: 40,
    },
    date: {
        width: '14.285%', // 7일을 균등하게 배치
        aspectRatio: 1,   // 정사각형 비율 유지
        alignItems: 'center',
        fontFamily: 'KyoboHandwriting2019',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 5,
    },
    selectedCircle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -14.5 }, { translateY: -14.5 }],
        width: 29,
        height: 29,
        borderRadius: 50,
        backgroundColor: '#111',
        zIndex: 0,
    },
    selectedText: {
        color: '#fff',
        zIndex: 1,
        position: 'relative',
        fontFamily: 'KyoboHandwriting2019',
    },
    dateText: {
        fontSize: 16,
        fontFamily: 'KyoboHandwriting2019',
    },
    /**  모달 관련 스타일 수정 **/
    modalContainer: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        marginHorizontal: 24,
        borderRadius: 12,
        overflow: 'hidden',
    },
    dialogBackground: {
        // flex: 1,
        maxHeight: 400,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center', 
        paddingVertical: 32,
    },
    closebox: {
        width: '100%',
        paddingHorizontal: 24,
        marginBottom: 10,
        alignItems: 'flex-end',
    },
    closeIcon: {
        width: 24,
        height: 24,
    },
    contentbox: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 12,
    },
    dateButton: {
        width: '25%', // 4개씩 한 줄
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
        // marginBottom: 12,
    },

});

export default CustomCalendar;
