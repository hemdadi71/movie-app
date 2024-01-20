import { useEffect, useState } from 'react'
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovie,
} from '../api/moviedb'
import { useRoute } from '@react-navigation/native'

export function useMovie() {
  const { params: item } = useRoute<any>()
  const [loading, setLoading] = useState(false)
  const [cast, setCast] = useState([1, 2, 3, 4, 5])
  const [movie, setMovie] = useState<any>([])
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])
  const getMovieDetails = async (id: any) => {
    const data = await fetchMovieDetails(id)
    if (data) setMovie(data)
    setLoading(false)
  }
  const getMovieCredites = async (id: any) => {
    const data = await fetchMovieCredits(id)
    if (data && data.cast) setCast(data.cast)
    setLoading(false)
  }
  const getSimilarMovies = async (id: any) => {
    const data = await fetchSimilarMovie(id)
    if (data) setSimilarMovies(data?.results)
    setLoading(false)
  }
  useEffect(() => {
    setLoading(true)
    getMovieDetails(item?.id)
    getMovieCredites(item?.id)
    getSimilarMovies(item?.id)
  }, [item])

  return { loading, cast, movie, similarMovies }
}
