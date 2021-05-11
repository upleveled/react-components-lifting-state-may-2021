import React, { useState } from 'react';

function FunctionComponent(props) {
  const [bookId, setBookId] = useState('');
  const [books, setBooks] = useState([]);
  const [bookDetails, setBookDetails] = useState('');

  return <h1>Welcome to the React {props.storeName}</h1>;
}

export default FunctionComponent;
