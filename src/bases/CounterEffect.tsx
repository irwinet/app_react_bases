import { useEffect, useState } from "react"
import { gsap } from "gsap";  

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
        console.log('%cSe llego al valor maximo', 'color: red;background-color: black;');
        gsap.to('h2',{y: -10, duration: 0.2, ease: 'ease.out'}).then(() => {
            gsap.to('h2',{y: 0, duration: 1, ease: 'bounce.out'})
        });
    }, [counter]) //Dependencias
    

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2>{counter}</h2>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}
