import React, { useState, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native'
import { DataContext } from './DataContext'
import Icon from '@expo/vector-icons/FontAwesome5'

const SearchBar = ({ navigation }) => {

    // console.log("navigation is ", navigation);


    const { items, setItems, data } = useContext(DataContext)
    const [value, setValue] = useState()

    const handleOnPress = () => {
        // console.log(value);
        // console.log("data in search is ", items);

        const result = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
        setItems(result)
        // console.log("result is ", result);

    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search name here..."
                    value={value}
                    onChangeText={text => setValue(text)}
                />
            </View>

            <TouchableOpacity style={styles.buttonContainer} >
                <Text style={styles.button} title="Button" onPress={handleOnPress} >Search</Text>
            </TouchableOpacity>
            <Icon style={styles.settingIcon} name="cog" size={20} color="#000"
                onPress={() => { Alert.alert("Under working :(") }}
            // onPress={() => navigation.navigate('Settings')}   //navigation with header title seems not working
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5,

    },
    inputContainer: {
        borderColor: '#ccc',
        borderWidth: 1,
        width: '75%',
        height: '100%',
        minHeight: 30,
        justifyContent: 'center',
    },
    input: {
        paddingLeft: 10,
    },
    buttonContainer: {
        width: '20%',
        height: '100%',
        minHeight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1467d4'
    },
    button: {
        color: '#fff',
    },
    settingIcon: {
        width: '5%',
        margin: 5,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }


})



export default SearchBar
