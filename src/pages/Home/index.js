import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
   } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons'

export default function Home(){
  return(
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/logo.png')}
          style={{ width: '80%' }}
          resizeMode="contain"
          />
      </View>
  </View>
);
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#ffffff"
  },
  containerLogo:{
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center'
  },
containerHeader:{
  marginTop:'14%',
  marginBottom:'8%',
  paddingStart: '5%'
}
})