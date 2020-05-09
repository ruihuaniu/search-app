import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { DataContext } from './DataContext';
import Icon from '@expo/vector-icons/FontAwesome5';
import { images } from '../utils/images';

const ResultsList = ({ navigationAndRoute }) => {



    const { items, setItems } = useContext(DataContext)
    const { navigation, route } = navigationAndRoute   //destructing
    const [isHome, setIsHome] = useState(true)  // check if at home screen

    // useEffect(() => {
    //     // console.log('route on result list is ', route);
    //     if (route.name !== "Home") {
    //         setIsHome(false)
    //     }
    // }, [])


    return (



        <View style={styles.container}>
            <Text
                //style={isHome ? styles.remove : styles.text}   // render could be slow if the list is large, and as it will use different components on home page, so could get rid of this check.
                style={styles.text}
            >
                {items.length} results found and listed below
            </Text>

            <FlatList
                numColumns={2}
                horizontal={false}
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Details', item)} >
                            <Image source={images.ids[item.id.toString().split("")[0]]} style={styles.itemImage} />
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
        width: '50%',
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginBottom: 5,

    },
    itemImage: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    image: {
        width: 200,
        height: 250,
    },
    remove: {
        display: 'none'
    }
})
