import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import axios from "axios"
import { styles } from "../assets/css/login"; // Make sure to adjust the path based on your file structure

const AuthScreen = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState("login"); // State to track the active tab
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRedirect = () => {
    navigation.navigate("Home");
    console.log("Redirecting to home page...");
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("https://rest-api-final-year-project.onrender.com/user/signup", {
        email,
        password,
      });

      console.log("Registration successful", response.data);
      handleRedirect();
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const renderLoginFields = () => {
    return (
      <>
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Email"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Password"
        />
        <TouchableOpacity onPress={() => handleRedirect()}>
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
          secureTextEntry={true}
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
      source={require("../assets/women.webp")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.loginSection}>
          <View style={styles.loginContainer}>
            <View>
              <Text style={styles.heading}>
                {currentTab === "login" ? "Login" : "Registration"}
              </Text>
            </View>
            <View>
              {currentTab === "login"
                ? renderLoginFields()
                : renderRegistrationFields()}
            </View>
            <Text
              onPress={() =>
                setCurrentTab(currentTab === "login" ? "register" : "login")
              }
              style={styles.switch}
            >
              {currentTab === "login"
                ? "Don't have an account, Register"
                : "Already have an account, Login"}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AuthScreen;
