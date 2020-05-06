import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import SliderBanner from '../components/SliderBanner'
import ResultsList from '../components/ResultsList'

const Home = ({ navigation }) => {

    console.log("home navigation is ", navigation);

    return (
        <>

            <SliderBanner />
            <ResultsList navigation={navigation} />
            {/* <Text>This is home page</Text> */}
            <Button
                title="Go to details page"
                onPress={() => navigation.navigate('Videos')}
            />
        </>
    )
}

export default Home

const styles = StyleSheet.create({})
