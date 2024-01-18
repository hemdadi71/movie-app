import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from 'react-native'
import React from 'react'
import { height, width } from '../constants'
import { fallbackPersonImage, image500 } from '../api/moviedb'

const MovieCard = ({ item, handlePress }: any) => {
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image
        source={{ uri: image500(item.poster_path) || fallbackPersonImage }}
        style={{ width: width * 0.6, height: height * 0.4 }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  )
}

export default MovieCard
