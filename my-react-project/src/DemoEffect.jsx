import { useEffect, useState } from "react";

const DemoEffect = () => {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        // kết hợp luôn cả mounting và updating
        document.title = `You clicked ${count}`;
    }, [status]);
    return (
        <div>
            <button onClick={() => setStatus(true)}>Change Status</button>
            {count} - <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default DemoEffect;
