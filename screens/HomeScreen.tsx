import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import clsx from 'clsx'
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline'
import { styles } from '../theme'
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList'
import { ios } from '../constants'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/Loading'
import { useMovies } from '../hooks/useMovies'

const HomeScreen = () => {
  const navigation: any = useNavigation()
  const { loading, trending, topRated, upcoming } = useMovies()

  return (
    <View className="flex-1 bg-neutral-800 pt-4">
      <SafeAreaView className={clsx(ios ? 'mb-2' : 'mb-3')}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          {/* <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" /> */}
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}>
          {trending?.length > 0 && <TrendingMovies data={trending} />}

          <MovieList hideSeeAll={false} title="Upcoming" data={upcoming} />
          <MovieList hideSeeAll={false} title="Top Rated" data={topRated} />
        </ScrollView>
      )}
    </View>
  )
}

export default HomeScreen
