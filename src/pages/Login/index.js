import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
   } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function Login(){
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);
  return(
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
        <Text style={styles.massage}>Bem-vind@!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        
        <Text style={styles.title}>Email</Text>
        <TextInput
        placeholder='Digite um email...'
        style={styles.email}
        />

        <Text style={styles.title}>Senha</Text>
        <View style={styles.inputArea}>
        <TextInput
        placeholder='Digite aqui sua senha...'
        style={styles.password}
        value={input}
        onChangeText={(texto) => setInput(texto)}
        secureTextEntry={hidePass}
        />
        <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass)}>
          {hidePass ?
          <Ionicons name='eye' size={25}/>
          :
          <Ionicons name='eye-off' size={25}/>
        }
        </TouchableOpacity>
        </View>

        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRecover}
         onPress={ () => navigation.navigate('Recover')}>
          <Text style={styles.recoverPassword}>Esqueceu a senha?</Text>
          
        </TouchableOpacity>

      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#0d78af'
  },
  containerHeader:{
    marginTop:'14%',
    marginBottom:'8%',
    paddingStart: '5%'
  },
  massage:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  containerForm:{
    backgroundColor: '#ffffff',
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%'
  },
  title:{
    fontSize: 20,
    marginTop: 28,
  },
  inputArea:{
    flexDirection: 'row',
    borderBottomWidth:1,
    width: '100%',
    height: 42,
    marginBottom: 12,
    fontSize: 16,

  },
  email:{
    borderBottomWidth:1,
    height: 42,
    marginBottom: 12,
    fontSize: 16,
  },
  password:{
    borderBottomWidth:1,
    height: 42,
    marginBottom: 12,
    fontSize: 16,
    width: '85%',
  },
  icon:{
    width: '15%',
    height: 50,
  },
  button:{
    backgroundColor: '#0d78af',
    width: '95%',
    borderRadius: 5,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color:'#ffffff',
    fontSize: 18,
    fontWeight:'bold'
  },
  
  buttonRecover:{
    marginTop: 14,
    alignSelf: 'center'
  },
  recoverPassword:{
    color:'#a1a1a1'
  }
})