import { fetchData } from "@/_utils/fetchData"
import MovieList from "@/components/movies/MovieList"
const MoviesPage = async () => {
  const genresData = await fetchData(`/genre/movie/list`)

  return (
    <>
      <MovieList genresData={genresData} />
    </>
  )
}

export default MoviesPage
