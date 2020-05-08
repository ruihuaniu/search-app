import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Settings = ({ route }) => {

    const [userToken, setUserToken] = route.params.tokenState;
    return (
        <View>
            <Text>This is setting screen</Text>
            <Button onPress={() => setUserToken(false)} title="Log out" />
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({})
