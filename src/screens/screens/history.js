import { Text, StyleSheet, SafeAreaView, ImageBackground, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const History = () => {

  return (
    <ImageBackground source={require('../../../assets/imagee.jpg')} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcomeText}>History</Text>
        <View style={styles.separator} />
        <Text style={styles.additionalInfo}>
          Explore our amazing features and more.
        </Text>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default History

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -500,
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 200,
    backgroundColor: '#026efd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
    width: '80%',
    marginVertical: 20,
  },
  additionalInfo: {
    fontSize: 16,
    color: 'white',
  },
})
