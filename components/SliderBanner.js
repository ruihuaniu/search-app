import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'

const SliderBanner = () => {
    return (
        <View style={styles.container}>

            <ImageBackground style={styles.image} source={require("../assets/images/banner.jpg")}>
                <Text style={styles.text}>Something good will happen</Text>
            </ImageBackground>
        </View>
    )
}

export default SliderBanner

const styles = StyleSheet.create({
    container: {
        flex: 3,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 500,
        height: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 25,
        fontStyle: 'italic',

    }
})
