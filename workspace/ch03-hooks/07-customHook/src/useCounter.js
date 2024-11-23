import { useReducer, useRef } from 'react';

function useCounter(initCounter) {
    // const [count, setCount] = useState(initCount);
    const [count, countDispatch] = useReducer(counterReducer, initCount);

    const stepElem = useRef(null);

    const handleDown = () => {
        countDispatch({ type: "DOWN", value: step.current });
    };
    const handleUp = () => {
        countDispatch({ type: "UP", value: step.current });
    };
    const handleReset = (event) => {
        // setCount(initCount);
        countDispatch({ type: "RESET", value: initCount });
        // const stepElem = document.querySelector('#step');
        console.log(stepElem);
        stepElem.current.focus();
    };
}
export default useCounter;