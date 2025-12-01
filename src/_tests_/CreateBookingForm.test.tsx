// src/_tests_/CreateBookingForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CreateBookingForm } from '@/components/Bookings/CreateBookingForm';
import { BookingsProvider } from '@/context/BookingsProvider';

describe('CreateBookingForm', () => {
  it('opens the modal when clicking "Create Booking"', () => {
    render(
      <BookingsProvider>
        <CreateBookingForm />
      </BookingsProvider>
    );

    const openButton = screen.getByRole('button', {
      name: /open form to create a new booking/i,
    });
    fireEvent.click(openButton);

    expect(screen.getByText(/Create New Booking/i)).toBeInTheDocument();
  });

  it('shows validation errors if fields are empty', async () => {
    render(
      <BookingsProvider>
        <CreateBookingForm />
      </BookingsProvider>
    );

    fireEvent.click(
      screen.getByRole('button', { name: /open form to create a new booking/i })
    );

    fireEvent.click(screen.getByRole('button', { name: /create/i }));

    await waitFor(() => {
      expect(screen.getByText(/Customer is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Vessel is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Start Date is required/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Start date cannot be after end date/i)
      ).toBeInTheDocument();
    });
  });
});
