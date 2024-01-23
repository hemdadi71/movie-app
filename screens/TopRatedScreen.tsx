import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { PageArray } from '../utils/PageArray'
import { useTopRatedMovies } from '../hooks/useTopRatedMovies'
import { Image } from 'react-native'
import { fallbackMoviePoster, image185 } from '../api/moviedb'
import { height, width } from '../constants'
import clsx from 'clsx'

const TopRatedScreen = () => {
  const navigation: any = useNavigation()
  const {
    loading,
    page: currentPage,
    topRatedMovies,
    setPage,
  } = useTopRatedMovies()
  const pages = PageArray(50)
  const scrollView = useRef<any>(null)
  return (
    <View className="bg-neutral-800 flex-1 pt-5  space-y-4">
      <SafeAreaView className=" flex-row items-center gap-9 px-3">
        <TouchableOpacity style={styles.background} className="rounded-xl p-1">
          <ChevronLeftIcon
            onPress={() => navigation.goBack()}
            size="32"
            strokeWidth={2.5}
            color="white"
          />
        </TouchableOpacity>
        <Text className="text-white text-3xl font-bold">Top Rated Movies</Text>
      </SafeAreaView>
      <Text className="text-white px-4 text-lg">
        Page : <Text className="font-bold">{currentPage}</Text>
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 17 }}
        className="space-y-3">
        <View className="flex-row justify-between flex-wrap">
          {topRatedMovies.map((item: any, index: number) => {
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.push('Movie', item)}>
                <View className="space-y-2 mb-4">
                  <Image
                    className="rounded-3xl"
                    source={{
                      uri: image185(item?.poster_path) || fallbackMoviePoster,
                    }}
                    style={{ width: width * 0.44, height: height * 0.3 }}
                  />
                  <Text className="text-neutral-300 ml-1">
                    {item?.title.length > 22
                      ? item?.title.slice(0, 22) + '...'
                      : item?.title}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )
          })}
        </View>
      </ScrollView>

      <View className="h-14 flex items-center pt-1 px-2">
        <View className="flex-row gap-3">
          <TouchableOpacity>
            <ChevronLeftIcon
              onPress={() => {
                currentPage > 1 && setPage(prev => prev - 1)
                scrollView?.current.scrollTo({
                  x: currentPage * 35 - 180,

                  animated: true,
                })
              }}
              size="32"
              strokeWidth={2.5}
              color="white"
            />
          </TouchableOpacity>
          <ScrollView
            ref={scrollView}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {pages.map((page: number, index: number) => {
              return (
                <TouchableOpacity>
                  <Text
                    onPress={() => setPage(page)}
                    key={index}
                    className={clsx(
                      'rounded-md w-7 h-7 text-center pt-1 mr-2',
                      page === currentPage
                        ? 'bg-red-400 text-white font-bold'
                        : 'bg-neutral-300 text-black'
                    )}>
                    {page}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>

          <TouchableOpacity>
            <ChevronRightIcon
              onPress={() => {
                if (currentPage < 50) {
                  const targetPage = currentPage + 1
                  setPage(targetPage)
                  scrollView?.current.scrollTo({
                    x: currentPage * 35,
                    animated: true,
                  })
                }
              }}
              size="32"
              strokeWidth={2.5}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default TopRatedScreen
