import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView, TouchableOpacity } from 'react-native';
import { firebase } from '../../../config'
import { darkGreen } from '../../components/Constants';

export default function SettingsScreen() {
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  
    const handleNotificationsToggle = () => {
      setNotificationsEnabled(previousState => !previousState);
    };
  
    const handleDarkModeToggle = () => {
      setDarkModeEnabled(previousState => !previousState);
    };


    const [name, setName] = useState([]);

    const changePassword = () => {
      firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(() => {
        alert("Password reset email sent")
      }).catch((error) => {
        alert(error)
      })
    }

    useEffect(() => {
      firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if(snapshot.exists){
          setName(snapshot.data())
        }
        else{
          console.log('User does n0t exists')
        }
      })
    }, [])
  
    return (
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
            onPress={() => {changePassword()}}
            style={styles.button}
          >
            <Text style={styles.sectionTitle}>
              Change Password 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => firebase.auth().signOut()}
            style={styles.button}
          >
            <Text style={styles.sectionTitle}>
              Sign out
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        color: "white",
    },
    button:{
      marginTop:10,
      height:50,
      width:200,
      backgroundColor: darkGreen,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      alignSelf: "center",
    },
});



