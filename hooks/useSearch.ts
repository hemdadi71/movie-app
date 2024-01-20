import { useCallback, useState } from 'react'
import { searchMovies } from '../api/moviedb'
import { debounce } from 'lodash'

export function useSearch() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const handleSearch = (value: string) => {
    if (value && value.length > 2) {
      setLoading(true)
      searchMovies({
        query: value,
        includes_adult: 'false',
        language: 'en-US',
        page: '1',
      }).then(data => {
        setLoading(false)
        if (data && data.results) setResults(data.results)
      })
    } else {
      setLoading(false)
      setResults([])
    }
  }
  const handleTextDebounce = useCallback(debounce(handleSearch, 400), [])

  return { handleTextDebounce, results, loading }
}
