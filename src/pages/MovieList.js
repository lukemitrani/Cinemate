import { useFetch } from "../hooks/useFetch"
import { Card } from "../components"
import { useTitle } from "../hooks/useTitle"

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath)

  //desctructioring api Path from allRoutes.js This is what gets sent to the parameter in useFetch.

  //This will send Title information to the useTitle hook parameter.
  const pageTitle = useTitle(title)

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
