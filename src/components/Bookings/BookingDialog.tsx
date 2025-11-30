import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useBookings } from '@/context/useBookings';
import { CommonButton } from '@/components/ui/CommonButton';
import { StatusBadge } from './StatusBadge';
import { formatDate } from '../lib/utils';
import { Info } from 'lucide-react';

export const BookingDialog = () => {
  const { selectedBooking, setSelectedBooking } = useBookings();

  if (!selectedBooking) return null;

  const handleClose = () => setSelectedBooking(null);

  return (
    <Dialog
      open={!!selectedBooking}
      onOpenChange={(open) => !open && handleClose()}
      aria-labelledby='booking-dialog-title'
      aria-describedby='booking-dialog-description'
    >
      <DialogContent
        className='sm:max-w-lg focus:outline-none
          data-[state=open]:animate-slide-in
          data-[state=closed]:animate-slide-out'
      >
        <DialogHeader>
          <div className='flex items-center gap-2'>
            <Info className='w-5 h-5 text-blue-600' />
            <DialogTitle className='text-xl font-semibold'>
              Booking Details
            </DialogTitle>
          </div>
          <DialogDescription>
            Information about the selected booking.
          </DialogDescription>
        </DialogHeader>

        {/* CARD-STYLE SECTION */}
        <div className='mt-4 border rounded-lg p-4 bg-muted/30 space-y-4'>
          <div className='grid grid-cols-2 gap-3'>
            <div>
              <p className='text-xs text-muted-foreground uppercase'>ID</p>
              <p className='font-medium'>{selectedBooking.id}</p>
            </div>

            <div>
              <p className='text-xs text-muted-foreground uppercase'>Status</p>
              <StatusBadge status={selectedBooking.status} />
            </div>

            <div className='col-span-2 border-t pt-3' />

            <div>
              <p className='text-xs text-muted-foreground uppercase'>
                Customer
              </p>
              <p className='font-medium'>{selectedBooking.customer}</p>
            </div>

            <div>
              <p className='text-xs text-muted-foreground uppercase'>Vessel</p>
              <p className='font-medium'>{selectedBooking.vessel}</p>
            </div>

            <div className='col-span-2 border-t pt-3' />

            <div>
              <p className='text-xs text-muted-foreground uppercase'>
                Start Date
              </p>
              <p className='font-medium'>
                {formatDate(selectedBooking.startDate)}
              </p>
            </div>

            <div>
              <p className='text-xs text-muted-foreground uppercase'>
                End Date
              </p>
              <p className='font-medium'>
                {formatDate(selectedBooking.endDate)}
              </p>
            </div>
          </div>
        </div>

        <div className='mt-6 flex justify-end'>
          <CommonButton
            variant='secondary'
            onClick={handleClose}
            aria-label='Close booking details dialog'
          >
            Close
          </CommonButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};
