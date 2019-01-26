import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//import './Designer.css';
import Projects from '../../Components/Projects/Projects';
import Papers from '../../Components/Papers/Papers';
import poster from '../../img/EscapeKeyPoster.png';




class EscapeKey extends Component{


render(){


const headerstyle={'padding-left':"2%"};
const textStyle ={'padding-left':'2%'};
const imgStyle ={'height':'100%','width':'40%', 'border-radius':'0px','border':'white solid','padding-bottom':'0px'}
const title = {'padding-bottom':'1px'}

return(
<Fragment>
	<h1 className="center" style={title}>
		{"Escape Key"}
	</h1>

	<img className="center" style = {imgStyle} src={poster} />
	<h2 style={headerstyle}>
		Design
	</h2>
	<p style={textStyle}>
		lorem ipsum
	</p>
	<h2 style={headerstyle}>
		Process
	</h2>
	<p style={textStyle}>
		lorem ipsum
	</p>
</Fragment>
	);


}



}
export default EscapeKey;