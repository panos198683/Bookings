import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { formatDate } from '../lib/utils';

interface DatePickerProps {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  placeholder = 'Select date',
  className = '',
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      onChange(date.toISOString().split('T')[0]); // YYYY-MM-DD
      setOpen(false);
    }
  };

  return (
    <div className={`flex flex-col w-full relative ${className}`}>
      <label className='text-sm font-medium mb-1'>{label}</label>

      <button
        type='button'
        className='flex items-center justify-between leading-none
 w-full h-[36px] truncate border border-gray-300 rounded px-3 py-2 bg-white text-left text-sm focus:outline-none focus:ring-1 focus:ring-blue-500'
        onClick={() => setOpen(!open)}
      >
        {value ? formatDate(value) : placeholder}

        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5 text-gray-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
        </svg>
      </button>

      {open && (
        <div className='absolute z-50 mt-2 bg-white border border-gray-200 rounded shadow-lg p-2'>
          <DayPicker
            mode='single'
            selected={value ? new Date(value) : undefined}
            onSelect={handleSelect}
          />
        </div>
      )}
    </div>
  );
};
