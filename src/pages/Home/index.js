import React, { useState, useEffect } from 'react';
import api from '../../services/api.js'

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [entities, setEntities] = useState([{
    _id: 0,
    about: '...',
    address: '',
    assessments: [],
    comments: [],
    name: '',
    open: '',
    photos: ['']
  }]);

  useEffect(async () => {
    await api.get('/entities').then(res => {
      setEntities(res.data)
    }).catch(error => console.log("Error:1 ", error));
  });


  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter(
        function (item) {
          if (item.name) {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          }
        });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
        {item.name.toUpperCase()}
      </Text>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilter(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Procure Aqui"
        />

        {entities.map((item, index) => {
          const navigation = useNavigation();
          return (
            <TouchableOpacity style={styles.button}
            onPress={ () => navigation.navigate('Secretary')}>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >{item.name}</Text>
            </TouchableOpacity>
          )
        })}

        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: 'white',
  },
  itemStyle: {
    backgroundColor: '#0d78af',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    color: 'white',
  },
  button:{
    backgroundColor: '#0d78af',
    width: '90%',
    borderRadius: 5,
    paddingVertical: 8,
    marginTop: 14,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#0d78af',
  },
});

export default App;