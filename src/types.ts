export type Booking = {
  id: string;
  customer: string;
  vessel: string;
  status: StatusOption;
  startDate: string;
  endDate: string;
};

export type Filters = {
  customer: string;
  status: string;
  startDate: string;
  endDate: string;
};

export type BookingsContextType = {
  bookings: Booking[];
  loading: boolean;
  error: string | null;
  filters: Filters;
  selectedBooking: Booking | null;
  setError: (error: string | null) => void;
  setBookings: (bookings: Booking[]) => void;
  setFilters: (filters: Partial<Filters>) => void;

  setSelectedBooking: (booking: Booking | null) => void;
};

export type BookingFormData = {
  customer: string;
  vessel: string;
  status: StatusOption;
  startDate: string;
  endDate: string;
};

export interface BookingFormFieldsProps {
  form: BookingFormData;
  onChange: <K extends keyof BookingFormData>(
    field: K,
    value: BookingFormData[K]
  ) => void;
}

export type StatusOption = 'confirmed' | 'pending' | 'cancelled';
