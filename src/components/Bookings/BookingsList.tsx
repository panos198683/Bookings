import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useBookings } from '@/context/useBookings';
import { BookingDialog } from './BookingDialog';
import { Booking } from 'src/types';
import {
  cn,
  formatDate,
  formatDateForList,
  getAvatarColor,
  getInitials,
  getStatusClasses,
} from '@/components/lib/utils';
import { StatusIcon } from './StatusIcon';

export const BookingsList: React.FC = () => {
  const { bookings, loading, error, setSelectedBooking, selectedBooking } =
    useBookings();

  if (loading) {
    return (
      <div className='space-y-2'>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className='p-4 border rounded animate-pulse'>
            <Skeleton className='h-4 w-3/4 mb-2' />
            <Skeleton className='h-3 w-1/2' />
          </div>
        ))}
      </div>
    );
  }

  if (error) return <p className='text-red-600'>{error}</p>;
  if (bookings.length === 0)
    return <p className='text-gray-600'>No bookings found.</p>;

  return (
    <div className='space-y-2'>
      {bookings.map((booking: Booking) => {
        const isSelected = selectedBooking?.id === booking.id;

        return (
          <div
            key={booking.id}
            role='button'
            tabIndex={0}
            onClick={() => setSelectedBooking(booking)}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedBooking(booking)}
            aria-label={`Booking for ${booking.customer} on vessel ${
              booking.vessel
            }, status ${booking.status}, from ${formatDate(
              booking.startDate
            )} to ${formatDate(booking.endDate)}`}
            className={cn(
              `p-4 border rounded cursor-pointer transition-all duration-200 
       transform focus:outline-none focus:ring-2 focus:ring-offset-1 
       focus:ring-blue-500 
       flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3
       h-24`, // FIXED HEIGHT
              isSelected
                ? 'bg-blue-50 border-blue-300 shadow-lg scale-105'
                : 'hover:bg-gradient-to-r hover:from-white hover:to-gray-50 hover:scale-105 border-gray-200'
            )}
          >
            {/* Row 1 on mobile: avatar + name */}
            <div className='flex items-center gap-4 w-full sm:w-auto'>
              {/* Avatar */}
              <div
                className={`min-w-[40px] h-10 rounded-full flex items-center justify-center 
        text-sm font-medium text-white ${getAvatarColor(booking.customer)}`}
              >
                {getInitials(booking.customer)}
              </div>

              {/* Info */}
              <div className='flex-1 sm:flex-none'>
                <p className='font-medium truncate max-w-[150px]'>
                  {booking.customer}
                </p>
                <p className='text-sm text-gray-500 truncate max-w-[150px]'>
                  {booking.vessel}
                </p>
              </div>
            </div>

            {/* Row 2 on mobile: dates + status */}
            <div className='flex items-center justify-between w-full sm:w-auto sm:ml-auto gap-2'>
              {/* Dates */}
              <div className='text-sm text-gray-500 text-right hidden sm:flex flex-col'>
                <p>{formatDateForList(booking.startDate)}</p>
                <p>{formatDateForList(booking.endDate)}</p>
              </div>

              {/* Status */}
              <div className='flex-1 sm:flex-none flex justify-end'>
                <div
                  className={cn(
                    'px-0 py-0 sm:px-2 sm:py-1 rounded-full text-xs font-semibold flex items-center gap-1',
                    getStatusClasses(booking.status)
                  )}
                >
                  <StatusIcon status={booking.status} />
                  <span className='hidden sm:inline'>{booking.status}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <BookingDialog />
    </div>
  );
};
