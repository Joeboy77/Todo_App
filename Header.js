import { StatusBar } from 'expo-status-bar';
import {  FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

function Header(){
return(
    <View style={styles.head}>
        <Text style={styles.title}>My Todo</Text>
    </View>
)
}
const styles = StyleSheet.create({
    head: {
        height: 80,
        paddingTop: 50,
        backgroundColor: 'coral',
    }, title: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default Header