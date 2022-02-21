import { useState, useEffect } from 'react';

export default function useFetch(url: string) {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [isError, setError] = useState(null);
    useEffect(() => {
        fetch(url)
          .then(response => {
            if(!response.ok) {
              throw Error("Couldn't fetch data from that resourse");
            }
            return response.json();
          })
          .then(data => {
            setPending(false);
            setData(data);
            setError(null);
          })
          .catch( error => {
            setPending(false);
            setError(error.message);
            console.log(error);
          })
      }, [url]);
    return {data, isPending, isError}
}