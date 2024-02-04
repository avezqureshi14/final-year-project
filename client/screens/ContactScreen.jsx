import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../contexts/actions/contact';
import * as Contacts from 'expo-contacts';

const ContactScreen = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(undefined);
  const [contactsFetched, setContactsFetched] = useState(false);
  const dispatch = useDispatch();
  const fetchContacts = async () => {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.Birthday,
            Contacts.Fields.Emails,
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.PhoneNumbers,
          ],
        });
        if (data.length > 0) {
          setContacts(data);
          setContactsFetched(true);
          dispatch(addContacts(data)); // Dispatch the action with fetched contacts
        }
      } else {
        setError('Permission to access contacts denied');
      }
    } catch (error) {
      setError('Error fetching contacts: ' + error.message);
    }
  };

  const sendAlert = () => {
    if (!contacts || contacts.length === 0) {
      Alert.alert('No Contacts', 'There are no contacts to send messages to');
      return;
    }

    // Rest of your SMS sending logic...

    // Display alert when sending is initiated
    Alert.alert('Sending Alert', 'Messages are being sent to contacts...');
  };

  const renderContact = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.contactName}>{item.firstName} {item.lastName}</Text>
        <Text>{item.phoneNumbers ? item.phoneNumbers[0]?.number : 'No phone number'}</Text>
      </TouchableOpacity>
    );
  };

  const CustomButton = ({ title, onPress, color }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={contactsFetched ? 'Send Alert' : 'Import Contacts'}
          onPress={contactsFetched ? sendAlert : fetchContacts}
          color="#c83564"
        />
      </View>
      {error ? <Text style={styles.errorText}>Error: {error}</Text> :
        <FlatList
          data={contacts}
          renderItem={renderContact}
          keyExtractor={(item) => item.id}
          style={styles.contactList}
        />
      }
    </View>
  );
};

// Styles...

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
  contactList: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ContactScreen;
