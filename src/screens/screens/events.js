import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { darkGreen } from '../../components/Constants';

export default function EventScreen() {
  const eventData = {
    title: 'Tech Conference 2023',
    date: 'Saturday, May 20, 2023',
    location: 'Moscone Center, San Francisco',
    description: 'Join us for the biggest tech event of the year! Hear from industry leaders, attend hands-on workshops, and network with like-minded professionals.',
    // image: source('https://wmimg.azureedge.net/public/img/articles/tata-mumbai-marathon/title.jpg'),
  };

  const handleRegisterPress = () => {
    // handle register button press
    alert('Thanks for joining ')
  };

  return (
    // <ImageBackground source={require('../../../assets/imagee.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={(require('../../../assets/ocean.jpg'))} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{eventData.title}</Text>
          <Text style={styles.date}>{eventData.date}</Text>
          <Text style={styles.location}>{eventData.location}</Text>
          <Text style={styles.description}>{eventData.description}</Text>
          <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
            <Text style={styles.buttonText}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    // </ImageBackground>
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
  },
  image: {
    width: '100%',
    height: 200,
    opacity: 0.7, // Adjust the opacity of the background image
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 32,
  },
  button: {
    backgroundColor: darkGreen,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
