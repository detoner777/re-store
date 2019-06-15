import React from "react";
import './app.css';
import { Route, Switch } from 'react-router-dom';
import { withBookstoreService} from '../hoc';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

const App = () => {
  
  return ( 
    <main role="main" className="container">   
    <ShopHeader numItems={5} total={210}/>
    
     <Switch>
      <Route
        path="/"
        component={HomePage} 
        exact />
      
      <Route
        path="/"
        component={CartPage} 
        />
    
    </ Switch>
    </ main>
  )
  }

  export default withBookstoreService()(App);