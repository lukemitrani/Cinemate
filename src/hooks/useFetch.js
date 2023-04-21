import { useState, useEffect } from "react"

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([])
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

  //We are calling the useFetch according to our API Path, which all are different in AllRoutes.js. In movieDetail.js when we useFetch(apiPath) that is the information/argument that will be put in this parameter. Keep in mind I can write anything here and it doesn't have to say apiPath. Think of it. in MovieDetail.js it says useFetch(apiPath)..That is what will be in that parameter.

  //We only use the &query=${queryTerm}} part at the end when we are using a search api.

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url)
      const json = await response.json()
      setData(json.results)
    }
    fetchMovies()
  }, [url])

  return { data }
}
