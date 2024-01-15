// Storage.js

import AsyncStorage from "@react-native-async-storage/async-storage";

// Key untuk penyimpanan data
const REGISTRATION_KEY = 'registrationData';

export const saveRegistrationData = async (data) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(REGISTRATION_KEY, jsonValue);
    console.log('Registration data saved successfully.');
  } catch (e) {
    console.error('Error saving registration data:', e);
  }
};

export const getRegistrationData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(REGISTRATION_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error fetching registration data:', e);
    return null;
  }
};
