import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ResultsList from '../components/ResultsList'

const SearchResults = (props) => {
    return (
        <>
            {/* <Text>This is search results page</Text> */}
            <ResultsList navigationAndRoute={props} />
        </>
    )
}

export default SearchResults

const styles = StyleSheet.create({})
