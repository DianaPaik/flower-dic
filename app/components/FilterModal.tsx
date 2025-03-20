import React, { createContext, useContext, useRef, forwardRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetView
} from '@gorhom/bottom-sheet';

// 🔹 Context 생성
const FilterModalContext = createContext({
    presentModal: () => { }
});

// 🔹 FilterModal 컴포넌트
const FilterModal = forwardRef<BottomSheetModal, {}>((props, ref) => {
    return (
        <BottomSheetModal
            ref={ref}
            snapPoints={['50%', '25%', '10%']}
            backgroundStyle={{ backgroundColor: '#fff' }}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Text>필터 모달 내용</Text>
            </BottomSheetView>
        </BottomSheetModal>
    );
});

// 🔹 Provider 컴포넌트 생성
export const FilterModalProvider = ({ children }: { children: React.ReactNode }) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const presentModal = () => {
        bottomSheetModalRef.current?.present();
    };

    return (
        <FilterModalContext.Provider value={{ presentModal }}>
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
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default FilterModal;
