import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

const backgroundImage = require('./src/image/activities.jpeg'); // Ganti dengan path sesuai dengan lokasi gambar Anda
const backgroundImage2 = require('./src/image/inspirational.jpeg');
const backgroundImage4 = require('./src/image/article.jpeg');
const backgroundImage5 = require('./src/image/DIARY.jpeg');

const Menu: React.FC = () => {
  const handlePress = (label: string) => {
    // Handle press logic here
    console.log(`${label} pressed!`);
  };

  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.innerContainer} nestedScrollEnabled={true}>
        <View style={styles.box5}>
          <ImageBackground
            source={backgroundImage5}
            style={styles.backgroundImage}
            resizeMode="cover">
            <TouchableOpacity
              style={[styles.button, styles.button1]}
              onPress={() => handlePress('Tips')}>
              <Text style={styles.buttonText}>Diary</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.box1}>
          <ImageBackground
            source={backgroundImage}
            style={styles.backgroundImage}
            resizeMode="cover">
            <TouchableOpacity
              style={[styles.button, styles.button2]}
              onPress={() => handlePress('Activities')}>
              <Text style={styles.buttonText}>Activities</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.box3}>
          <ImageBackground
            source={backgroundImage2}
            style={styles.backgroundImage}
            resizeMode="cover">
            <TouchableOpacity
              style={[styles.button, styles.button3]}
              onPress={() => handlePress('Inspirational Story')}>
              <Text style={styles.buttonText}>Inspirational Story</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.box5}>
          <ImageBackground
            source={backgroundImage4}
            style={styles.backgroundImage}
            resizeMode="cover">
            <TouchableOpacity
              style={[styles.button, styles.button5]}
              onPress={() => handlePress('Tips')}>
              <Text style={styles.buttonText}>Article & Tips</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgray',
  },
  innerContainer: {
    marginBottom: 20,
  },
  box: {
    marginBottom: 20,
    marginTop: -100,
    borderRadius: 8,
    padding: -100,
    borderWidth: 1,
    borderColor: 'grey',
    width: 350,
    height: 150,
    overflow: 'hidden',
  },
  box1: {
    marginBottom: 20,
    borderRadius: 8,
    padding: -100,
    borderWidth: 1,
    borderColor: 'grey',
    width: 350,
    height: 150,
    overflow: 'hidden', // Ensure children don't overflow the box
  },
  box3: {
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
    width: 350,
    height: 150,
    overflow: 'hidden', // Ensure children don't overflow the box
  },
  box4: {
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
    width: 350,
    height: 150,
    overflow: 'hidden', // Ensure children don't overflow the box
  },
  box5: {
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey',
    width: 350,
    height: 150,
    overflow: 'hidden', // Ensure children don't overflow the box
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(255, 0, 0, 1)',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: -122,
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
    marginBottom: 15,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'white',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 40,
  },
  button1: {
    backgroundColor: 'transparent',
  },
  button2: {
    backgroundColor: 'transparent',
  },
  button3: {
    backgroundColor: 'transparent',
  },
  button4: {
    backgroundColor: '#007bff',
  },
  button5: {
    backgroundColor: '',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Menu;
