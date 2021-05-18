//  import logo from './cart.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { products } from './products.js'
import Nav from './navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
    };
  }

  onIncrement = (addvalue) => {
    if (addvalue.value < 10) {
      const updatedValue = addvalue.value++;
      this.setState({ updatedValue });
    }
  };
  onDecrement = (decvalue) => {
    if (decvalue.value > 0) {
      const updatedValue = decvalue.value--;
      this.setState({ updatedValue });
    }
  };

  render() {
    return (
      {},
      (
        <div className="App">
          <Nav
            totalValue={this.state.products
              .map((prod) => prod.value)
              .reduce((acc, curr, index) => acc + curr, 0)}
            prods={this.state.products}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
          />
          
        </div>
      )
    );
  }
}

export default App;