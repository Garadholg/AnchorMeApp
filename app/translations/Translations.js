import React, { useState, createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import en from './locales/en.json';
import hr from './locales/hr.json';

const DEFAULT_LANGUAGE = 'en';
const APP_LANGUAGE = 'appLanguage';