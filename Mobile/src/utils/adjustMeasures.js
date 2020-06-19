import Constants from 'expo-constants';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from './constants';

export const adjustHorizontalMeasure = (measure) => measure/375 * SCREEN_WIDTH;

export const adjustVerticalMeasure = (measure) => measure/812 * (SCREEN_HEIGHT - Constants.statusBarHeight);