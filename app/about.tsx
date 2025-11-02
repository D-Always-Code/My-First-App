import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Ini Halaman About</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text :{
    color: "white",
  },
});
