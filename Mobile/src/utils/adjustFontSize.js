import { PixelRatio } from 'react-native';

import { SCREEN_WIDTH } from './constants';

const scale = SCREEN_WIDTH / 360;

const adjustFontSize = (size) => {
    const newSize = size * scale 
     if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
     } 
     else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
     }
}

export default adjustFontSize;