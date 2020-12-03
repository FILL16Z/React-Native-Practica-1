import React from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid } from 'react-native';
import Constants from "expo-constants";



const App = () => {
  const showToast = () => {
    ToastAndroid.show("Este es un toast para android", ToastAndroid.SHORT);
  };



  return (
    <View style={styles.container}>
      <Button title="Presiona el botón" onPress={() => showToast()} />
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});

export default App;
