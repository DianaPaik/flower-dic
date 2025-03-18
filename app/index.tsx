import { Redirect } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

// const index = () =>{
//   return (
//     <View style={styles.container}>
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// });

// export default index;

const StartPage = () => {
  return <Redirect href="/home" />;
};

export default StartPage;