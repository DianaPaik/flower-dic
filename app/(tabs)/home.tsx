import { Link } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const data = [
    { id: '1', name: '장미' },
    { id: '2', name: '해바라기' },
    { id: '3', name: '튤립' },
    { id: '4', name: '수국' },
];

const home = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>🌸 꽃 목록</Text>

        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Link href={`/list/${item.id}`} asChild>
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>{item.name}</Text>
                    </TouchableOpacity>
                </Link>
            )}
        />
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 20,
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    itemText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
    },
});

export default home;
