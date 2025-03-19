import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// 날짜 데이터 생성
const generateCalendarDates = (daysInMonth: number) => {
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

const CustomCalendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const today = new Date().getDate();
    const daysInMonth = 29; // 2월 기준

    const handleDateClick = (date: number) => setSelectedDate(date);

    return (
        <View style={styles.calendarBox}>
            {/* 월 표시 */}
            <View style={styles.monthBox}>
                <TouchableOpacity style={styles.monthButton}>
                    <Text style={styles.monthText}>2월</Text>
                </TouchableOpacity>
            </View>

            {/* 날짜 표시 */}
            <View style={styles.dateBox}>
                {generateCalendarDates(daysInMonth).map((date) => (
                    <TouchableOpacity
                        key={date}
                        style={[
                            styles.date,
                            date === today && styles.today,
                            date === selectedDate && styles.selectedDate
                        ]}
                        onPress={() => handleDateClick(date)}
                    >
                        {date === today && <View style={styles.todayCircle} />}
                        <Text style={[
                            styles.dateText,
                            date === today && styles.todayText
                        ]}>{date}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    calendarBox: {
        width: '100%',
        maxWidth: 600,
        height: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        elevation: 2,
        padding: 24,
    },
    monthBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    monthButton: {
        backgroundColor: '#4CAF50',
        padding: 8,
        borderRadius: 8,
    },
    monthText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    dateBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    date: {
        width: '14.285%', // 7일을 균등하게 배치
        aspectRatio: 1,   // 정사각형 비율 유지
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        position: 'relative',
        marginBottom: 5,
    },
    today: {
        backgroundColor: '#ffeb3b',
        borderColor: '#fbc02d',
    },
    todayCircle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -15 }, { translateY: -15 }],
        width: 29,
        height: 29,
        borderRadius: 50,
        backgroundColor: '#111',
        zIndex: 0,
    },
    todayText: {
        color: '#fff',
        zIndex: 1,
        position: 'relative',
    },
    selectedDate: {
        backgroundColor: '#4CAF50',
    },
    dateText: {
        fontSize: 16,
    },
});

export default CustomCalendar;
