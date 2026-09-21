import { useState } from "react"

interface Props {
    initialValue?: number
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
    const [counterState, setCounterState] = useState({counter: initialValue, clicks: 0});
    const {counter, clicks} = counterState;
    const handleClick = (step: number) => {
        setCounterState({ ...counterState, counter: counterState.counter + step, clicks: counterState.clicks + 1 });
    }
    return (
        <>
            <h1>CounterBy: {counter}</h1>
            <h1>Clicks: {clicks}</h1>
            <button onClick={() => handleClick(1)}>
                +1
            </button>
            <button onClick={() => handleClick(5)}>
                +5
            </button>
        </>
    )
}
