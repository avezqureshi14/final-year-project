import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
import {addContacts} from "../contexts/actions/contact"
const ContactScreen = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(undefined);
  const [contactsFetched, setContactsFetched] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  console.log(selectedContact.firstName)
  const fetchContacts = async () => {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.Emails,
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.PhoneNumbers,
          ],
        });
        if (data.length > 0) {
          setContacts(data);
          setContactsFetched(true);
        }
      } else {
        setError('Permission to access contacts denied');
      }
    } catch (error) {
      setError('Error fetching contacts: ' + error.message);
    }
  };

  const sendAlert = async() => {
    if (!selectedContact) {
      Alert.alert('No Contact Selected', 'Please select a contact before sending an alert');
      return;
    }

    try {
      await addContacts(selectedContact);
      Alert.alert('Contact Added', 'Selected contact has been added to the database');
    } catch (error) {
      console.error('Error adding contact to the database:', error);
      Alert.alert('Error', 'Failed to add the contact to the database');
    }
    // Store the selected contact in another hook or perform any other action with it
    // Example: setAnotherHook(selectedContact);

    // Rest of your SMS sending logic...

    // Display alert when sending is initiated
    Alert.alert('Sending Alert', `Message is being sent to ${selectedContact.firstName} ${selectedContact.lastName}`);
  };

  const renderContact = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.card, selectedContact && selectedContact.id === item.id ? styles.selectedCard : null]}
        onPress={() => setSelectedContact(item)}
      >
        <Text style={styles.contactName}>{item.firstName} {item.lastName}</Text>
        <Text>{item.phoneNumbers ? item.phoneNumbers[0]?.number : 'No phone number'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={contactsFetched ? sendAlert : fetchContacts}
          style={[styles.button, { backgroundColor: '#c83564' }]}
        >
          <Text style={styles.buttonText}>
            {contactsFetched ? 'Add Selected Contacts' : 'Import Contacts'}
          </Text>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
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
  selectedCard: {
    backgroundColor: '#c0c0c0', // Customize the background color for selected card
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ContactScreen;
