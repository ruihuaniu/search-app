import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback, ImageBackground } from 'react-native'



const LogIn = ({ route, navigation }) => {

    // console.log("initial params ", route.params);
    const [userToken, setUserToken] = route.params.tokenState;
    // console.log("usertoken", userToken);


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

        <TouchableWithoutFeedback

            onPress={() => {
                Keyboard.dismiss();
                console.log("keyboard dismiss")
            }} >
            {/* <View style={styles.container}> */}
            <ImageBackground style={styles.backgroundImage} source={require("../assets/images/banner.jpg")}>

                <Text>This is login screen </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="your email"
                    onChangeText={text => handleChange(text)}
                    value={emailValue}
                />
                <Text style={{ color: "#C84104" }}>{warnMgs}</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="your password"
                    onChangeText={text => setPwdValue(text)}
                    value={pwdValue}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Text style={styles.button}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ ...styles.button, backgroundColor: '#ddd' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text onPress={() => navigation.navigate('ResetPassword')}>Forget password?</Text>
                </View>

            </ImageBackground>
            {/* </View> */}

        </TouchableWithoutFeedback >

    )

}

export default LogIn

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     // justifyContent: 'center',
    //     // alignItems: "center",
    //     // backgroundColor: 'red'
    // },
    backgroundImage: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        color: '#ddd'
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: 'red',
        alignSelf: 'stretch',
        padding: 6,
        marginHorizontal: 50,
        marginVertical: 10,
        color: "#fff"
        // backgroundColor: '#eee'
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#eee',
        textTransform: 'uppercase',
        margin: 10,
        color: '#318997',
        fontWeight: 'bold'
    }

})
