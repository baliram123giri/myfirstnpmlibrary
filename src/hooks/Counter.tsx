import { useState } from 'react'

const useCounter = () => {
    const [counter, setCounter] = useState(0)
    function Increament() {
        setCounter(counter + 1)
    }
    function Decreament() {
        setCounter(counter - 1)
    }
    return { Increament, Decreament, counter }
}

export { useCounter }