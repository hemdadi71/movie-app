import { useEffect, useState } from 'react'
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovie,
  fetchUpcomingMovies,
} from '../api/moviedb'
import { useRoute } from '@react-navigation/native'

export function useUpcomingMovies() {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [upcomingMovie, setUpcomingMovie] = useState<any>([])
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies({
      includes_adult: 'false',
      language: 'en-US',
      page,
    })
    if (data && data?.results) setUpcomingMovie(data.results)
    setLoading(false)
  }
  useEffect(() => {
    setLoading(true)
    getUpcomingMovies()
  }, [page])

  return { loading, page, setPage, upcomingMovie }
}
