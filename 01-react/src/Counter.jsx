import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    return (
        <>
            <h3>Count is : {count} </h3>
            <button type="button" onClick={() => {count<20 && setCount(count + 1)}}>Increment</button>
            <button type="button" onClick={() => {count > 0 && setCount(count - 1)}}>Decrement</button>

        </>
    )
}
export default Counter;