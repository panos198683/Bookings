import React, { useState, useEffect, useMemo } from 'react';
import { BookingsContext } from './BookingsContext';
import { Booking, Filters } from '../types';
import { fetchBookings } from '@/app/api/bookings';

export const BookingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    customer: '',
    status: '',
    startDate: '',
    endDate: '',
  });
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    const loadBookings = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBookings();
        setBookings(data);
      } catch {
        setError('Failed to load bookings');
      } finally {
        setLoading(false);
      }
    };

    loadBookings();
  }, []);

  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchCustomer = b.customer
        .toLowerCase()
        .includes(filters.customer.toLowerCase());
      const matchStatus = filters.status ? b.status === filters.status : true;
      const matchStart = filters.startDate
        ? b.startDate >= filters.startDate
        : true;
      const matchEnd = filters.endDate ? b.endDate <= filters.endDate : true;
      return matchCustomer && matchStatus && matchStart && matchEnd;
    });
  }, [bookings, filters]);
  const updateFilters = (patch: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...patch }));
  };
  return (
    <BookingsContext.Provider
      value={{
        bookings: filteredBookings,
        setBookings,
        loading,
        error,
        setError,
        filters,
        selectedBooking,
        setFilters: updateFilters,
        setSelectedBooking,
      }}
    >
      {children}
    </BookingsContext.Provider>
  );
};
