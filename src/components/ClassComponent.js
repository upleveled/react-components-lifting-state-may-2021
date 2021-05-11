import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: '',
      books: [],
      bookDetails: '',
    };
  }

  render() {
    return <h1>Welcome to the React {this.props.storeName}</h1>;
  }
}

export default ClassComponent;
