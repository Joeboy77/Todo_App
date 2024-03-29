import {  FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import {MeterialIcons} from '@expo/vector-icons';

export default function Todo({ item, handlePress }){
    return(
        <TouchableOpacity onPress={() => handlePress(item.key)}>     
                <Text style={styles.item}>{item.text}</Text> 
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
    }
})
