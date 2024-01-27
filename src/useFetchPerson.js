import { useEffect, useState } from "react";

const useFetchPeron = (url) => {
    // console.log(url)
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const resp = await fetch(url);
                if (!resp.ok) {
                    setIsError(true)
                    setIsLoading(true)
                    return;
                }

                const user = await resp.json();
                setIsLoading(false)
                setUser(user)

            } catch (error) {
                setIsError(true);

            }

        };
        fetchUser();
    }, []);

    return { isLoading, isError, user };

}

export default useFetchPeron;