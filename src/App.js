import "./App.css";
// importo funzione per rendere dinamica pagina da react
import { useState } from "react";
import Reset from "./components/Reset";

function App() {
  const [counter, setCounter] = useState(0); // counter è il valore, setCounter è il valore che cambia, useState è la funzione, che in questo caso parte da 0 e che alimenteremo
  return (
    <div className="container">
      <div>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
          // onClick è la funzione che sottrare valore(counter) -1 ad ogni click passando per la funzione setCounter
        >
          <span> - </span>
        </button>
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          // onClick è la funzione che addiziona valore(counter) +1 ad ogni click passando per la funzione setCounter
        >
          <span>+</span>
        </button>
        {/* <button
          onClick={() => {
            setCounter(0);
          }}
          // onClick è la funzione reset valore(counter) +1 ad ogni click passando per la funzione setCounter
        >
          RESET
        </button> */}
        <Reset />
      </div>
    </div>
  );
}

export default App;
