import { useEffect, useState } from "react"

const MAXIMUN_COUNT=10;

export const CounterEffect = () => {
    const [counter, setCounter] = useState(5);
    const handleClick = () => {
        //if(counter < MAXIMUN_COUNT) setCounter(counter + 1);
        setCounter(prev => Math.min(prev+1, MAXIMUN_COUNT));
    }

    useEffect(() => {
        // Cuerpo
        // console.log('useEffect');
        // return () => {
        //     // Cuando el componente va a ser destruido
        // }

        if(counter<10) return;
        console.log('%cSe llego al valor maximo', 'color: red;background-color: black;')
    }, [counter]) //Dependencias
    

    return (
        <>
            <h1>CounterEffect: {counter}</h1>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}
