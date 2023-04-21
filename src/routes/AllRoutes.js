import { Routes, Route } from "react-router-dom"
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages/index"

import React from "react"

//I am sending the apiPath to whichever component I want to use fetch that path. That componenet will use this as a prop to fetch the api.

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        />

        <Route path="movie/:id" element={<MovieDetail />} />
        <Route //This one is important with the card Link. When we click a card link it will get the movies ID and take you to the movie detail page. We also do not use apiPath for this one. API path comes from moviedb website. It is a snippet from the api.
          path="movies/popular"
          element={<MovieList apiPath="movie/popular" title="popular" />}
        />
        <Route
          path="movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />

        <Route path="*" element={<PageNotFound title="Page Not Found" />} />
      </Routes>
    </div>
  )
}
