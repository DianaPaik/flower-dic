import React from 'react';
import { Stack, usePathname } from "expo-router";
import { ImageBackground, StyleSheet } from 'react-native';
import AppBar from '@/app/components/AppBar';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from "@/theme/ThemeProvider";
import { FilterModalProvider } from '@/app/components/FilterModal';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // 추가

const StackLayout = () => {
  const pathname = usePathname();

  const routeTitleMap: { [key: string]: string } = {
    '/home': 'home',
    '/bookmark': '꽃갈피',
    '/calendar': '꽃달력'
  };

  const title = routeTitleMap[pathname];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <FilterModalProvider>
          <PaperProvider>
            <Stack
              screenOptions={{
                animation: 'fade',
                header: () => <AppBar title={title || ''} />,
                headerBlurEffect: "regular",
                headerTransparent: true,
                contentStyle: {
                  paddingTop: 10,
                  paddingHorizontal: 0,
                  backgroundColor: "#transparent",
                },
              }}
            >
              <Stack.Screen
                name="index"
                options={{
                  headerShown: true
                }} />
            </Stack>
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