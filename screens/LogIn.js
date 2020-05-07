import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'


const LogIn = ({ route, navigation }) => {

    console.log("initial params ", route.params);
    const [userToken, setUserToken] = route.params.tokenState;
    console.log("usertoken", userToken);


    const [emailValue, setEmailValue] = useState("")
    const [pwdValue, setPwdValue] = useState("")
    const [warnMgs, setWarnMgs] = useState("")

    const handleChange = (text) => {
        setEmailValue(text);
        setWarnMgs('');

    }

    const handleSubmit = () => {
        if (!emailValue.includes('@')) {
            setWarnMgs('Error, invalid email address')
        } else {
            setWarnMgs('');
            if (emailValue && pwdValue) {
                console.log("login success");
                setEmailValue('')
                setPwdValue('')
                setUserToken(true)

            } else {
                console.log("login fails");

            }
        }

    }

    return (
        <View style={styles.container}>
            <Text>This is login screen </Text>
            <TextInput
                placeholder="your email"
                onChangeText={text => handleChange(text)}
                value={emailValue}
            />
            <Text>{warnMgs}</Text>
            <TextInput
                placeholder="your password"
                onChangeText={text => setPwdValue(text)}
                value={pwdValue}
            />
            <TouchableOpacity onPress={handleSubmit}>
                <Text>Log In</Text>
            </TouchableOpacity>
            <View>
                <Text onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
            </View>
            <View>
                <Text onPress={() => navigation.navigate('ResetPassword')}>Forget password?</Text>
            </View>
        </View>
    )
}

export default LogIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
})
