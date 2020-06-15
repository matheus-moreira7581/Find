import { Dimensions, PixelRatio } from 'react-native'

export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

const scale = SCREEN_WIDTH / 360;

export function actuatedNormalize(size) {
    const newSize = size * scale 
     if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
     } 
     else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
     }
}