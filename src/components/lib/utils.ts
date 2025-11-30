import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// Utils.ts
export const getStatusClasses = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return '';
  }
};

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

export function formatDateForList(dateString: string | Date) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';

  return date.toLocaleDateString('en-GB');
}

export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase();
};

export const handleStatusValue = (value: string) =>
  value === 'all' ? '' : value;

export const dateInputLabelClass =
  'text-xs font-medium text-gray-600 mb-1 px-1';

export const generateBookingId = (length: number) => `BK-${length + 1001}`;

export const STATUS_OPTIONS = ['confirmed', 'pending', 'cancelled'] as const;

export const bookingSchema = z
  .object({
    customer: z.string().min(1, 'Customer is required'),
    vessel: z.string().min(1, 'Vessel is required'),
    status: z.enum(STATUS_OPTIONS, { message: 'Status is required' }),
    startDate: z.string().min(1, 'Start date is required'),
    endDate: z.string().min(1, 'End date is required'),
  })
  .refine((data) => new Date(data.startDate) <= new Date(data.endDate), {
    message: 'Start date cannot be after end date',
    path: ['endDate'],
  });

export const avatarColors = [
  'bg-red-500',
  'bg-purple-500',
  'bg-yellow-500',
  'bg-blue-500',
];

export function getAvatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % avatarColors.length;
  return avatarColors[index];
}
