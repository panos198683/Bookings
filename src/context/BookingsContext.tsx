import { createContext } from 'react';
import { BookingsContextType } from '../types';

export const BookingsContext = createContext<BookingsContextType | undefined>(
  undefined
);
