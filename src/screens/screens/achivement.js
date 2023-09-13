import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { darkGreen } from '../../components/Constants';

export default function AchievementScreen() {
  return (
    <ImageBackground source={require('../../../assets/imagee.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Achievements</Text>
        {/* Add your achievement content here */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Make the container transparent
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  // Add styles for your achievement content here
});
