import React,{Component} from 'react';
import backdrop from '../../img/Design_drop3.jpg';
//change image to something dope 
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Designer.css';
library.add(fab,fas);

const myStyle = {
	backgroundImage:`url( ${backdrop} )`,
	height:500,
	backgroundSize:'cover',

} 
const subhead={'font-size':'48px'}

class Designer extends Component{


render(){
return(
<div className="tile" >
<header  style={myStyle}> 
<h1 > {this.props.title}</h1>
<p > <Link to="/Designer" style={subhead}>
{" My Designs " }
<FontAwesomeIcon icon={['fas','drafting-compass']} />
</Link> </p>
</header>
</div>
);

	}
};
export default Designer;