import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme'
import { height, topMargin, width } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/Cast'
import MovieList from '../components/MovieList'
import Loading from '../components/Loading'
import { fallbackMoviePoster, image500 } from '../api/moviedb'
import { useMovie } from '../hooks/useMovie'

const MovieScreen = () => {
  const navigation = useNavigation()
  const [isFavorite, setIsFavorite] = useState(false)
  const { loading, cast, movie, similarMovies } = useMovie()
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
        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              source={{
                uri: image500(movie?.poster_path) || fallbackMoviePoster,
              }}
              style={{ width: width, height: height * 0.8 }}
            />
            <LinearGradient
              className="absolute bottom-0"
              colors={['transparent', 'rgba(23,23,23,0.9)', 'rgba(23,23,23,1)']}
              style={{ width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            />
          </View>
        )}
      </View>
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider px-7">
          {movie?.title}
        </Text>
        {movie?.id ? (
          <Text className="text-neutral-400 font-semibold text-base text-center">
            {movie?.status} . {movie?.release_date?.split('-')[0]} .
            {movie?.runtime} min
          </Text>
        ) : null}

        <View className="flex-row justify-center mx-5 space-x-2">
          {movie?.genres?.map((genre: { name: string }, index: number) => {
            const showDot = index + 1 !== movie.genres.length
            return (
              <Text
                key={index}
                className="text-neutral-400 font-semibold text-base text-center">
                {genre?.name} {showDot && '.'}
              </Text>
            )
          })}
        </View>
        <Text className="text-neutral-400 mx-4 tracking-wide">
          {movie?.overview}
        </Text>
      </View>
      {cast.length > 0 && <Cast cast={cast} />}
      {similarMovies.length > 0 && (
        <MovieList
          title="Similar Movies"
          hideSeeAll={true}
          data={similarMovies}
        />
      )}
    </ScrollView>
  )
}

export default MovieScreen
