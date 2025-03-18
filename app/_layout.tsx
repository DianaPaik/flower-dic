import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
    screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        contentStyle: {
          paddingTop: 10,
          paddingHorizontal: 10,
          backgroundColor: "#f0f0f0",
        },
      }}>
      <Stack.Screen name="index" options={{ title: 'Home'}} />
    </Stack>
};

export default RootLayout;