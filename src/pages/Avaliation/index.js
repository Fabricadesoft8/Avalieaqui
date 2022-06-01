import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Alert,
  TouchableOpacity
   } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Avaliation(){
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
        <Text style={styles.massage}>Avaliação</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <Text style={styles.title}>Chance de Indicar</Text>
        <TextInput
          placeholder="Avalie de 0 a 10..."
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'numeric'}
          style={styles.input}
        />

        <Text style={styles.title}>Grau de Satisfação do Atendimento</Text>
        <TextInput
          placeholder="Avalie de 0 a 10..."
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'numeric'}
          style={styles.input}
        />
        
        <Text style={styles.title}>Chance de Voltar</Text>
        <TextInput
          placeholder="Avalie de 0 a 10..."
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'numeric'}
          style={styles.input}
        />

        <Text style={styles.title}>Resenha Crítica</Text>
        <TextInput
        placeholder='Digite como foi sua experiência...'
        style={styles.input}
        />

        <TouchableOpacity style={styles.button}
          onPress={() => Alert.alert('Avaliação enviada')}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={ () => navigation.navigate('Secretary')}>
          <Text style={styles.buttonText}>Voltar</Text>
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
  input:{
    borderBottomWidth:1,
    height: 42,
    marginBottom: 12,
    fontSize: 16,
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
  }
})