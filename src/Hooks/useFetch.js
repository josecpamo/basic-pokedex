/* eslint-disable no-throw-literal */
import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                let res = await fetch(url);

                if (!res.ok)
                    throw {
                        error: true,
                        status: res.status,
                        statusText: res.statusText || "An error has ocurred",
                    };

                let data = await res.json();

                setData(data);
                setIsPending(false);
                setError(false);
            } catch (error) {
                setIsPending(true);
                setError(error);
            }
        };
        getData(url);
    }, [url]);

    return { data, isPending, error };
};
