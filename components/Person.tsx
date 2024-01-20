import { View, Text, Image } from 'react-native'
import React from 'react'
import { height, width } from '../constants'
import { fallbackPersonImage, image342 } from '../api/moviedb'
import MovieList from './MovieList'

const Person = ({ person, personMovies }: any) => {
  return (
    <View>
      <View
        className="flex-row justify-center"
        style={{
          shadowColor: 'gray',
          shadowRadius: 40,
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 1,
        }}>
        <View className="flex items-center rounded-full overflow-hidden h-72 w-72 border border-neutral-500">
          <Image
            source={{
              uri: image342(person?.profile_path) || fallbackPersonImage,
            }}
            style={{ height: height * 0.43, width: width * 0.74 }}
          />
        </View>
      </View>
      <View className="mt-6">
        <Text className="text-3xl text-white font-bold text-center">
          {person?.name}
        </Text>
        <Text className="text-base text-neutral-500 text-center">
          {person?.place_of_birth}
        </Text>
      </View>
      <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
          <Text className="text-white font-semibold">Gender</Text>
          <Text className="text-neutral-300 text-sm">
            {person?.gender === 2 ? 'Male' : 'Female'}
          </Text>
        </View>
        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
          <Text className="text-white font-semibold">Birthday</Text>
          <Text className="text-neutral-300 text-sm">
            {person?.birthday?.split('-').join(' / ')}
          </Text>
        </View>
        <View className="border-r-2 border-r-neutral-400 px-2 items-center">
          <Text className="text-white font-semibold">Known for</Text>
          <Text className="text-neutral-300 text-sm">
            {person?.known_for_department}
          </Text>
        </View>
        <View className="px-2 items-center">
          <Text className="text-white font-semibold">Popularity</Text>
          <Text className="text-neutral-300 text-sm">
            {person?.popularity?.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View className="my-6 mx-4 space-y-2">
        <Text className="text-white text-lg">Biography</Text>
        <Text className="text-neutral-400 tracking-wide">
          {person?.biography || 'N/A'}
        </Text>
      </View>
      <MovieList title="Movies" hideSeeAll data={personMovies} />
    </View>
  )
}

export default Person
