import {useState} from 'react'

export const useCounter = (inicialValue = 0) => {
    const [counter, setCounter] = useState(inicialValue)

    const handleIncrement = (value = 1) => {
        // setCounter(counter + 1)
        setCounter(counter + value)
    };

    const handleDecrement = (value = 1) => {
      if (counter === 0) return;
      // setCounter(counter - 1);
      setCounter(counter - value);
    };

    const handleReset = () => {
        setCounter(inicialValue );
    };

  return {
    counter,
    handleIncrement,
    handleReset,
    handleDecrement,
  };
}
