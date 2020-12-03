import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const DetailsScreen = ({route,navigation}) => {

    return (
        <View style={styles.container}>
            <Text>Bienvenido a React Native</Text>
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  