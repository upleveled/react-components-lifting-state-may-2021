// props destructuring naming the properties of the props object to use it directly
function AddFood({ inputValue, setInputValue, myFood, setMyFood }) {
  // 1. create the state variable
  // 2. connect value with state
  // 3. handle the onChange

  return (
    <div>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => {
          setInputValue(e.currentTarget.value);
        }}
      />
      <button
        style={{
          backgroundColor: 'green',
          borderRadius: '5px',
        }}
        onClick={(e) => {
          const myFoodCopy = [...myFood];
          myFoodCopy.push(inputValue);
          setMyFood(myFoodCopy);
        }}
      >
        add
      </button>
    </div>
  );
}

export default AddFood;
