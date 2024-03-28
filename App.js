import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Alert, FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import Header from './Components/Header';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';

export default function App() {  

  const [todo, setTodo] = useState([
    {text: 'Intern', key: '1'},
    {text: 'Football', key: '2'},
    {text: 'Sleep', key: '3'},
  ])

  const handlePress = (key) =>{
    setTodo((prevTode) =>{
      return prevTode.filter(todo => todo.key != key)
    })
  }

  const submit = (text) =>{

    if(text.length > 3){
      setTodo((prevTodo) =>{
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodo
        ]
      })
    }
    else{
      Alert.alert('OOPS!','Must be over 3 characters long', [{text: 'Understood'}] )
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submit= {submit}/>
          <View style={styles.list}>
            <FlatList 
            data={todo}
            renderItem={({item}) =>(
              <Todo item = {item} handlePress={handlePress}/>
            )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
