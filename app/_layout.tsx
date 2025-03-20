import React from 'react';
import { Stack } from "expo-router";
import AppBar from '@/app/components/AppBar';
import { PaperProvider } from 'react-native-paper';


const StackLayout = () => {
  return (
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
  );
};


export default StackLayout;