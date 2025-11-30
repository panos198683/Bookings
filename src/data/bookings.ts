import { Booking } from 'src/types';

const sampleBookings: Booking[] = [
  {
    id: 'BK-1001',
    customer: 'Acme Wind',
    vessel: 'Nordic Star',
    status: 'confirmed',
    startDate: '2026-01-10',
    endDate: '2026-01-22',
  },
  {
    id: 'BK-1002',
    customer: 'BlueWave',
    vessel: 'Sea Finch',
    status: 'pending',
    startDate: '2026-02-03',
    endDate: '2026-02-05',
  },
  {
    id: 'BK-1003',
    customer: 'Oceanix',
    vessel: 'Asteria',
    status: 'cancelled',
    startDate: '2026-01-28',
    endDate: '2026-01-31',
  },
  {
    id: 'BK-1004',
    customer: 'SeaVentures',
    vessel: 'Coral Queen',
    status: 'confirmed',
    startDate: '2026-03-01',
    endDate: '2026-03-10',
  },
  {
    id: 'BK-1005',
    customer: 'WindMasters',
    vessel: 'Storm Rider',
    status: 'pending',
    startDate: '2026-02-15',
    endDate: '2026-02-20',
  },
  {
    id: 'BK-1006',
    customer: 'BlueWave',
    vessel: 'Ocean Breeze',
    status: 'confirmed',
    startDate: '2026-01-12',
    endDate: '2026-01-18',
  },
  {
    id: 'BK-1007',
    customer: 'Acme Wind',
    vessel: 'Northern Light',
    status: 'cancelled',
    startDate: '2026-01-25',
    endDate: '2026-02-01',
  },
  {
    id: 'BK-1008',
    customer: 'Oceanix',
    vessel: 'Asteria II',
    status: 'pending',
    startDate: '2026-03-05',
    endDate: '2026-03-08',
  },
];

export default sampleBookings;
