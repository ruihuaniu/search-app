import React from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import SliderBanner from '../components/SliderBanner'
import ResultsList from '../components/ResultsList'

const Home = ({ navigation }) => {

    console.log("home navigation is ", navigation);

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
                console.log("dismiss keyboard")
            }
            }>
            <>
                <SliderBanner />
                <ResultsList navigation={navigation} />
                {/* <Text>This is home page</Text> */}
                <Button
                    title="Go to videos page"
                    onPress={() => navigation.navigate('Videos')}
                />
            </>
        </TouchableWithoutFeedback >


    )
}

export default Home

const styles = StyleSheet.create({})
