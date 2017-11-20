import React from 'react';
import { Link } from 'react-router-dom';

class ProductsList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <h1> Products </h1>
        <ProductsTable products={this.state.products} />
        <Link to="/"> Go Back </Link>
      </div>
    );
  }
};


class ProductsTable extends React.Component {
  constructor (props) {
    super(props);
  };

  render () {
    return (
      <div>
        <table>        
          <TableHead />
          <TableBody products={this.props.products}/>
        </table>
      </div>
    );
  }
};

class TableHead extends React.Component {
  constructor (props) {
    super(props)
  };

  render () {
    return (
      <thead>
        <tr>
          <th> Id </th>
          <th> Name </th>
          <th> Category </th>          
        </tr>
      </thead>
    );
  }  
};

class TableBody extends React.Component {
  constructor (props) {
    super(props);
  };

  render () {
    return (
      <tbody>
        {this.props.products.map ( (product, index) => {
          return ( <Product product={product} key={index} />);
        })}
      </tbody>
    );
  }  
};

class Product extends React.Component {
  constructor (props) {
    super(props)
  };

  render () {
    return (
      <tr>
        <td> {this.props.product.id} </td>
        <td> {this.props.product.name} </td>
        <td> {this.props.product.categoryId} </td>        
      </tr>
    );
  }
};

export default ProductsList;