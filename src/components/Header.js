import React, { Component } from 'react';
import logo from '../logo.svg';

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../bootstrap.min.css';
import '../App.css';


class Header extends Component{
	render(){
		return (
		 
            	 
	    
	     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <a className="navbar-brand" href="#">Logo</a>
  

  <ul className="navbar-nav pull-right">
    <li className="nav-item">
      <a className="nav-link" href="#">Link 1</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link 2</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link 3</a>
    </li>
  </ul>
</nav>
		  
		  	
		);
	}
}



 export default Header;