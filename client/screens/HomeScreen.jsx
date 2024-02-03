import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const authData = useSelector((state) => state.auth.authData);

  useEffect(() => {
    console.log('Fetched Auth Data:', authData);
  }, [authData]);

  return (
    <View style={styles.container}>
      {authData && authData.result ? (
        <>
          <Text style={styles.text}>Welcome, {authData.result.email}!</Text>
        </>
      ) : (
        <Text style={styles.text}>User data not found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HomeScreen;
