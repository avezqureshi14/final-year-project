import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    // Logic for login button press
  };

  const handleUpdate = () => {
      navigation.navigate('UpdateDetails')
  };

  return (
    <View style={styles.profileSection}>
      <View style={styles.profileContainer}>
        <View style={styles.imageWomen}>
          <Image
            source={require("../assets/women.webp")}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.name}>Eliana Doe</Text>
        <View style={styles.profileInfo}>
          <Text>elinadoe@gmail.com</Text>
          <Text style={styles.text}>Home: Kondhwa, Pune</Text>
          <Text style={styles.text}>Work: Kondhwa, Pune</Text>
          <Text style={styles.text}>Mobile: 9890562214</Text>
          <View style={styles.profileButtons}>
            <TouchableOpacity onPress={handleUpdate} style={styles.button}>
              <Text style={styles.buttonText}>Update Prof.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} style={styles.button}>
              <Ionicons name="log-out-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  profileContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    overflow: "hidden",
  },
  imageWomen: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginLeft: 50,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 75,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  profileInfo: {
    padding: 20,
  },
  text: {
    marginVertical: 5,
    color: "#666",
  },
  profileButtons: {
    flexDirection: "row",
    marginTop: 5,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#c83564",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15,
    borderRadius: 5,
    margin: 7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
