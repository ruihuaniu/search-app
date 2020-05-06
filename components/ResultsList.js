import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { DataContext } from './DataContext';
import Icon from '@expo/vector-icons/FontAwesome5';

const ResultsList = ({ navigation }) => {

    const { items, setItems } = useContext(DataContext)

    console.log('data in list is ', items);


    return (



        <View style={styles.container}>
            <Text style={styles.text}>{items.length} results found and listed below </Text>

            <FlatList
                // numColumns={2}
                // horizontal={false}
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Details', item)} >
                            <View style={styles.listItemView}>
                                <Text >{item.title}</Text>
                                <Icon name="angle-right" size={20} color="#ddd" />
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
        // backgroundColor: 'red',
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
    listItemView: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    image: {
        width: 200,
        height: 250,
    }
})
