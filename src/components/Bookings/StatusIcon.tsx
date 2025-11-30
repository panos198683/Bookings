// src/components/Bookings/StatusIcon.tsx
import React from 'react';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

interface StatusIconProps {
  status: 'confirmed' | 'pending' | 'cancelled' | string;
}

export const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
  switch (status) {
    case 'confirmed':
      return <CheckCircle className='w-4 h-4 text-green-500' />;
    case 'pending':
      return <Clock className='w-4 h-4 text-yellow-500' />;
    case 'cancelled':
      return <XCircle className='w-4 h-4 text-red-500' />;
    default:
      return null;
  }
};
