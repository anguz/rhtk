import { useState, useEffect, useRef } from 'react';

// Componente Hook
export default function Loading(props) {
    const { title = "" } = props;
    const [timer, setTimer] = useState(0);
    const [counter, setCounter] = useState(0);

    const counterRef = useRef(0);

    const tick = () => {
        setCounter(counterRef.current + 1);
    }

    useEffect(() => {
        counterRef.current = counter;
    })

    useEffect(() => {
        let interval = setInterval( tick, 1000);
        return () => clearInterval(interval)
    }, []);

    return (
        <div>
            {title} { "...".substr(0,(counter % 3) + 1)}
        </div>
    );
}
