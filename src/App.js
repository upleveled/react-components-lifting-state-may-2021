/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import AddFood from './components/AddFood';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

// import './App.css';
// css in JS allow us to control css from out JavaScript easy
const list = (number) => {
  return css`
    border: black solid 3px;
    border-radius: ${number}px;
  `;
};

function Food({ myFood }) {
  // mapping returns an array with the same length
  // we are mapping an array of strings into an array of JSX
  const [inputValue, setInputValue] = useState(30);

  return (
    <div>
      <ul css={list(inputValue)}>
        {myFood.map((food) => {
          return <li>{food}</li>;
        })}
      </ul>
      <input
        value={inputValue}
        type="number"
        onChange={(e) => {
          setInputValue(e.currentTarget.value);
        }}
      />
    </div>
  );
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [myFood, setMyFood] = useState(['carrots', 'coffee', 'milk']);

  return (
    <div>
      <ClassComponent storeName={'upLeveled'} />
      <FunctionComponent storeName={'upLeveled'} />
      <Food myFood={myFood} />
      <AddFood
        myFood={myFood}
        setMyFood={setMyFood}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {/* conditional rendering with ternary operator */}
      {myFood.length > 0 ? (
        <button className={'clearButton'} onClick={() => setMyFood([])}>
          clear
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
