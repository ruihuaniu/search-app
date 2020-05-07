import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { Formik } from 'formik'

const SignUp = () => {
    return (
        <Formik
            initialValues={{ email: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <Text>This is sign up screen</Text>
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}

        </Formik>

    )
}

export default SignUp

const styles = StyleSheet.create({})
