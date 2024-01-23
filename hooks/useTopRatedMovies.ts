import { useEffect, useState } from 'react'
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovie,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from '../api/moviedb'
import { useRoute } from '@react-navigation/native'

export function useTopRatedMovies() {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [topRatedMovies, setTopRatedMovies] = useState<any>([])
  const getUpcomingMovies = async () => {
    const data = await fetchTopRatedMovies({
      includes_adult: 'false',
      language: 'en-US',
      page,
    })
    if (data && data?.results) setTopRatedMovies(data.results)
    setLoading(false)
  }
  useEffect(() => {
    setLoading(true)
    getUpcomingMovies()
  }, [page])

  return { loading, page, setPage, topRatedMovies }
}
