import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Linking } from 'expo'
import { images } from '../utils/images'
import Icon from '@expo/vector-icons/FontAwesome5'

const ListItem = ({ item }) => {

    const handlePress = () => {
        Linking.openURL(item.link)
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={images.ids[item.id.toString().split("")[0]]} style={styles.image} />
                <Text style={styles.text} onPress={handlePress}>{item.title} <Icon name="long-arrow-alt-right" size={20} /> </Text>
                <Text style={styles.type}>{item.type.split(" ").join(", ")}</Text>
                <Text>{item.description}</Text>
            </View>
        </View>

    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    card: {
        width: '90%',
    },
    image: {
        width: '100%',
        height: 200,
    },
    text: {
        fontSize: 20,
        // textDecorationLine: "underline",
        padding: 10,
        margin: 10,
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    type: {
        fontSize: 13,
        marginLeft: 10,
        marginBottom: 15,
        padding: 5,
        fontStyle: 'italic',
        textAlign: 'left',
        alignSelf: 'stretch',
    }
})
