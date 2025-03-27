import React, { useCallback, createContext, useContext, useState, useRef, forwardRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetView,
    BottomSheetScrollView,
    BottomSheetBackdrop,
    
} from '@gorhom/bottom-sheet';
import { Button, IconButton } from 'react-native-paper';
import CloseBtn from '@/assets/icon/close.svg';
import ChipButton from '@/app/components/ChipButton';
import emotionData from '@/shared/emotion_category.json';
import { ScrollView } from 'react-native-gesture-handler';


// Context 생성
const FilterModalContext = createContext({
    toggleModal: () => { },
    isModalVisible: false,
    setApplyFilterEmotions: (emotions: string[]) => { },
    applyFilterEmotions: [] as string[],
});

// FilterModal 컴포넌트
const FilterModal = forwardRef<BottomSheetModal, {}>((props, ref) => {
    const { toggleModal, setApplyFilterEmotions, applyFilterEmotions, isModalVisible } = useContext(FilterModalContext);
    useEffect(() => {
        if (isModalVisible) {
            setSelectedEmotions(applyFilterEmotions); 
        }
    }, [isModalVisible]);

    const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  
    const handleChipPress = (emotion: string) => {
        setSelectedEmotions((prevSelected) => {
            let updatedSelected;

            // 이미 선택된 경우 → 해제
            if (prevSelected.includes(emotion)) {
                updatedSelected = prevSelected.filter((item) => item !== emotion);
            }
            // 선택된 Chip이 5개 이상이면 추가 선택 불가
            else if (prevSelected.length >= 5) {
                return prevSelected;
            }
            // 선택 가능한 경우 추가
            else {
                updatedSelected = [...prevSelected, emotion];
            }

            return updatedSelected;
        });
    };

    const clickFilterApplyBtn = () => {
        setApplyFilterEmotions(selectedEmotions); 
        toggleModal();
    }

    const renderBackdrop = useCallback(
        (props: BottomSheetBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                opacity={0.5}  // 배경 어두움 정도 조절
                pressBehavior="close"  // 배경 누르면 모달 닫힘
            />
        ),
        []
    );


    return (
        <BottomSheetModal
            ref={ref}
            // snapPoints={['50%',]}
            // onDismiss={() => setIsModalVisible(false)}
            // onPresent={() => setIsModalVisible(true)}
            // backgroundStyle={{ backgroundColor: 'transparent' }}
            index={0}
            backdropComponent={renderBackdrop}
        >
            <BottomSheetView style={styles.modal}>
                <ImageBackground
                    source={require('@/assets/images/background.png')}
                    style={styles.imageBackground}
                    resizeMode="cover"
                >
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
                                                    styling="modal"
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
                    <Button style={styles.filterApplyBtn}
                        onPress={() => clickFilterApplyBtn()}
                    >
                        <Text style={styles.modalBarFilterApplyBtnText}>필터 적용</Text>
                    </Button>
                </View>
                </ImageBackground>
            </BottomSheetView>
        </BottomSheetModal>
    );
});

// Provider 컴포넌트 생성
export const FilterModalProvider = ({ children }: { children: React.ReactNode }) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [applyFilterEmotions, setApplyFilterEmotions] = useState<string[]>([]);
    const applyFilterBtnFlag = useRef<boolean>(false);
    const toggleModal = () => {
        if (isModalVisible) {
            bottomSheetModalRef.current?.dismiss();
        } else {
            bottomSheetModalRef.current?.present();
        }
        setIsModalVisible(!isModalVisible);
    };

    return (
        <FilterModalContext.Provider value={{
            toggleModal, isModalVisible, setApplyFilterEmotions, applyFilterEmotions }}>
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
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
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
        flex: 1,
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
        borderTopColor: '#E6E6E6',
        borderTopWidth: 1,
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
        flex: 1,
        height: 48,
        backgroundColor: '#FF69B4',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBarFilterApplyBtnText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'KyoboHandwriting2019',
    },
    modalBarRestetText: {
        color: '#767676',
        fontSize: 16,
        fontFamily: 'KyoboHandwriting2019',
    }

});

export default FilterModal;
