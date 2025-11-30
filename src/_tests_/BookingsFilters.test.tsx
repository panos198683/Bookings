// src/_tests_/BookingsFilters.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { BookingsFilters } from '@/components/Bookings/BookingsFilters';
import { BookingsProvider } from '@/context/BookingsProvider';

describe('BookingsFilters', () => {
  it('renders all input fields', () => {
    render(
      <BookingsProvider>
        <BookingsFilters />
      </BookingsProvider>
    );

    expect(
      screen.getByPlaceholderText(/Search by customer/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/End Date/i)).toBeInTheDocument();
  });

  it('updates filter values when typing or selecting', () => {
    render(
      <BookingsProvider>
        <BookingsFilters />
      </BookingsProvider>
    );

    const customerInput = screen.getByPlaceholderText(/Search by customer/i);
    fireEvent.change(customerInput, { target: { value: 'Acme' } });
    expect(customerInput).toHaveValue('Acme');

    const startDateInput = screen.getByLabelText(/Start Date/i);
    fireEvent.change(startDateInput, { target: { value: '2026-01-01' } });
    expect(startDateInput).toHaveValue('2026-01-01');

    const endDateInput = screen.getByLabelText(/End Date/i);
    fireEvent.change(endDateInput, { target: { value: '2026-01-31' } });
    expect(endDateInput).toHaveValue('2026-01-31');
  });
});
