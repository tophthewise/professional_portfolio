import React,{Component} from 'react';
import backdrop from '../../img/Something.jpg';
//change image to something dope 
import './Designer.css'
const myStyle = {
	backgroundImage:`url( ${backdrop} )`,
	height:500,
	backgroundSize:'cover',

} 


class Designer extends Component{


render(){
return(
<a className="tile" href="#Designer">
<header  style={myStyle}> 
<h1 > {this.props.title}</h1>
<p> <a> </a> </p>
</header>
</a>
);

	}
};
export default Designer;