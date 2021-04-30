const AddCounter = ({ counter, setCounter, newCounter }) => {
  return (
    <div>
      {counter.map((counter, index) => {
        return <div>{counter}</div>;
      })}
      <button
        className="addCounter"
        onClick={() => {
          const counter = [...newCounter];
          newCounter.push(0);

          setCounter(counter);
        }}
      >
        ADD COUNTER
      </button>
    </div>
  );
};

export default AddCounter;
