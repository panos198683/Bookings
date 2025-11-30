import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CommonButton } from '@/components/ui/CommonButton';
import { useBookings } from '@/context/useBookings';

export const ErrorModal: React.FC = () => {
  const { error, setError } = useBookings();

  const handleClose = () => {
    setError(null);
  };

  return (
    <Dialog open={!!error} onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-md focus:outline-none'>
        <DialogHeader>
          <DialogTitle>Something went wrong!</DialogTitle>
        </DialogHeader>
        <p className='text-red-600 mt-2' aria-live='assertive'>
          {error}
        </p>
        <div className='mt-4 flex justify-end'>
          <CommonButton
            id='error-close-btn'
            variant='primary'
            onClick={handleClose}
          >
            Close
          </CommonButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};
