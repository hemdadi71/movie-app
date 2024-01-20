import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { fetchPersonDetails, fetchPersonMovies } from '../api/moviedb'

export function usePerson() {
  const { params: item } = useRoute<any>()
  const [loading, setLoading] = useState(false)
  const [personMovies, setPersonMovies] = useState([])
  const [person, setPerson] = useState<any>({})

  const getPersonDetails = async (id: string) => {
    const data = await fetchPersonDetails(id)
    if (data) setPerson(data)
    setLoading(false)
  }
  const getPersonMovies = async (id: string) => {
    const data = await fetchPersonMovies(id)
    if (data && data.cast) setPersonMovies(data.cast)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getPersonDetails(item?.id)
    getPersonMovies(item?.id)
  }, [])

  return { loading, personMovies, person }
}
