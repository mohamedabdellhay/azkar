
import { useState } from "react"
import "./counter.css"


export const Counter = ({num}: {num:number}) => {
    const [counter, setCounter] = useState(num);
    return counter == 0 ?  <button disabled>{counter}</button> : <button onClick={() => setCounter(counter - 1)}>{counter}</button>;
}