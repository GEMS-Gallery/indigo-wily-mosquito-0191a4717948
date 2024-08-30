import React, { useState, useEffect } from 'react';
import { backend } from 'declarations/backend';

function App() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCount();
  }, []);

  const fetchCount = async () => {
    try {
      const currentCount = await backend.getCount();
      setCount(Number(currentCount));
    } catch (error) {
      console.error('Error fetching count:', error);
    }
  };

  const handleIncrement = async () => {
    setLoading(true);
    try {
      const newCount = await backend.increment();
      setCount(Number(newCount));
    } catch (error) {
      console.error('Error incrementing count:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Simple Counter App</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-2xl mb-4">Count: {count !== null ? count : 'Loading...'}</p>
        <button
          onClick={handleIncrement}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? 'Incrementing...' : 'Increment'}
        </button>
      </div>
    </div>
  );
}

export default App;