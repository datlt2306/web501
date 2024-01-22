import React, { useEffect, useState } from "react";

const DemoUseEffect = () => {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        // mounting và updating
        document.title = `count là ${count}`;
    }, []);

    return (
        <div>
            <button onClick={() => setStatus(true)}>Change</button>
            {count} <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default DemoUseEffect;
