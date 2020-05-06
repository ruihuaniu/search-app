import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>This is home page</Text>
            <Button
                title="Go to profile page"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
