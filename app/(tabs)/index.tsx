import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/button";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style = {styles.container}>
      <View style = {styles.ImageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/> 
      </View>
      <View style={styles.footerContainer}>
        <Button  theme = "primary" label="Choose a photo"/>
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "#25292e",
    flex: 1,
    alignItems: "center",
  },
  ImageContainer : {
    flex: 1,
  },
   footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
