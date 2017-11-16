import React from 'react';
import { Link } from 'react-router-dom';

class CategoriesList extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      categories: [
        { id: 1, name: "Electornics" },
        { id: 2, name: "Electrics" }
      ]
    }
  }
  render () {
    return  (
      <div>        
        <h1> Categories List </h1>
        <button> <Link to="/categories/create-category"> Create Category </Link> </button>
        <table>
          <TableHead />
          <TableBody categories={this.state.categories} />
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
        { this.props.categories.map ( (category, index) => {
          return (<Category category={category} key={index} />);
        }) }
      </thead>
    );
  }
};

class Category extends React.Component {
  constructor (props) {
    super (props)
  };

  render () {
    return (
      <tr>
        <td> {this.props.category.id} </td>
        <td> {this.props.category.name} </td>
        <td>
          <Link to="/"> View </Link>
          <Link to="/"> Edit </Link>
          <Link to="/"> Delete </Link>
        </td>
      </tr>
    );
  }
};

export default CategoriesList;