import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import { styles } from '../assets/css/login';
import { useDispatch } from 'react-redux';
import { signin, signup } from '../contexts/actions/auth';

const AuthScreen = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRedirect = () => {
    navigation.navigate('Home');
    console.log('Redirecting to home page...');
  };

  const handleRegister = async () => {
    try {
      await dispatch(signup({ email, password }));
      handleRedirect();
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  const handleLogin = async () => {
    try {
      await dispatch(signin({ email, password }));
      handleRedirect();
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const renderLoginFields = () => {
    return (
      <>
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => handleLogin()}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </>
    );
  };

  const renderRegistrationFields = () => {
    return (
      <>
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => handleRegister()}>
          <Text style={styles.button}>Register</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/women.webp')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.loginSection}>
          <View style={styles.loginContainer}>
            <View>
              <Text style={styles.heading}>
                {currentTab === 'login' ? 'Login' : 'Registration'}
              </Text>
            </View>
            <View>
              {currentTab === 'login'
                ? renderLoginFields()
                : renderRegistrationFields()}
            </View>
            <Text
              onPress={() =>
                setCurrentTab(currentTab === 'login' ? 'register' : 'login')
              }
              style={styles.switch}
            >
              {currentTab === 'login'
                ? "Don't have an account, Register"
                : 'Already have an account, Login'}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AuthScreen;
