import { useState } from "react"
import "./Counter.css"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className="Counter">
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>click</button>
        </div>
    )
}

export default Counter