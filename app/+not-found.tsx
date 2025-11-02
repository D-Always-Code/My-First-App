import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{title : "Oops Not Found!!"}} />
      <View style = {styles.container}>
        <Text style = {styles.text}> Oops Halaman Tidak Ditemukan!!</Text>
        <Link href="/" style={styles.button}> Pergi ke Halaman Rumah </Link>
      </View>
    </>
  );
}

// Fiturnya Akan Berfungsi jika misal Linknya tidak ada atau salah rute link :D

const styles = StyleSheet.create({
  container : {
    backgroundColor: "#b00101ff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text :{
    color: "white",
  },
  button :{
    color : "white",
    fontSize: 20,
    textDecorationLine: "underline",
  }
});
