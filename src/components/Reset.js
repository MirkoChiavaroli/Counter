// const [counter, setCounter] = useState(0);

const Reset = ({ counter, setCounter }) => {
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
