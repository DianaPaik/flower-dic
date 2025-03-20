import React from 'react';
import { Stack } from "expo-router";
import AppBar from '@/app/components/AppBar';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from "@/theme/ThemeProvider";
import { FilterModalProvider } from '@/app/components/FilterModal';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // 추가

const StackLayout = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>  {/* 👈 추가 */}
    <ThemeProvider>
      <FilterModalProvider>
        <PaperProvider>
          <Stack
            screenOptions={{
              // header: ({ options }) => <AppBar title={options.title || ''} />,
              header: ({ options }) => <AppBar title={''} />,
              headerBlurEffect: "regular",
              headerTransparent: true,
              contentStyle: {
                paddingTop: 10,
                paddingHorizontal: 0,
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <Stack.Screen name="index" />
          </Stack>
        </PaperProvider>
      </FilterModalProvider>
    </ThemeProvider>
    </GestureHandlerRootView>
  );
};


export default StackLayout;