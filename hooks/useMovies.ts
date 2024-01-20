import { useEffect, useState } from 'react'
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from '../api/moviedb'

export function useMovies() {
  const [trending, setTrending] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [topRated, setTopRated] = useState([])
  const [loading, setLoading] = useState(false)
  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies()
    if (data && data.results) setTrending(data.results)
    setLoading(false)
  }
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies()
    if (data && data.results) setUpcoming(data.results)
  }
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies()
    if (data && data.results) setTopRated(data.results)
  }
  useEffect(() => {
    getTrendingMovies()
    getUpcomingMovies()
    getTopRatedMovies()
  }, [])

  return { trending, upcoming, topRated, loading }
}
