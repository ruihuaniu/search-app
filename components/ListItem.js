import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Linking } from 'expo'

const ListItem = ({ item }) => {

    const handlePress = () => {
        Linking.openURL(item.link)
    }

    return (
        <View>
            {/* <Image source={item.image} /> */}
            <Text onPress={handlePress}>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({})
