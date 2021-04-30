const AddCounter = ({ newCounter }) => {
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

          setCounter(newCounter);
        }}
      >
        ADD COUNTER
      </button>
    </div>
  );
};

export default AddCounter;
