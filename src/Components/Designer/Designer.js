import React,{Component} from 'react';
import backdrop from '../../img/Design_drop3.jpg';
//change image to something dope 
import {Link} from 'react-router-dom';

import './Designer.css'
const myStyle = {
	backgroundImage:`url( ${backdrop} )`,
	height:500,
	backgroundSize:'cover',

} 


class Designer extends Component{


render(){
return(
<div className="tile" >
<header  style={myStyle}> 
<h1 > {this.props.title}</h1>
<p> <Link to="/Designer">My Designs </Link> </p>
</header>
</div>
);

	}
};
export default Designer;