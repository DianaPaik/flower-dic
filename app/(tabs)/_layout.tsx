import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Dimensions } from 'react-native';
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
        <SafeAreaView style={styles.safeAreaContainer} edges={['top', 'left', 'right']}>
            <View style={styles.container}>
                <Tabs
                    screenOptions={{
                        tabBarShowLabel: false,
                        tabBarStyle: {
                            backgroundColor: '#fff',
                            height: 60,
                            width: screenWidth, // Use full screen width
                            position: 'absolute',
                        },
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0',  // SafeAreaView 배경색 설정
    },
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    iconWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%', 
    },
});
