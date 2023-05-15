import { useEffect, useState } from "react";


function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

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


    return { data, loading, error };
}

export default useFetch;