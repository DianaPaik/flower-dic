import * as React from 'react';
import { Chip } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import ClosePink from '@/assets/icon/close_pink.svg';

interface ChipButtonProps {
    label: string;
    isActive: boolean;
    onPress?: () => void;
    onDelete?: (label: string) => void; // 추가된 로직
    closeIcon?: boolean;
    styling?: string; // 1) header 2) modal 3) detail
}


const ChipButton: React.FC<ChipButtonProps> = ({
    label,
    isActive,
    onPress,
    onDelete, 
    closeIcon,
    styling
}) => {


    // 스타일 조건부 렌더링
    const getChipStyles = () => {
        switch (styling) {
            case 'header':
                return [styles.headerChipButton, isActive && styles.chipActive];
            case 'modal':
                return [styles.modalChipButton, isActive && styles.modalChipActive];
            case 'detail':
                return [styles.detailChipButton];
            default:
                return [styles.chipButton, isActive && styles.chipActive];
        }
    };


    const getTextStyles = () => {
        switch (styling) {
            case 'header':
                return [styles.chipText, styles.headerChipText];
            case 'modal':
                return [styles.chipText, isActive ? styles.modalChipTextActive : styles.modalChipText];
            case 'detail':
                return [styles.chipText, styles.detailChipText];
            default:
                return [styles.chipText, isActive && styles.chipTextActive];
        }
    };


    return (
        <Chip
            style={getChipStyles()}
            textStyle={getTextStyles()}
            onPress={onPress}
            closeIcon={closeIcon ? () => <ClosePink style={[styles.closeIcon, { width: 20, height: 20 }]} /> : undefined}
            onClose={onDelete ? () => onDelete(label) : undefined}
        >
            {label}
        </Chip>
    );
};

const styles = StyleSheet.create({
    chipText: {
        fontFamily: 'KyoboHandwriting2019',
        fontSize: 18,
        color: '#333333',
    },
    chipTextActive: {
        color: '#FF4EAF'
    },

    /* Header 스타일 */
    headerChipText: {
        color: '#FF4EAF'
    },
    headerChipButton: {
        width: 'auto',
        alignSelf: 'flex-start',
        // paddingVertical: 8,
        // paddingHorizontal: 20,
        marginRight: 10,
        marginBottom: 8,
        backgroundColor: '#FFD8ED',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FF4EAF'
    },
    headerCloseIcon: {
        width: 12,
        height: 12
    },

    /* Modal 스타일 */
    modalChipText: {
        color: '#767676'
    },
    modalChipTextActive: {
        color: '#FF4EAF'
    },
    modalChipButton: {
        width: 'auto',
        alignSelf: 'flex-start',
        // paddingVertical: 8,
        // paddingHorizontal: 20,
        marginHorizontal: 2,
        marginVertical: 4,
        backgroundColor: '#ececec',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    modalChipActive: {
        backgroundColor: '#FFD8ED',
        borderColor: '#FF4EAF',
    },

    /* Detail 스타일 */
    detailChipText: {
        fontSize: 14,
        fontFamily: 'KyoboHandwriting2019',
        color: '#FF4EAF'
    },
    detailChipButton: {
        width: 'auto',
        alignSelf: 'flex-start',
        backgroundColor: '#FFD8ED',
        marginRight: 4,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF4EAF'
    },

    /* Default 스타일 */
    chipButton: {
        width: 'auto',
        alignSelf: 'flex-start',
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
    closeIcon: {
        width: 12,
        height: 12
    },
});


export default ChipButton;