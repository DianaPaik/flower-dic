import { StyleSheet } from "react-native";

export const COLORS = {
  appColor: "#FF4EAF",
  lightPink: "#FFD8ED",
  navStroke: "#E6E6E6",
  darkGray: "#767676",
  lightGray: "#ececec",
};

export const FONT_SIZES = {
  caption: 12,
  body: 14,
  body2: 16,
  title: 18,
  head: 20,
  head24: 24,
};

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F8",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    maxWidth: 600,
    height: "100%",
    backgroundColor: "#F5F6F8",
    padding: 24,
  },
  text: {
    fontFamily: "KyoboHand",
    letterSpacing: 1,
  },
  button: {
    fontFamily: "KyoboHand",
    cursor: "pointer",
  },
});
