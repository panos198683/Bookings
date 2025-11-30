import React from 'react';
import { getStatusClasses } from '../lib/utils';

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => (
  <span
    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClasses(
      status
    )}`}
  >
    {status}
  </span>
);
