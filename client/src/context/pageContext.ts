import { createContext } from 'react';
import { StringKeyObject } from '../types/types';

export const PageContext = createContext<StringKeyObject<string> | null>(null);