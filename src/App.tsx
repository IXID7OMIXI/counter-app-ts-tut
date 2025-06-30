import React, { useState } from "react";

const App: React.FC = () => {
    // Explicitly type the state as number
    const [counter, setCounter] = useState<number>(0);

    // Optionally, type the event handlers
    const handleClick1 = (): void => {
        setCounter(counter + 1);
    };

    const handleClick2 = (): void => {
        setCounter(counter - 1);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "300%",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "-15%",
                backgroundColor: "#e0f7fa"
            }}
        >
            <h1>Counter App</h1>
            <div
                style={{
                    fontSize: "120%",
                    position: "relative",
                    top: "10vh",
                }}
            >
                {counter}
            </div>
            <div className="buttons">
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginRight: "5px",
                        backgroundColor: "green",
                        borderRadius: "8%",
                        color: "white",
                    }}
                    onClick={handleClick1}
                >
                    Increment
                </button>
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "5px",
                        backgroundColor: "red",
                        borderRadius: "8%",
                        color: "white",
                    }}
                    onClick={handleClick2}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default App;