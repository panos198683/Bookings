import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CommonButton } from '@/components/ui/CommonButton';
import { useBookings } from '@/context/useBookings';
import { Booking, BookingFormData } from 'src/types';
import { BookingFormFields } from './BookingFormFields';
import { bookingSchema, generateBookingId } from '../lib/utils';

export const CreateBookingForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { bookings, setBookings, setError } = useBookings();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<BookingFormData>({
    customer: '',
    vessel: '',
    status: 'confirmed',
    startDate: '',
    endDate: '',
  });

  // Field-level errors
  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingFormData, string>>
  >({});

  const handleChange = (field: keyof BookingFormData, value: string) => {
    setForm({ ...form, [field]: value });
    // Clear field error on change
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form with Zod
    const result = bookingSchema.safeParse(form);
    if (!result.success) {
      // Map Zod errors to field-level errors
      const fieldErrors: Partial<Record<keyof BookingFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof BookingFormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      setSaving(true);
      // Simulate async API save
      await new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000); // fake 1s delay
      });

      const newBooking: Booking = {
        id: generateBookingId(bookings.length),
        ...form,
      };
      setBookings([newBooking, ...bookings]);

      // Reset form
      setForm({
        customer: '',
        vessel: '',
        status: 'confirmed',
        startDate: '',
        endDate: '',
      });
      setErrors({});
      setOpen(false);
    } catch (err: unknown) {
      // Unexpected errors go to global error modal
      if (err instanceof Error) setError(err.message);
      else setError('Failed to create booking');
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <CommonButton
        variant='primary'
        onClick={() => setOpen(true)}
        aria-label='Open form to create a new booking'
      >
        Create Booking
      </CommonButton>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className='sm:max-w-lg mt-4 focus:outline-none
            data-[state=open]:animate-slide-in
            data-[state=closed]:animate-slide-out'
        >
          <DialogHeader>
            <DialogTitle>Create New Booking</DialogTitle>
          </DialogHeader>

          <form
            className='space-y-3 mt-4 animate-fade-in'
            onSubmit={handleSubmit}
          >
            <BookingFormFields
              form={form}
              onChange={handleChange}
              errors={errors}
            />

            <div className='flex justify-end gap-2 mt-2'>
              <CommonButton
                type='button'
                variant='secondary'
                onClick={() => setOpen(false)}
              >
                Cancel
              </CommonButton>
              <CommonButton type='submit' variant='primary' disabled={saving}>
                Create
              </CommonButton>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
