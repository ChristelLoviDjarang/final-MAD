import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';

const splash: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.innerContainer} nestedScrollEnabled={true}>
        <View style={styles.box}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./src/image/2.jpg')} // Corrected file path with double backslashes
              style={[styles.image, styles.marginBottom]}
            />
          </View>
          <Text style={[styles.text, styles.textCenter]}>
            Your personal mood tracker
          </Text>

          {/* Add more Image and TextInput components as needed */}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6FA',
  },
  innerContainer: {
    marginBottom: 20,
  },
  box: {
    marginBottom: 20,
    backgroundColor: '#E6E6FA',
  },
  text: {
    fontSize: 13,
    color: 'black',
    textShadowRadius: 10,
    marginTop: -60,
  },
  textCenter: {
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: 'cover',
  },
  input: {
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    color: 'white',
    paddingLeft: 8, // Add padding left to prevent overlap with placeholder
  },
  marginBottom: {
    marginTop: 220, // Adjust as needed
  },
});

export default splash;
