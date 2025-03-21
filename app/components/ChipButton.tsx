import * as React from 'react';
import { Chip } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

const ChipButton = ({ label, isActive, onPress }: { 
    label: string;
    isActive: boolean;
    onPress: () => void;
    }) => (
    <Chip
        style={[styles.chipButton, isActive && styles.chipActive]}
        textStyle={[styles.chipText, isActive && styles.chipTextActive]}
        onPress={onPress}
        >{label}
        
    </Chip>
);

const styles = StyleSheet.create({
    chipText: {
        fontFamily: 'KyoboHandwriting2019',
        fontSize: 18,
        color: '#333333',
    },
    chipTextActive: {
        color: '#FF4EAF'
    },
    chipButton: {
        width: 'auto',
        alignSelf: 'flex-start',
        // paddingVertical: 8,
        // paddingHorizontal: 20,
        marginRight: 10,
        marginBottom: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    chipActive: {
        backgroundColor: '#FFD8ED',  
        borderColor: '#FF4EAF',
    },
});

export default ChipButton;