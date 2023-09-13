import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../config";
import Background from "../components/Background";
import Btn from "../components/Btn";
import Field from "../components/Field";
import { darkGreen } from "../components/Constants";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const forgetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Background>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Text style={styles.appTitle}>Your App Title</Text> */}
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Welcome Back</Text>
          <Text style={styles.sectionSubtitle}>Login to your account</Text>
          <Field
            placeholder="Email"
            keyboardType={"email-address"}
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => {
              forgetPassword();
            }}
          >
            <Text style={styles.forgotPassword}>Forgot Password ?</Text>
          </TouchableOpacity>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => loginUser(email, password)}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.signupLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
  },
  appTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    marginTop: "40%",
    alignItems: "center",
  },
  sectionTitle: {
    color: darkGreen,
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionSubtitle: {
    color: "grey",
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
  },
  forgotPassword: {
    color: darkGreen,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    
  },
  signupText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  signupLink: {
    color: darkGreen,
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Login;
