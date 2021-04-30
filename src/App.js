import "./App.css";
// importo funzione per rendere dinamica pagina da react
import { useState } from "react";
import Reset from "./components/Reset";
import AddCounter from "./components/AddCounter";

function App() {
  const [counter, setCounter] = useState([0, 0]);
  let [newCounter] = useState(); // counter è il valore, setCounter è il valore che cambia, useState è la funzione, che in questo caso parte da 0 e che alimenteremo
  return (
    <div>
      <div className="container">
        <AddCounter newCounter={newCounter} />
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

        <Reset setCounter={setCounter} counter={counter} />
      </div>
    </div>
  );
}

export default App;
