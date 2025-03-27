import React, { createContext, useContext, useState } from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation, usePathname } from 'expo-router';
import { IconButton } from 'react-native-paper';
import { Image, StyleSheet, View, ImageBackground, Text } from 'react-native';
import AppLogo from '@/assets/images/logo.png';
import { Searchbar } from 'react-native-paper';
import SearchIcon from '@/assets/icon/search.svg';
import FilterIcon from '@/assets/icon/filter.svg';
import FilterIconActive from '@/assets/icon/filter_active.svg';
import { useFilterModal } from '@/app/components/FilterModal';
import ArrowInHeader from '@/assets/icon/arrow_in_header.svg';
import BookmarkIcon from '@/assets/icon/bookmark.svg';
import BookmarkIconActive from '@/assets/icon/bookmark_active.svg';
import ChipButton from '@/app/components/ChipButton';
import CustomSnackbar from '@/app/components/CustomSnackBar';
import { ScrollView } from 'react-native-gesture-handler';

const AppBarContext = createContext({
    name: '',
    setName: (name: string) => { }
});

export const AppBarProvider = ({ children }: { children: React.ReactNode }) => {
    const [name, setName] = useState('');
    return (
        <AppBarContext.Provider value={{ name, setName }}>
            {children}
        </AppBarContext.Provider>
    );
};

export const useAppBar = () => useContext(AppBarContext);


type AppBarProps = {
    title?: string;
    showSearch?: boolean;
    showFilter?: boolean;
    showBackButton?: boolean;
    showBookmark?: boolean;
    showHeaderImg?: boolean;
};

const AppBar = ({
    title,
    showSearch = false,
    showFilter = false,
    showBackButton = false,
    showBookmark = false,
    showHeaderImg = false
}: AppBarProps) => {

    const { name } = useAppBar();

    const [searchQuery, setSearchQuery] = React.useState('');
    const navigation = useNavigation();
    const pathname = usePathname();

    const { toggleModal, applyFilterEmotions, setApplyFilterEmotions } = useFilterModal();
    const [isBookmarked, setIsBookmarked] = React.useState(false);
    const [snackbarVisible, setSnackbarVisible] = React.useState(false);

    const handleDelete = (label: string) => {
        const updatedValues = applyFilterEmotions.filter(value => value !== label);
        setApplyFilterEmotions(updatedValues);
    };

    const clickFilterIcon = () => {
        toggleModal();
    };

    const toggleBookmark = () => {
        if (isBookmarked) {
            setSnackbarVisible(true); // 북마크 해제 시만 snackbar
        }
        setIsBookmarked((prev) => !prev);
    };

    const onDismissSnackBar = () => setSnackbarVisible(false);

    return (

        <ImageBackground
            source={require('@/assets/images/background.png')}
            style={styles.background}
            resizeMode="cover" 
        >
            <View style={styles.headerAndSearch}>
                <View style={styles.header}>
                    {showBackButton && navigation.canGoBack() && (
                        <View style={styles.leftGroup}>
                            <IconButton
                                style={[styles.leftBox, { margin: 0, padding: 0 }]}
                                icon={() => <ArrowInHeader width={24} height={24} />}
                                onPress={() => navigation.goBack()}
                            />
                            {name !== '' && (
                                <Text style={styles.leftTitleText}>{name}</Text>
                            )}
                        </View>
                    )}

                    {showHeaderImg && (
                        <Image source={AppLogo} style={styles.headerImg} />
                    )}

                    {title && (
                        <Text style={styles.titleText}>{title}</Text>
                    )}

                    {showBookmark && (
                        <IconButton
                            style={styles.bookmarkIcon}
                            size={24}
                            icon={() =>
                                isBookmarked
                                    ? <BookmarkIconActive width={24} height={24} />
                                    : <BookmarkIcon width={24} height={24} />
                            }
                            onPress={toggleBookmark}
                        />
                    )}
                    <CustomSnackbar
                        visible={snackbarVisible}
                        message="꽃갈피에서 꽃을 삭제하였습니다."
                        onDismiss={onDismissSnackBar}
                    />
                </View>

                {showSearch && (
                    <View style={styles.searchRow}>
                        <Searchbar
                            style={styles.searchForm}
                            icon={() => <SearchIcon style={styles.searchIcon} />}
                            traileringIcon={() =>
                                applyFilterEmotions.length > 0 ? <FilterIconActive /> : <FilterIcon />
                            }
                            onTraileringIconPress={clickFilterIcon}
                            placeholder="검색어를 입력하세요"
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                            inputStyle={{ fontFamily: 'KyoboHandwriting2019', marginTop: -4 }}
                        />
                    </View>
                )}

                {showFilter && applyFilterEmotions.length > 0 && (
                    <View style={styles.filterBox}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.filterBoxInner}
                        >
                            {applyFilterEmotions.map((emotion) => (
                                <ChipButton
                                    key={emotion}
                                    label={emotion}
                                    isActive={true}
                                    closeIcon={true}
                                    styling="header"
                                    onDelete={handleDelete}
                                />
                            ))}
                        </ScrollView>
                    </View>
                )}
            </View>
        </ImageBackground>

    );
};


const styles = StyleSheet.create({
    background: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    headerAndSearch: {
        width: '100%',
        maxWidth: 600,
        paddingHorizontal: 24,
        shadowColor: 'transparent',
        // elvation: 0,
        // height: 120,
        // paddingTop: 30,
    },
    header: {
        width: '100%',
        height: 56,                // 높이 확장
        alignItems: 'center',
        flexDirection: 'row',      // 가로 배치
        justifyContent: 'flex-start',
        paddingHorizontal: 12,     // 양옆 패딩 추가
    },
    headerImg: {
        width: 69,
        resizeMode: 'contain',    // 원본 비율 유지하며 축소
        marginRight: 8
    },
    searchRow: {
        width: '100%',
        paddingBottom: 8,
    },
    searchForm: {
        elevation: 0,
        backgroundColor: 'transparent',
        // paddingLeft: 16,
        // paddingRight: 16,
        alignItems: 'center',
        height: 48,
        borderBlockColor: '#111',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        justifyContent: 'space-between'
    },
    searchIcon: {
        marginRight: 4
    },
    searchFormImg: {
        width: 24,
        height: 24
    },
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'KyoboHandwriting2019',
        color: '#000',
        flex: 1,
        // textAlign: 'center',
        // justifyContent: 'flex-start',
        justifyContent: 'space-between',
        marginLeft: 8
    },
    leftGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        // gap: 4
    },
    leftBox: {
        width: 'auto',
        height: 'auto',
    },
    leftTitleText: {
        fontFamily: 'KyoboHandwriting2019',
        fontSize: 16
    },
    bookmarkIcon: {
        position: 'absolute',
        right: 0,
    },
    filterBox: {
        width: '100%',
        paddingBottom: 10,
    },
    filterBoxInner: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2, // 칩 사이 간격
        paddingHorizontal: 4,
    }
});

export default AppBar;

