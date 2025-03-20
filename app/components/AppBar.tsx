import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from 'expo-router';
import { Image, StyleSheet, View, ImageBackground } from 'react-native';
import AppLogo from '@/assets/images/logo.png';
import { Searchbar } from 'react-native-paper';
import SearchIcon from '@/assets/icon/search.svg';
import FilterIcon from '@/assets/icon/filter.svg';


const AppBar = ({ title }: { title: string }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const navigation = useNavigation();

    const clickSearchIcon = () => {
        console.log('onclick search icon');
    }

    const clickFilterIcon = () => {
        console.log('onclick filter icon');
    }

    return (
        <View>
            <ImageBackground style={styles.imgWrapper} source={require('../../assets/images/background.png')} >
                <View style={styles.headerAndSearch}>
                    {/* 첫 번째 줄: 로고 영역 */}
                    <View style={styles.header}>
                        <Image source={AppLogo} style={styles.headerImg} />
                        {navigation.canGoBack() && (
                            <Appbar.BackAction onPress={() => navigation.goBack()} />
                        )}
                    </View>

                    {/* 두 번째 줄: 검색바 영역 */}
                    <View style={styles.searchRow}>
                        <Searchbar
                            style={styles.searchForm}
                            icon={() => (<SearchIcon  style={styles.searchIcon}/>)}
                            traileringIcon={() => (<FilterIcon />)}
                            onIconPress={() => clickSearchIcon()}
                            onTraileringIconPress={() => clickFilterIcon()}
                            inputStyle={{
                                fontFamily: 'KyoboHandwriting2019',
                            }}
                            placeholder="검색어를 입력하세요"
                            onChangeText={setSearchQuery}
                            value={searchQuery}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    imgWrapper: { },
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
        justifyContent: 'space-between', // 로고와 BackAction 간격 확보
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
});

export default AppBar;

