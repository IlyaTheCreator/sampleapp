// import { useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import "./Counter.css"

const Counter = () => {
    // const [counter, setCounter] = useState(0)
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div className="Counter">
            <p>{counter}</p>
            {/* <button onClick={() => setCounter(counter + 1)}>click</button> */}
            <button onClick={() => dispatch({type: "INCREMENT", payload: {}})}>click</button>
        </div>
    )
}

export default Counter