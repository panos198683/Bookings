import { Booking } from 'src/types';
import sampleBookings from '@/data/bookings';

export const fetchBookings = (): Promise<Booking[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 20% chance to fail
      if (Math.random() < 0.2) {
        reject(new Error('Failed to fetch bookings'));
      } else {
        resolve(sampleBookings);
      }
    }, 2000);
  });
};
