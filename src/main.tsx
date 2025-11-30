import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BookingsProvider } from '@/context/BookingsProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookingsProvider>
      <App />
    </BookingsProvider>
  </StrictMode>
);
