import React from 'react';
import { Link } from 'react-router-dom';

class ProductsList extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      products: [
        {id: 1, name: "LG Refrigrator", category: "Electornics" },
        {id: 2, name: "LG TV", category: "Electornics" }        
      ]
    }
  }
  render () {
    return  (
      <div>        
        <h1> Products List </h1>
        <Link to={"/products/create-product"}> Create Product </Link>
        <table>
          <TableHead />
          <TableBody products={this.state.products} />
        </table>
        <p> <Link to="/"> Go Home </Link> </p>
      </div>
    );
  }
};

class TableHead extends React.Component {
  render () {
    return (
      <thead>
        <tr>
          <td> Id </td>
          <td> Name </td>
          <td> Category </td>
          <td> Actions </td>          
        </tr>
      </thead>
    );
  }
};

class TableBody extends React.Component {
  render () {
    return (
      <thead>
        { this.props.products.map ( (product, index) => {
          return (<Product product={product} key={index} />);
        }) }
      </thead>
    );
  }
};

class Product extends React.Component {
  constructor (props) {
    super (props)
  };

  render () {
    return (
      <tr>
        <td> {this.props.product.id} </td>
        <td> {this.props.product.name} </td>
        <td> {this.props.product.category} </td>
        <td>
          <Link to="/"> View </Link>
          <Link to="/"> Edit </Link>
          <Link to="/"> Delete </Link>
        </td>
      </tr>
    );
  }
};

export default ProductsList;