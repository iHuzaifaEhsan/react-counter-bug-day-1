import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const mystyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

return (
  <>
    <div className="card" style={mystyle}>
      <h1 data-testid="counter">{number}</h1>
      <button
        data-testid="incrementButton"
        onClick={() => {
          setNumber(number + 3);
        }}
      >
        Increment 3 times
      </button>
    </div>
  </>
);
}
