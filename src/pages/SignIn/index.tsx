import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';
import {NavigationProp} from '@react-navigation/native';

type SignInProps = {
  navigation: NavigationProp<any>;
};

const SignIn: React.FC<SignInProps> = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader label="Sign In" /> {/* Perbaiki kata "label error" */}
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={24} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Sign In" onSubmit={() => navigation.navigate('Home')} />
        <Gap height={12} />
        <Button
          label="Create New Account"
          backgroundColor="#8D92A3"
          textColor="#FFFFFF"
          onSubmit={() => navigation.navigate('SignUp')}
        />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
});
