import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Button 
                title="Soy un botón que no sirve" 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  
