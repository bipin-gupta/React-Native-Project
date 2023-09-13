import { StyleSheet, ImageBackground } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Parent");
    }, 3000);
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/SOT.jpg")}
      style={styles.imageBackground}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Splash;
