import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { height, verticalMargin, width } from '../constants'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme'
import MovieList from '../components/MovieList'
import Loading from '../components/Loading'

const PersonScreen = () => {
  const navigation = useNavigation()
  const [isFavorite, setIsFavorite] = useState(false)
  const [loading, setLoading] = useState(false)
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4])
  return (
    <ScrollView
      className="flex-1 bg-neutral-900 pt-4"
      contentContainerStyle={{ paddingBottom: 20 }}>
      <SafeAreaView
        className={
          'w-full flex-row justify-between items-center px-4 mx-3' +
          verticalMargin
        }>
        <TouchableOpacity style={styles.background} className="rounded-xl p-1">
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
            color={isFavorite ? 'red' : 'white'}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View
            className="flex-row justify-center"
            style={{
              shadowColor: 'gray',
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            }}>
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border border-neutral-500">
              <Image
                source={require('../assets/images/castImage2.png')}
                style={{ height: height * 0.43, width: width * 0.74 }}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-3xl text-white font-bold text-center">
              Keanu Reaves
            </Text>
            <Text className="text-base text-neutral-500 text-center">
              London, United Kingdom
            </Text>
          </View>
          <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-neutral-300 text-sm">Male</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-300 text-sm">1964/09/02</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Known for</Text>
              <Text className="text-neutral-300 text-sm">Acting</Text>
            </View>
            <View className="px-2 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-300 text-sm">64.23</Text>
            </View>
          </View>
          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              obcaecati nobis odit quidem at, alias harum exercitationem quos
              autem possimus praesentium ipsum voluptatem odio eaque laudantium
              perspiciatis esse nulla itaque!
            </Text>
          </View>
          <MovieList title="Movies" hideSeeAll data={personMovies} />
        </View>
      )}
    </ScrollView>
  )
}

export default PersonScreen
