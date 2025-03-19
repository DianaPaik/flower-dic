import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from 'expo-router';
import { SafeAreaView, Image, StyleSheet, View } from 'react-native';
import AppLogo from '@/assets/images/logo.png';
import { Searchbar } from 'react-native-paper';
import SearchIcon from '@/assets/icon/search.svg';
import FilterIcon from '@/assets/icon/filter.svg';

const AppBar = ({ title }: { title: string }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const navigation = useNavigation();

    return (
        <Appbar.Header >
            <View >
                <Image source={AppLogo} />
                {navigation.canGoBack() && (
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                )}
            </View>

            <View >
                <Searchbar
                    mode="bar"
                    icon={() => (
                        <SearchIcon  />
                    )}
                    traileringIcon={() => (
                        <FilterIcon />
                    )}
                    placeholder="검색어를 입력하세요"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />
            </View>
        </Appbar.Header>
    );
}


const styles = StyleSheet.create({
});

export default AppBar;

