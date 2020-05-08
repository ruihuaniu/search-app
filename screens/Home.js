import React from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import SliderBanner from '../components/SliderBanner'
import ResultsList from '../components/ResultsList'
import Icon from '@expo/vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = (props) => {

    // console.log("home props is ", props);

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
                console.log("dismiss keyboard")
            }
            }>
            <View style={{ flex: 1 }}>

                <SliderBanner />
                <ResultsList navigationAndRoute={props} />

                {/* bottom message seems not common with Native apps, comment out */}

                {/* <TouchableOpacity style={styles.bottomMsg} >
                    <Text onPress={() => navigation.navigate('Videos')} style={{ color: "#fff", width: '80%' }}>View our policy</Text>
                    <Icon onPress={() => console.log("icon clicked")} name="close" size={20} color="grey" />
                </TouchableOpacity> */}

            </View>
        </TouchableWithoutFeedback >


    )
}

export default Home

const styles = StyleSheet.create({
    bottomMsg: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#1467d4',
        color: '#fff',
        padding: 5,

    },
    remove: {
        display: 'none',
    }
})
