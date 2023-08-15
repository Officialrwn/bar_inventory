import { createContext } from 'react';
import { BoxComponentType } from '../types/BoxComponentType';

export const BoxComponentContext = createContext<BoxComponentType | null>(null);