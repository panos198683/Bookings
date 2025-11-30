import BookingsPage from '@/pages/BookingsPage';

function App() {
  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <header className='mb-6'>
        <h1 className='text-2xl font-bold'>BRS Bookings</h1>
      </header>

      <main>
        <BookingsPage />
      </main>
    </div>
  );
}

export default App;
