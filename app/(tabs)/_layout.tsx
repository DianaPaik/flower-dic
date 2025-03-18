import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{ title: '홈'}}
            />
            <Tabs.Screen
                name="bookmark"
                options={{ title: '꽃갈피'}}
            />
            <Tabs.Screen
                name="calendar"
                options={{ title: '달력' }}
            />
        </Tabs>
    );
}
