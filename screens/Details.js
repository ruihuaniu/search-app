import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ResultsList from '../components/ResultsList'
import ListItem from '../components/ListItem'

const Details = ({ route, navigation }) => {
    const item = route.params;

    return (
        <>
            <Text>This is details page</Text>
            <ListItem item={item} />
        </>
    )
}

export default Details

const styles = StyleSheet.create({})
