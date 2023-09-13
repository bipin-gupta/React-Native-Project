import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../../config";
import { useNavigation } from "@react-navigation/native";
import Background from "../components/Background";
import Btn from "../components/Btn";
import Field from "../components/Field";
import { darkGreen } from "../components/Constants";

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const registerUser = async (email, password, firstName, lastName, phone) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase
            .auth()
            .currentUser.sendEmailVerification({
              handleCodeInApp: true,
              url: "https://stepcounter-98048.firebaseapp.com",
            })
            .then(() => {
              alert("Verification email sent");
            })
            .catch((error) => {
              alert(error.message);
            })
            .then(() => {
              firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({
                  firstName,
                  lastName,
                  email,
                  phone,
                });
            })
            .catch((error) => {
              alert(error.message);
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Background>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <Text style={styles.appTitle}>Your App Title</Text> */}
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Register</Text>
          <Text style={styles.sectionSubtitle}>Create an account</Text>
          <Field
            placeholder="First Name"
            onChangeText={(firstName) => setFirstName(firstName)}
            autoCorrect={false}
            style={styles.input}
          />
          <Field
            placeholder="Last Name"
            onChangeText={(lastName) => setLastName(lastName)}
            autoCorrect={false}
            style={styles.input}
          />
          <Field
            placeholder="Email / Username"
            keyboardType={"email-address"}
            onChangeText={(email) => setEmail(email)}
            autoCorrect={false}
            style={styles.input}
          />
          <Field
            placeholder="Contact Number"
            keyboardType={"number"}
            onChangeText={(phone) => setPhone(phone)}
            style={styles.input}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            style={styles.input}
          />
          <Field
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={styles.input}
          />
          {/* <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By signing in, you agree to our 
            </Text>
            <Text style={styles.termsLink}>Terms & Conditions</Text>
            <Text style={styles.termsText}>and</Text>
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </View> */}
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              registerUser(email, password, firstName, lastName, phone);
            }}
          />
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginLink}>Login</Text>
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
  termsContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
    marginVertical: 10,
  },
  termsText: {
    color: "grey",
    fontSize: 16,
  },
  termsLink: {
    color: darkGreen,
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 5,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    color: darkGreen,
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Register;
