import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import hotKeywords from '../assets/data/hotKeywords.json'

const SearchFeatures = () => {

    console.log("hotKeywords", hotKeywords.recentSearch);

    return (
        <View >
            <Text>Recent Keywords</Text>
            <FlatList
                data={hotKeywords.recentSearch}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />

            <Text>Most searched Keywords</Text>
            <FlatList
                data={hotKeywords.mostSearch}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}

export default SearchFeatures

const styles = StyleSheet.create({})
