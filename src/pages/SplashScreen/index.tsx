import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import Logo from '../../assets/icon/Logo.svg';

type SplashScreenProps = {
  navigation: any; // Anda juga dapat mendefinisikan tipe NavigationProp<any> seperti sebelumnya
};

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('SignIn'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Logo width={100} height={100} />{' '}
      {/* Tambahkan properti width dan height sesuai kebutuhan */}
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02CF8E',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
