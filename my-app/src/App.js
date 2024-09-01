import { useEffect, useState } from 'react';
import './App.css';
import api from './Components/api/api';
import CardPart from './Components/api/CardPart';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api();
        setData(result);
      } catch (err) {
        setError(err.message);
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) :(
          <CardPart data={data} />
        )}
      
    </>
  );
}

export default App;

