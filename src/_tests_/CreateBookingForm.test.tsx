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

  it('submits form with valid data and closes modal', async () => {
    render(
      <BookingsProvider>
        <CreateBookingForm />
      </BookingsProvider>
    );

    fireEvent.click(
      screen.getByRole('button', { name: /open form to create a new booking/i })
    );

    fireEvent.change(screen.getByPlaceholderText(/Enter customer name/i), {
      target: { value: 'Acme Corp' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter vessel name/i), {
      target: { value: 'Nordic Star' },
    });
    fireEvent.change(screen.getByLabelText(/Start Date/i), {
      target: { value: '2026-01-10' },
    });
    fireEvent.change(screen.getByLabelText(/End Date/i), {
      target: { value: '2026-01-22' },
    });

    fireEvent.click(screen.getByRole('button', { name: /create/i }));

    // Wait for the form to submit and modal to close
    await waitFor(() => {
      expect(screen.queryByText(/Create New Booking/i)).not.toBeInTheDocument();
    });
  });
});
