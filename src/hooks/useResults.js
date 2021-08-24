import { useEffect, useState } from "react"
import yelp from "../api/yelp"

var i = 0
export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  const searchApi = async (searchTerm) => {
    console.log(++i)
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Las Vegas",
        },
      })
      setResults(response.data.businesses)
    } catch (err) {
      console.log(err)
      setErrorMessage("Something went wrong!")
    }
  }

  //   useEffect(() => {
  //     searchApi("rice"), [i]
  //   })

  return [searchApi, results, errorMessage]
}
