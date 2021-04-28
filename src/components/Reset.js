// const [counter, setCounter] = useState(0);

const Reset = (setCounter) => {
  return (
    <button
      className="reset"
      onClick={() => {
        setCounter(0);
      }}
    >
      RESET
    </button>
  );
};

export default Reset;
