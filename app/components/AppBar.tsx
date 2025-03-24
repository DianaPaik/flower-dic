import React, { useCallback, useMemo, useRef } from 'react';
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

const AppBar = ({ title }: { title: string }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const navigation = useNavigation();
    const { toggleModal, applyFilterEmotions } = useFilterModal();

    const pathname = usePathname();
    const [isBookmarked, setIsBookmarked] = React.useState(false);
    //const [isFiltterOn, setIsFiltterOn] = React.useState(false);

    const [canGoBack, setCanGoBack] = React.useState(false);

    const isHome = pathname === '/home';
    const isDetailPage = pathname.split('/').length === 3;

    const clickSearchIcon = () => {
        console.log('onclick search icon');
    }
    const clickFilterIcon = () => {
        toggleModal();
        console.log('onclick filter icon');
    };

    React.useEffect(() => {
        if (navigation) setCanGoBack(navigation.canGoBack());
    }, [navigation]);

    const toggleBookmark = () => setIsBookmarked(!isBookmarked);


    return (
        <View>
            <ImageBackground style={styles.imgWrapper} source={require('../../assets/images/background.png')} >
                <View style={styles.headerAndSearch}>
                    {/* 첫 번째 줄: 로고 영역 */}
                    <View style={styles.header}>
                        {isHome ? (
                            <Image source={AppLogo} style={styles.headerImg} />
                        ) : navigation.canGoBack() ? (
                            <IconButton
                                style={styles.leftBox}
                                size={24}
                                icon={() => <ArrowInHeader width={24} height={24} />}
                                onPress={() => navigation.goBack()} />
                        ) : null}

                        {title && !isHome && (
                            <Text style={styles.titleText}>{title}</Text>
                        )}

                        {isDetailPage && (
                            <IconButton
                                style={styles.bookmarkIcon}
                                size={24}
                                icon={() => <BookmarkIcon color={isBookmarked ? 'blue' : 'gray'} />}
                                onPress={toggleBookmark}
                            />
                        )}
                    </View>

                    {/* 두 번째 줄: 검색바 영역 */}
                    {pathname === '/home' && (
                        <View style={styles.searchRow}>
                            <Searchbar
                                style={styles.searchForm}
                                icon={() => (<SearchIcon style={styles.searchIcon} />)}
                                traileringIcon={() => (
                                    applyFilterEmotions.length > 0  // ✅ 선택된 필터 데이터 기준
                                        ? <FilterIconActive />
                                        : <FilterIcon />
                                )}
                                onIconPress={clickSearchIcon}
                                onTraileringIconPress={clickFilterIcon}
                                inputStyle={{
                                    fontFamily: 'KyoboHandwriting2019',
                                }}
                                placeholder="검색어를 입력하세요"
                                onChangeText={setSearchQuery}
                                value={searchQuery}
                            />
                        </View>
                    )}
                </View>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    imgWrapper: {},
    headerAndSearch: {
        width: '100%',
        maxWidth: 600,
        paddingHorizontal: 24,
        // height: 120,
        // paddingTop: 30,
    },
    header: {
        width: '100%',
        height: 60,                // 높이 확장
        alignItems: 'center',
        flexDirection: 'row',      // 가로 배치
        //        justifyContent: 'space-between', // 로고와 BackAction 간격 확보
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
        textAlign: 'center',
        marginLeft: 8
    },
    leftBox: {
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        gap: 8
    },
    bookmarkIcon: {
        position: 'absolute',
        right: 0,
    }
});

export default AppBar;

