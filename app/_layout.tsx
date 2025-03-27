import React from 'react';
import { Stack, usePathname } from "expo-router";
import { ImageBackground, StyleSheet } from 'react-native';
import AppBar from '@/app/components/AppBar';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from "@/theme/ThemeProvider";
import { FilterModalProvider } from '@/app/components/FilterModal';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // 추가
import { useResponsiveAppBarHeight } from '@/hooks/useResponsiveAppBarHeight';
import { AppBarProvider } from '@/app/components/AppBar';

const StackLayout = () => {
  const pathname = usePathname();

  const routeTitleMap: { [key: string]: string } = {
    '/home': 'home',
    '/bookmark': '꽃갈피',
    '/calendar': '꽃달력'
  };

  const paddingTop = useResponsiveAppBarHeight({
    withSearch: pathname === '/home',
    small: pathname === '/bookmark' || pathname.startsWith('/list/'),
  });


  const title = routeTitleMap[pathname];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <FilterModalProvider>
          <PaperProvider >
            <AppBarProvider>
              <Stack
                screenOptions={{
                  animation: 'fade',
                  header: () => {
                    if (pathname === '/home') {
                      return <AppBar title="" showSearch showFilter showHeaderImg />;
                    }
                    if (pathname === '/bookmark') {
                      return <AppBar title="꽃갈피" showBackButton />;
                    }
                    if (pathname === '/calendar') {
                      return <AppBar title="꽃달력" showBackButton />;
                    }
                    if (pathname.startsWith('/list/')) {
                      return <AppBar showBackButton showBookmark />;
                    }
                    return undefined;
                  },
                  // headerShown:
                  //   ['/home', '/bookmark', '/calendar'].includes(pathname) ||
                  //   pathname.startsWith('/list/')
                  // headerBlurEffect: "regular",
                  // headerTransparent: true,
                  // headerStyle: {
                  //   backgroundColor: 'transparent',
                  // },
                }}
              >
                <Stack.Screen
                  name="index"
                  options={{
                    contentStyle: {
                      paddingTop,
                    },
                  }}
                />
              </Stack>
            </AppBarProvider>
          </PaperProvider>
        </FilterModalProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default StackLayout;