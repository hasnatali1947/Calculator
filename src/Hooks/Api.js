import { useState, useEffect } from 'react';

const Ninja = () => {
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  const Apikey = 'ZPksXpIQsgVKzO1MVKznag==tuGMl8VvIHOVSCMY';
  const Api = `https://api.api-ninjas.com/v1/jokes?limit=${1}`;

  const fitchingApi = async () => {
    try {
      const response = await fetch(`${Api}`, {
        method: 'GET',
        headers: { 'X-Api-Key': Apikey },
        contentType: 'application/json',
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fitchingApi();
  }, []);

  if (Error || Number(Data) === 0) {
    return 'something went wrong!';
  }

  if (loading) return <div>Loading...</div>;

  function JokesButton() {
    fitchingApi();
    setLoading(true);
  }

  return (
    <section className="Jokes-Section">
      <div className="jokes">
        {loading ? <p>loading jokes</p>
          : (
            <p>
              {Data ? Data[0].joke : ''}
            </p>
          )}
      </div>

      <button className="jokesButton" type="button" onClick={JokesButton} disabled={loading}>
        {loading ? 'loading' : 'Another Joke'}
      </button>
    </section>
  );
};
export default Ninja;
