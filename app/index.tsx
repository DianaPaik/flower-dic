import { Redirect } from "expo-router";
import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import { setCustomText } from 'react-native-global-props';

const StartPage = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'KyoboHandwriting2019': require('../assets/fonts/KyoboHandwriting2019.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  const customTextProps = {
    style: {
      fontFamily: 'KyoboHandwriting2019',
    },
  };
  setCustomText(customTextProps);

  return <Redirect href="/home" />;
};

export default StartPage;