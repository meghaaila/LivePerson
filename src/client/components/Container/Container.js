import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Register from '../Register/Register';
import ContactForm from '../ContactForm/ContactForm';
export default function Container(){
  return (
   < BrowserRouter >
      <div>
         <Route exact path="/" component={Login} />
         <Route exact path="/home" component={Home} />
         <Route path="/register" component={Register} />
         <Route path="/contactus" component={ContactForm} />
      </div>
   </ BrowserRouter >
)};
