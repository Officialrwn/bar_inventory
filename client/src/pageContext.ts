import { createContext } from 'react';

export type PageContextType = {
	setPage: (title: string) => void;
}
export const PageContext = createContext<PageContextType | null>(null);
