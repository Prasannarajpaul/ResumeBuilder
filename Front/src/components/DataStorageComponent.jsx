import React, { Component } from 'react';

class DataStorageComponent extends Component {
  constructor() {
    super();
    this.state = {
      storedData: null,
    };
  }

  // Setter method to insert data
  setData = (data) => {
    this.setState({ storedData: data });
  };

  // Getter method to retrieve data
  getData = () => {
    return this.state.storedData;
  };

  render() {
    return (
      <div>
        <h1>Data Storage Component</h1>
        <button onClick={() => this.setData('Hello, World!')}>
          Set Data
        </button>
        <button onClick={() => alert(this.getData())}>
          Get Data
        </button>
      </div>
    );
  }
}

export default DataStorageComponent;
