import React, { createContext, useContext, useState, useRef, forwardRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetView,
    BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import { Button, IconButton } from 'react-native-paper';
import CloseBtn from '@/assets/icon/close.svg';
import ChipButton from '@/app/components/ChipButton';
import emotionData from '@/shared/emotion_category.json';
import { ScrollView } from 'react-native-gesture-handler';


// Context 생성
const FilterModalContext = createContext({
    toggleModal: () => { },
    isModalVisible: false
});

// FilterModal 컴포넌트
const FilterModal = forwardRef<BottomSheetModal, {}>((props, ref) => {
    const { toggleModal } = useContext(FilterModalContext); // 추가된 dismissModal 호출

    const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);

    const handleChipPress = (emotion: string) => {
        setSelectedEmotions((prevSelected) =>
            prevSelected.includes(emotion)
                ? prevSelected.filter((item) => item !== emotion) // 이미 선택된 경우 해제
                : [...prevSelected, emotion]                      // 선택되지 않은 경우 추가
        );
    };

    return (
        <BottomSheetModal
            ref={ref}
            snapPoints={['50%',]}
            backgroundStyle={{ backgroundColor: '#fff' }}
        >
            <BottomSheetView style={styles.modal}>
                <View style={styles.contentBox}>
                    <View style={styles.header}>
                        <Text style={styles.filterHeaderText}>필터</Text>
                        <IconButton
                            icon={() => <CloseBtn />}
                            onPress={toggleModal}
                            style={styles.closeBtn}>
                        </IconButton>
                    </View>
                    <ScrollView>
                        <View style={styles.innerContentBox}>

                            {emotionData.categories.map((category) => (
                                <View key={category.name}>
                                    <Text style={styles.name}>{category.name}</Text>
                                    <View style={styles.buttonBox}>
                                        <View style={styles.buttonContainer}>
                                            {category.emotions.map((emotion) => (
                                                <ChipButton
                                                    key={emotion}
                                                    label={emotion}
                                                    isActive={selectedEmotions.includes(emotion)}
                                                    onPress={() => handleChipPress(emotion)}
                                                ></ChipButton>
                                            ))
                                            }
                                        </View>
                                    </View>
                                </View>
                            ))
                            }
                        </View>
                    </ScrollView>
                </View>
                {/* <Text>필터 모달 내용</Text> */}
                <View style={styles.modalBar}>
                    <Button style={styles.resetBtn}
                        onPress={() => setSelectedEmotions([])}
                    >
                        <Text style={styles.modalBarRestetText}>초기화</Text>
                    </Button>
                    <Button style={styles.filterApplyBtn}>
                        <Text style={styles.modalBarFilterApplyBtnText}>필터 적용</Text>
                    </Button>
                </View>
            </BottomSheetView>
        </BottomSheetModal>
    );
});

// Provider 컴포넌트 생성
export const FilterModalProvider = ({ children }: { children: React.ReactNode }) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        if (isModalVisible) {
            bottomSheetModalRef.current?.dismiss();
        } else {
            bottomSheetModalRef.current?.present();
        }
        setIsModalVisible(!isModalVisible);
    };

    return (
        <FilterModalContext.Provider value={{ toggleModal, isModalVisible }}>
            <BottomSheetModalProvider>
                {children}
                <FilterModal ref={bottomSheetModalRef} />
            </BottomSheetModalProvider>
        </FilterModalContext.Provider>
    );
};

export const useFilterModal = () => {
    return useContext(FilterModalContext);
};

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        width: '100%',
        maxWidth: 600,
        height: 572,
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        zIndex: 9999,
    },
    contentBox: {
        // width: '100%',
        // height: '100%',
        flex:1,
        paddingHorizontal: 24,
        paddingBottom: 80
    },
    scrollViewContent: {
        paddingBottom: 100
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 64,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
    },
    closeBtn: {
        width: 24,
        height: 24
    },
    filterHeaderText: {
        fontSize: 20,
        fontFamily: 'KyoboHandwriting2019'
    },
    innerContentBox: {
        marginTop: 20,
        paddingBottom: 20,
        // flexGrow: 1,
        maxHeight: Dimensions.get('window').height - 68 - 64,
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        width: '100%',
        height: '100%'
    },
    filterBox: {
        width: '100%',
        paddingBottom: 24,
    },
    name: {
        marginBottom: 10,
        fontSize: 20,
        fontFamily: 'KyoboHandwriting2019'
    },
    buttonBox: {
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    modalBar: {
        width: '100%',
        maxWidth: 600,
        height: 68,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 24,
        flexDirection: 'row',
        paddingVertical: 10,
    },
    resetBtn: {
        lineHeight: 48,
        color: '#767676',
        width: 112,
        height: 48,
        backgroundColor: 'transparent',
        marginRight: 20,
    },
    filterApplyBtn: {
        lineHeight: 48,
        width: '100%',
        height: 48,
        backgroundColor: '#FF69B4',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBarFilterApplyBtnText: {
        fontSize: 16,
        fontFamily: 'KyoboHandwriting2019',
    },
    modalBarRestetText: {
        fontSize: 16,
        fontFamily: 'KyoboHandwriting2019',
    }

});

export default FilterModal;
