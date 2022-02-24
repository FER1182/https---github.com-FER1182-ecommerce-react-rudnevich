import React, { useEffect, useState } from 'react';

const Prueba23feb = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 10000);

        return () => {
            setLoading(true)
        };
    }, []);



    return (
        <>
            {loading && <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>}
        </>
    );
}

export default Prueba23feb