import React, { useEffect, useState } from "react";

const DemoUseEffect = () => {
    // console.log(1)
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(false);
    // setTimeout(() => console.log(2))
    useEffect(() => {
        // mounting và updating??
        document.title = `Count là ${count}`;
    }, [status]);

    // console.log(3)
    return (
        <div>
            <button onClick={() => setStatus(true)}>Change status</button>
            {count} <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default DemoUseEffect;
