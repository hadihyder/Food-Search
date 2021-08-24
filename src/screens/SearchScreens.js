import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import SearchBar from "../components/SearchBar"
import yelp from "../api/yelp"
import useResults from "../hooks/useResults"
import ResultsList from "../components/ResultsList"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage] = useResults()

  const filterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results.</Text> */}
      <ScrollView>
        <ResultsList results={filterByPrice("$")} title="Cost Effective" />
        <ResultsList results={filterByPrice("$$")} title="Bit Pricier" />
        <ResultsList results={filterByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </View>
  )
}

export default SearchScreen
