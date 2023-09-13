import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { firebase } from '../../../config';
import { darkGreen } from '../../components/Constants';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [name, setName] = useState([]);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(previousState => !previousState);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(previousState => !previousState);
  };

  const changePassword = () => {
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(() => {
        alert("Password reset email sent");
      }).catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log('User does not exist');
        }
      });
  }, []);

  return (
    <ImageBackground source={require('../../../assets/imagee.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Hello {name.firstName}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={handleNotificationsToggle}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dark Mode</Text>
          <Switch
            value={darkModeEnabled}
            onValueChange={handleDarkModeToggle}
          />
        </View>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            onPress={() => { changePassword(); }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Change Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => firebase.auth().signOut()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Sign out
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Add Profile 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Report
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Add a semi-transparent background
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Adjust text color to make it visible on the background
  },
  button: {
    marginTop: 10,
    height: 50,
    width: 200,
    backgroundColor: darkGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
