import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ResultsList from '../components/ResultsList'
import { DataContext } from '../components/DataContext'
import SearchFeatures from '../components/SearchFeatures'

const SearchResults = (props) => {
    const { isSearch, setIsSearch } = useContext(DataContext)


    if (isSearch) {    //check if the search button is clicked, and decide to show results or keywords features
        return <ResultsList navigationAndRoute={props} />

    } else {
        return <SearchFeatures />
    }

}

export default SearchResults

const styles = StyleSheet.create({})
