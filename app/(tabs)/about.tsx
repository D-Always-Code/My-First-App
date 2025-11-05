import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function About() {
  return (
    <LinearGradient
      colors={["#1e1e1e", "#25292e"]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.title}>Tentang Aplikasi Ini</Text>
          <Text style={styles.text}>
            Aplikasi ini saya kembangkan berdasarkan{" "}
            <Text style={styles.highlight}>dokumentasi resmi dan prosedur dari Expo Dev</Text>.
            Seluruh struktur proyek, konfigurasi, serta komponen utama dibuat dengan
            mengikuti panduan pengembangan Expo, dengan beberapa penyesuaian sesuai kebutuhan.
          </Text>

          <Text style={styles.text}>
            Tujuan saya membuat aplikasi ini adalah untuk mempelajari dan menerapkan
            alur kerja React Native menggunakan Expo, sekaligus memperdalam pemahaman
            tentang pengembangan aplikasi mobile modern.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.subtitle}>🚀 Coba Sendiri!</Text>
          <Text style={styles.text}>
            Anda bisa melihat, mencoba langsung, atau mengunduh aplikasi ini dari GitHub saya.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL("https://github.com/D-Always-Code")}
          >
            <Text style={styles.buttonText}>Kunjungi GitHub Saya</Text>
          </TouchableOpacity>

          <Text style={styles.textSmall}>
            Jangan lupa untuk mengikuti akun GitHub atau media sosial saya agar tidak ketinggalan
            proyek berikutnya!
          </Text>

          <Text style={styles.signature}>Bye, Doni 👋</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#2d2f34",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
    width: "100%",
    maxWidth: 400,
  },
  title: {
    color: "#ffd33d",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
  },
  text: {
    color: "#d6d6d6",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    textAlign: "justify",
  },
  textSmall: {
    color: "#a9a9a9",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 10,
  },
  highlight: {
    color: "#ffd33d",
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#444",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "#ffd33d",
    borderRadius: 12,
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#25292e",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
  },
  signature: {
    marginTop: 20,
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontStyle: "italic",
  },
});
