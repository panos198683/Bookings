import React from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useBookings } from '@/context/useBookings';
import { handleStatusValue } from '../lib/utils';
import { DatePicker } from '../ui/DatePicker';
import { CommonButton } from '../ui/CommonButton';

export const BookingsFilters: React.FC = () => {
  const { filters, setFilters } = useBookings();

  const handleInputChange = (field: keyof typeof filters, value: string) => {
    setFilters({ [field]: value });
  };
  const clearDateFilters = () => {
    setFilters({
      startDate: '',
      endDate: '',
    });
  };
  const isAnyFilterSet = filters.startDate || filters.endDate;
  return (
    <div className='flex flex-col gap-4 w-full md:flex-row md:items-end md:gap-4'>
      {/* Search */}
      <div className='flex-1 md:max-w-md'>
        <Input
          placeholder='Search by customer'
          value={filters.customer}
          onChange={(e) => handleInputChange('customer', e.target.value)}
          aria-label='Search by customer'
          className='w-full min-w-[150px]'
        />
      </div>

      {/* Status */}
      <div className='w-full md:w-52'>
        <Select
          value={filters.status || 'all'}
          onValueChange={(value) =>
            handleInputChange('status', handleStatusValue(value))
          }
        >
          <SelectTrigger
            className='w-full'
            aria-label='Filter bookings by status'
          >
            <SelectValue placeholder='Status' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All</SelectItem>
            <SelectItem value='confirmed'>Confirmed</SelectItem>
            <SelectItem value='pending'>Pending</SelectItem>
            <SelectItem value='cancelled'>Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='flex-1 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-[1fr_1fr_auto] md:max-w-lg items-end'>
        <DatePicker
          label='Start Date'
          value={filters.startDate}
          onChange={(v) => handleInputChange('startDate', v)}
        />
        <DatePicker
          label='End Date'
          value={filters.endDate}
          onChange={(v) => handleInputChange('endDate', v)}
        />
        {isAnyFilterSet && (
          <CommonButton
            variant='secondary'
            onClick={clearDateFilters}
            className='mt-6 md:mt-0 h-[36px] min-w-[120px]'
          >
            Clear Dates
          </CommonButton>
        )}
      </div>
    </div>
  );
};
