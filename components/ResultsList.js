import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'

const ResultsList = ({ data }) => {

    console.log('data in list is ', data);

    return (



        <View style={styles.container}>
            <Text style={styles.text}>{data.length} results found and listed below </Text>
            <FlatList
                // numColumns={2}
                // horizontal={false}
                data={data}
                keyExtractor={(item) => item.id.toString()}

                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.listItem}>
                            <View>
                                <Text >{item.title}</Text>

                            </View>
                        </TouchableOpacity>

                    )

                }}
            />


        </View>


    )
}

export default ResultsList

const styles = StyleSheet.create({
    container: {
        flex: 10,
        // backgroundColor: '#f8f8f8',
    },
    text: {
        textAlign: 'center',
        padding: 5,
        fontSize: 13,
    },
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginBottom: 5,

    },
    image: {
        width: 200,
        height: 250,
    }
})
