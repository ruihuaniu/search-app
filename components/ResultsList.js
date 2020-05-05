import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultsList = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text>This is the results list</Text>
            {data.map((item) => {
                return (
                    <View key={item.id}>
                        <Text >{item.title}</Text>
                        {/* <Image style={styles.image} source={require("../assets/images/admin_management.png")} /> */}
                    </View>

                )
            })}

        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
    image: {
        width: 200,
        height: 250,
    }
})
