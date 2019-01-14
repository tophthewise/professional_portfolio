import React,{Component} from 'react';
import backdrop from '../../img/Something.jpg';
import './Developer.css'
import '../../index.css'
const myStyle = {
	backgroundImage:`url( ${backdrop} )`,
	height:500,
	backgroundSize:'cover',

} 


class Developer extends Component{


render(){
return(
<div className="tile">
<header  style={myStyle}> 
<h1 > {this.props.title} </h1>

<p> <a href = "https://github.com/tophthewise"> See more here</a> </p>
</header>
</div>
);

	}
};
export default Developer;