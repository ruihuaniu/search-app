import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Search name here..." />
            </View>



            <TouchableOpacity style={styles.buttonContainer} >
                <Text style={styles.button} title="Button" onPress={() => Alert.alert('Button click')} >Search</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        height: 40,
    },
    inputContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        width: '70%',
        height: 36,
        justifyContent: 'center',
    },
    input: {
        paddingLeft: 10,
    },
    buttonContainer: {
        width: '20%',
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1467d4'
    },
    button: {
        color: '#fff',
    },


})



export default SearchBar
