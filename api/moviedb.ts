import axios from 'axios'

const movieApiKey = 'c5792510b6532f375819942e4a80e138'

const apiBaseUrl = 'https://api.themoviedb.org/3'

const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${movieApiKey}`
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${movieApiKey}`
const topRatedMovieEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${movieApiKey}`

const movieDetailsEndpoint = (id: string) =>
  `${apiBaseUrl}/movie/${id}?api_key=${movieApiKey}`
const movieCreditsEndpoint = (id: string) =>
  `${apiBaseUrl}/movie/${id}/credits?api_key=${movieApiKey}`
const similarMovieEndpoint = (id: string) =>
  `${apiBaseUrl}/movie/${id}/similar?api_key=${movieApiKey}`

const personDetailsEndpoint = (id: string) =>
  `${apiBaseUrl}/person/${id}?api_key=${movieApiKey}`
const personMoviesEndpoint = (id: string) =>
  `${apiBaseUrl}/person/${id}/movie_credits?api_key=${movieApiKey}`

const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${movieApiKey}`

export const fallbackMoviePoster =
  'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg'
export const fallbackPersonImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU'

export const image500 = (path: string): any =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null
export const image342 = (path: string): any =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : null
export const image185 = (path: string): any =>
  path ? `https://image.tmdb.org/t/p/w185${path}` : null

const apiCall = async (endpoint: string, params: string = '') => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params || {},
  }
  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    console.log('error', error)
    return {}
  }
}

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint)
}
export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint)
}
export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMovieEndpoint)
}

export const fetchMovieDetails = (id: string) => {
  return apiCall(movieDetailsEndpoint(id))
}
export const fetchMovieCredits = (id: string) => {
  return apiCall(movieCreditsEndpoint(id))
}
export const fetchSimilarMovie = (id: string) => {
  return apiCall(similarMovieEndpoint(id))
}

export const fetchPersonDetails = (id: string) => {
  return apiCall(personDetailsEndpoint(id))
}
export const fetchPersonMovies = (id: string) => {
  return apiCall(personMoviesEndpoint(id))
}


export const searchMovies = (params: any) => {
  return apiCall(searchMoviesEndpoint, params)
}
