import * as React from 'react';
import { useState } from 'react';

const Button = ({ children }) => {
    return (React.createElement("button", null, children));
};

const useCounter = () => {
    const [counter, setCounter] = useState(0);
    function Increament() {
        setCounter(counter + 1);
    }
    function Decreament() {
        setCounter(counter - 1);
    }
    return { Increament, Decreament, counter };
};

export { Button, useCounter };
