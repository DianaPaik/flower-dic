import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function ListDetailScreen() {
    // URL에서 'id' 값을 가져오기
    const { id } = useLocalSearchParams();

    // 더미 데이터 예제 (서버 연동 시 API 호출 로직으로 교체 가능)
    const data = {
        "1": { title: "장미", description: "장미는 아름다운 꽃입니다." },
        "2": { title: "해바라기", description: "해바라기는 태양을 따라 움직입니다." },
        "3": { title: "튤립", description: "튤립은 다양한 색상으로 유명합니다." },
    };

    const item = data[id as keyof typeof data] || {
        title: "알 수 없는 항목",
        description: "해당 데이터가 존재하지 않습니다.",
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4CAF50',
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#555',
    },
});
