import { useState, useEffect } from 'react';

// Componente Hook
export default function Loading(props) {
    const { title = "" } = props;
    const [timer, setTimer] = useState(0);
    const [counter, setCounter] = useState(0);

    const tick = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {
        const interval = setInterval( tick(), 1000);
        return () => clearInterval(interval)
    }, [counter]);

    return (
        <div>
            {title} { "...".substr(0,(counter % 3) + 1)}
        </div>
    );
}
