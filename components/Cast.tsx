import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { characterName, personName } from '../constants'
import { useNavigation } from '@react-navigation/native'

interface CastProps {
  cast: any
}

const Cast: React.FC<CastProps> = ({ cast }) => {
  const navigation: any = useNavigation()
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}>
        {cast &&
          cast.map((person: any, index: number) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Person', person)}
                key={index}
                className="mr-4 items-center">
                <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                  <Image
                    source={require('../assets/images/castImage1.png')}
                    className="rounded-xl h-24 w-20"
                  />
                </View>
                <Text className="text-white text-sx mt-1">
                  {characterName.length > 10
                    ? characterName.slice(0, 10) + '...'
                    : characterName}
                </Text>
                <Text className="text-white text-sx mt-1">
                  {personName.length > 10
                    ? personName.slice(0, 10) + '...'
                    : personName}
                </Text>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    </View>
  )
}

export default Cast
