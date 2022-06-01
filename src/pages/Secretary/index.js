import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Image
   } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Secretary(){
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Nome da Secretaria</Text>
    <View style={styles.containerLogo}>
      <Animatable.Image
        source={require('../../assets/ch5.png')}
        style={{ width: '55%', height: '150%' }}
        resizeMode="contain"
        />
    </View>
      

      <TouchableOpacity 
      style={styles.button}
      onPress={ () => navigation.navigate('About')}>
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.button}
      onPress={ () => navigation.navigate('Avaliation')}>
        <Text style={styles.buttonText}>Avalie Agora</Text>
      </TouchableOpacity>

     <TouchableOpacity 
      style={styles.button}
      onPress={ () => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#ffffff"
  },
  containerLogo:{
    flex:1,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 12,
    alignSelf: 'center',
    alignItems: 'center',
    color: '#000000'
  },
  button:{
    marginTop: 10,
    backgroundColor: '#323232',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold'
  }
})