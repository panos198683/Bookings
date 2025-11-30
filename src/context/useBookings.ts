import { useContext } from 'react';
import { BookingsContext } from './BookingsContext';

export const useBookings = () => {
  const context = useContext(BookingsContext);
  if (!context) {
    throw new Error('useBookings must be used within a BookingsProvider');
  }
  return context;
};
