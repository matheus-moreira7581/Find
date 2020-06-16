import Constants from 'expo-constants';
import { SCREEN_WIDTH, SCREEN_HEIHT } from './constants';

export const adjustHorizontalMeasure = (value) => value/375 * SCREEN_WIDTH;

export const adjustVerticalMeasure = (value) => value/812 * (SCREEN_HEIGHT - Constants.statusBarHeight);