import { useEffect, useState } from "react";


function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch
            (url)
            .then(async (response) => {
                let data = await response.json();
                setData(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [url]);

    const refetch = () => {
        setLoading(true);
        fetch
            (url)
            .then((response) => {
                setData(response.data.json());
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { data, loading, error, refetch };
}

export default useFetch;