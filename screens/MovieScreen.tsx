import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme'
import { height, movieName, topMargin, width } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/Cast'
import MovieList from '../components/MovieList'

const MovieScreen = () => {
  const { params: item } = useRoute()
  const navigation = useNavigation()
  const [isFavorite, setIsFavorite] = useState(false)
  const [cast, setCast] = useState([1, 2, 3, 4, 5])
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])
  useEffect(() => {}, [item])
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900">
      <View className="w-full mt-2">
        <SafeAreaView
          className={
            'absolute z-20 w-full flex-row justify-between items-center px-4 mx-3' +
            topMargin
          }>
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl p-1">
            <ChevronLeftIcon
              onPress={() => navigation.goBack()}
              size="32"
              strokeWidth={2.5}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <HeartIcon
              onPress={() => setIsFavorite(!isFavorite)}
              size="35"
              color={isFavorite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require('../assets/images/moviePoster2.png')}
            style={{ width: width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.9)', 'rgba(23,23,23,1)']}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider px-7">
          {movieName}
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Released . 2020 . 170 min
        </Text>
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Action .
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Thrill .
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy .
          </Text>
        </View>
        <Text className="text-neutral-400 mx-4 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          excepturi corrupti rem nobis fugit accusantium veniam quis nisi, vero
          consequuntur praesentium. Fugit expedita quibusdam temporibus enim
          doloremque saepe consequatur quia.
        </Text>
      </View>
      <Cast cast={cast} />
      <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />
    </ScrollView>
  )
}

export default MovieScreen
