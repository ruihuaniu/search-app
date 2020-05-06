import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'

const ResultsList = ({ data }) => {

    console.log('data in list is ', data);

    return (



        <View style={styles.container}>
            <Text>This is the results list</Text>
            <FlatList
                // numColumns={2}
                // horizontal={false}
                data={data}
                keyExtractor={(item) => item.id.toString()}

                renderItem={({ item }) => {
                    return (
                        <Text >{item.title}</Text>
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
    },
    image: {
        width: 200,
        height: 250,
    }
})
