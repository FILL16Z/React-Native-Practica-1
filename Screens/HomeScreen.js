import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'


const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Presiona la imagen chueca</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('DetailsScreen')}>
             <Image    style={{
                    width: 256,
                    height: 180,
                    

                    }}
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                    
             />
                       
             </TouchableOpacity>        
            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  