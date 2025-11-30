import React from 'react';
import { BookingFormData } from 'src/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

interface BookingFormFieldsProps {
  form: BookingFormData;
  onChange: (field: keyof BookingFormData, value: string) => void;
  errors?: Partial<Record<keyof BookingFormData, string>>;
}

export const BookingFormFields: React.FC<BookingFormFieldsProps> = ({
  form,
  onChange,
  errors = {},
}) => {
  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='w-full'>
          <Label htmlFor='customer'>Customer</Label>
          <Input
            id='customer'
            value={form.customer}
            onChange={(e) => onChange('customer', e.target.value)}
            placeholder='Enter customer name'
            aria-invalid={!!errors.customer}
          />
          {errors.customer && (
            <p className='text-sm text-red-600 mt-1'>{errors.customer}</p>
          )}
        </div>

        <div className='w-full'>
          <Label htmlFor='vessel'>Vessel</Label>
          <Input
            id='vessel'
            value={form.vessel}
            onChange={(e) => onChange('vessel', e.target.value)}
            placeholder='Enter vessel name'
          />
          {errors.vessel && (
            <p className='text-sm text-red-600 mt-1'>{errors.vessel}</p>
          )}
        </div>

        <div className='w-full'>
          <Label htmlFor='status'>Status</Label>

          <Select
            value={form.status}
            onValueChange={(value) => onChange('status', value)}
          >
            <SelectTrigger id='status'>{form.status}</SelectTrigger>
            <SelectContent>
              <SelectItem value='confirmed'>Confirmed</SelectItem>
              <SelectItem value='pending'>Pending</SelectItem>
              <SelectItem value='cancelled'>Cancelled</SelectItem>
            </SelectContent>
          </Select>

          {errors.status && (
            <p className='text-sm text-red-600 mt-1'>{errors.status}</p>
          )}
        </div>

        <div className='w-full'>
          <Label htmlFor='start-date'>Start Date</Label>
          <Input
            id='start-date'
            type='date'
            value={form.startDate}
            onChange={(e) => onChange('startDate', e.target.value)}
          />
          {errors.startDate && (
            <p className='text-sm text-red-600 mt-1'>{errors.startDate}</p>
          )}
        </div>

        <div className='w-full'>
          <Label htmlFor='end-date'>End Date</Label>
          <Input
            id='end-date'
            type='date'
            value={form.endDate}
            onChange={(e) => onChange('endDate', e.target.value)}
          />
          {errors.endDate && (
            <p className='text-sm text-red-600 mt-1'>{errors.endDate}</p>
          )}
        </div>
      </div>
    </div>
  );
};
