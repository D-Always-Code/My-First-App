import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Hii Semuanya</Text>
      <Link href={"/about"} style={styles.button}> Pergi ke Halaman About </Link>
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
    fontSize: 30,
  },
  button :{
    color : "white",
    fontSize: 20,
    textDecorationLine: "underline",
  }
});
