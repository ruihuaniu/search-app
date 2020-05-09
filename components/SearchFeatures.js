import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Keyboard } from 'react-native'
import hotKeywords from '../assets/data/hotKeywords.json'
import { DataContext } from './DataContext'

const SearchFeatures = () => {

    const { items, setItems, data, searchValue, setSearchValue, isSearch, setIsSearch } = useContext(DataContext)

    // console.log("hotKeywords", hotKeywords.recentSearch);
    const handleOnPress = (item) => {
        const result = data.filter((dataItem) => dataItem.title.toLowerCase().includes(item.name.toLowerCase()))
        setItems(result)
        setSearchValue(item.name)
        setIsSearch(true)
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            <Text>Recent Keywords</Text>
            <FlatList
                numColumns={4}
                horizontal={false}
                keyboardShouldPersistTaps={'handled'}
                data={hotKeywords.recentSearch}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.keywords} onPress={() => handleOnPress(item)}>
                            <Text style={styles.text} >{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />

            <Text>Most searched Keywords</Text>
            <FlatList
                numColumns={4}
                horizontal={false}
                keyboardShouldPersistTaps={'handled'}
                data={hotKeywords.mostSearch}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.keywords} onPress={() => handleOnPress(item)}>
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}

export default SearchFeatures

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    keywords: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    text: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#ddd'
    }
})
