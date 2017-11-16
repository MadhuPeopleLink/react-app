
import React from 'react';
import { Link, Router, Route, Switch, BrowserRouter } from 'react-router-dom';

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1> Hi, I'm Home Component </h1>
        <Link to={"/products"}> Products </Link> &nbsp; &nbsp; &nbsp;                
        <Link to={"/categories"}> Categories </Link> &nbsp; &nbsp; &nbsp;
        <hr/>
      </div>
    )
  }
};

export default Home;