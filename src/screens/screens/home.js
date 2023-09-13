import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../../../config";

const Home = () => {
  const [name, setName] = useState([]);

  const changePassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("User does not exist");
        }
      });
  }, []);

  return (
    <ImageBackground
      source={require("../../../assets/imagee.jpg")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcomeText}>Welcome {name.firstName} !!</Text>
        {/* <TouchableOpacity onPress={changePassword} style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity> */}
        <View style={styles.separator} />
        <Text style={styles.additionalInfo}>
          Explore our amazing features and more.
        </Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: -500,
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 200,
    backgroundColor: "#026efd",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "white",
    width: "80%",
    marginVertical: 20,
  },
  additionalInfo: {
    fontSize: 16,
    color: "white",
  },
});
