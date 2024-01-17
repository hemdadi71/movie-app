import { View, Text, Dimensions } from 'react-native'
import React from 'react'

import MovieCard from './MovieCard'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'

interface TrendingMoviesProps {
  data: any
}
const { width, height } = Dimensions.get('window')
const TrendingMovies: React.FC<TrendingMoviesProps> = ({ data }) => {
  const navigation: any = useNavigation()
  const handlePress = (item: any) => {
    navigation.navigate('Movie', item)
  }
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handlePress={() => handlePress(item)} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={600}
        itemWidth={width * 0.6}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  )
}

export default TrendingMovies
