import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import NavbarSearchActive from '@/assets/icon/navbar_search_active.svg';
import NavbarBookmarkActive from '@/assets/icon/navbar_bookmark_active.svg';
import NavbarCalendarActive from '@/assets/icon/navbar_calender_active.svg';
import NavbarSearchDeactive from '@/assets/icon/navbar_search_deactive.svg';
import NavbarBookmarkDeactive from '@/assets/icon/navbar_bookmark_deactive.svg';
import NavbarCalendarDeactive from '@/assets/icon/navbar_calender_deactive.svg';


export default function Layout() {
    const screenWidth = Dimensions.get('window').width;

    return (
        <>
            {/* <ImageBackground
                source={require('../../assets/images/background.png')}
                style={styles.backgroundImage}
            > */}
            <View style={{ flex: 1 }}>
                {/* <SafeAreaView style={styles.safeAreaContainer} edges={['top', 'left', 'right']}> */}
                {/* 전역 배경화면 추가 */}

                {/* <View style={styles.container}> */}
                <Tabs
                    screenOptions={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        // tabBarStyle: {
                        //     backgroundColor: '#fff',
                        //     height: 60,
                        //     width: screenWidth, // Use full screen width
                        //     position: 'absolute',
                        // },
                    }}
                >
                    <Tabs.Screen
                        name="home"
                        options={{
                            tabBarIcon: ({ size, focused }) => (
                                <View style={styles.iconWrapper}>
                                    {focused ? (
                                        <NavbarSearchActive width={size} height={size} />
                                    ) : (
                                        <NavbarSearchDeactive width={size} height={size} />
                                    )}
                                </View>
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="bookmark"
                        options={{
                            tabBarIcon: ({ size, focused }) => (
                                focused ? (
                                    <NavbarBookmarkActive width={size} height={size} />
                                ) : (
                                    <NavbarBookmarkDeactive width={size} height={size} />
                                )
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="calendar"
                        options={{
                            tabBarIcon: ({ size, focused }) => (
                                focused ? (
                                    <NavbarCalendarActive width={size} height={size} />
                                ) : (
                                    <NavbarCalendarDeactive width={size} height={size} />
                                )
                            ),
                        }}
                    />
                </Tabs>
            </View>

            {/* </SafeAreaView> */}
            {/* </View > */}
            {/* </ImageBackground> */}
        </>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
        // backgroundColor: '#f0f0f0',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // 배경화면이 꽉 차게 표시
    },
    iconWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%',
    },
});
