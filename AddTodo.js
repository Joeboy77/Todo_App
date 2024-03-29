import React, { useState} from 'react';
import {  Button, FlatList, StyleSheet, Text, TextInput,  View } from 'react-native';

export default function AddTodo({ submit }){
    const [text, setText] = useState('')

    const handleChange = (val) =>{
        setText(val)
    }
    return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder='Now todo...'
            onChangeText={handleChange}
            />
            <Button onPress={() => submit(text)} title='Add Todo' color='coral'/>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})