import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Alert
   } from 'react-native';

   export default function Recover(){
     return(
      <View>
               <Text style={styles.title}><h1>Trocar a senha:</h1></Text>
               <Text>Identifique-se para receber um e-mail com as instruções e o link para criar uma nova senha.</Text>
        <TextInput
        placeholder='Digite seu email.
        ..'
        style={styles.input}
        />

        
              <Button
              title='Enviar e-mail'
              onPress={() => Alert.alert('E-mail Enviado!')}
              />
        
      </View>
      
           



     );
   }
   const styles = StyleSheet.create({
     input:{
       borderBottomWidth: 1,
       height: 42,
       marginBottom: 12,
       fontSize: 16,
     }
     

  })