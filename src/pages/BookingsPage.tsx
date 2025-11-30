import { BookingsFilters } from '@/components/Bookings/BookingsFilters';
import { BookingsList } from '@/components/Bookings/BookingsList';
import { CreateBookingForm } from '@/components/Bookings/CreateBookingForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { ErrorModal } from '@/components/ui/ErrorModal';

const BookingsPage: React.FC = () => {
  return (
    <div className='max-w-6xl mx-auto p-4 sm:p-6 space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <BookingsFilters />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <BookingsList />
        </CardContent>
      </Card>

      <CreateBookingForm />

      <ErrorModal />
    </div>
  );
};

export default BookingsPage;
