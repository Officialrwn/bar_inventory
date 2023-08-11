import { createContext } from 'react';
import { PageContextType } from '../types/PageContextType';

export const PageContext = createContext<PageContextType | null>(null);