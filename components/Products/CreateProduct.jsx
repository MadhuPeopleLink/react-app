import React from 'react';

import categories from '../../data/categories.js';

console.log("categories ", categories);

class CreateProduct extends React.Component {
  render () {
    return (
      <div>
        <h1> This is Create Product Component </h1>
        <Form />
      </div>
    );
  }
};

class Form extends React.Component {
  render () {
    return (
      <div>
        <form>
          <label> Product Name </label>
          <input type='text' placeholder="Enter Product Name..." />
          <br /> <br />
          <label> Category </label>
          <select>
            <option value="0"> Choose Category...</option>
            { categories.map ( (category, index) => {
              return (
                <option value={category.id} key={index}> {category.name} </option>
              )
            }) }
          </select>
          <br /> <br />
          <button type="submit" id="create-product"> Create Prodcut </button>

        </form>
      </div>
    );
  }
};


export default CreateProduct;