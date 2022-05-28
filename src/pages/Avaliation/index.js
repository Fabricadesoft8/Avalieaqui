import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import Textarea from 'react-native-textarea';
import StarRating from 'react-native-star-rating';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalStarCount: 3.5,
      customStarCount: 2.5,
    };
  }

  Indication(rating) {
    this.setState({
      customStarCount0: rating,
    });
  }

  goBack(rating) {
    this.setState({
      customStarCount1: rating,
    });
  }

  Satisfaction(rating) {
    this.setState({
      customStarCount2: rating,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Chance de Indicar
        </Text>
        
        <StarRating
          disabled={false}
          emptyStar="ios-star-outline"
          fullStar="ios-star"
          halfStar="ios-star-half"
          iconSet="Ionicons"
          maxStars={5}
          rating={this.state.customStarCount0}
          selectedStar={rating => this.Indication(rating)}
          fullStarColor="yellow"
          emptyStarColor="white"
          halfStarEnabled 
          starPadding={10}
        />
        <Text style={styles.instructions}>
          {`${this.state.customStarCount0} of stars is displayed`}
        </Text>

        <Text style={styles.welcome}>
          Chance de Voltar
        </Text>
        
        <StarRating
          disabled={false}
          emptyStar="ios-star-outline"
          fullStar="ios-star"
          halfStar="ios-star-half"
          iconSet="Ionicons"
          maxStars={5}
          rating={this.state.customStarCount1}
          selectedStar={rating => this.goBack(rating)}
          fullStarColor="yellow"
          emptyStarColor="white"
          halfStarEnabled
          starPadding={10}
        />
        <Text style={styles.instructions}>
          {`${this.state.customStarCount1} of stars is displayed`}
        </Text>

        <Text style={styles.welcome}>
          Satisfação do atendimento
        </Text>
        
        <StarRating
          disabled={false}
          emptyStar="ios-star-outline"
          fullStar="ios-star"
          halfStar="ios-star-half"
          iconSet="Ionicons"
          maxStars={5}
          rating={this.state.customStarCount2}
          selectedStar={rating => this.Satisfaction(rating)}
          fullStarColor="yellow"
          emptyStarColor="white"
          halfStarEnabled
          starPadding={10}
        />
        <Text style={styles.instructions}>
          {`${this.state.customStarCount2} of stars is displayed`}
        </Text>
        
        <Text style={styles.title}>Resenha Crítica</Text>
        <Textarea
        containerStyle={styles.textareaContainer}
        style={styles.textarea}
        onChangeText={this.onChange}
        defaultValue={this.state.text}
        maxLength={500}
        placeholder={'Digite sua mensagem...'}
        placeholderTextColor={'#c7c7c7'}
        underlineColorAndroid={'transparent'}/>

        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} 
        onPress={() => Alert.alert('Mensagem enviada!')}>
        <Text style={styles.buttonText}>Enviar</Text> 
        </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    color:'#ffffff',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  star: {
    paddingHorizontal: 6,
    opacity: 0,
  },
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
      color: '#ffffff',
      fontSize: 30,
    },
    input:{
      borderBottomWidth:1,
      height: 42,
      marginBottom: 12,
      fontSize: 16,
    },
    button:{
      backgroundColor: '#ffffff',
      width: '95%',
      borderRadius: 5,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText:{
      color:'#0d78af',
      fontSize: 20,
      fontWeight:'bold'
      
    }
  })
;