import { Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export const ios = Platform.OS === 'ios'
export const topMargin = ios ? '' : 'mt-3'
export const movieName = 'fjls;dkfjsd;lkfjs;dlfksjdf;lskadfjdsk'
export const personName = 'Keanu Reevs'
export const characterName = 'John Wick'
