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
	 Escape Key is a design for women who don't feel safe on college campuses to have a way out of dangerous situations. 
	 The main ways to avoid dangerous situations are: escape routes, 911 quick dialing, or send a distress message.
	</p>
	<h2 style={headerstyle}>
		Process
	</h2>
	<p style={textStyle}>
	 First we chose a problem space that was important to college life in general which was safety, specifically safety for women on college campuses.
		After defining the problem space we conducted a literature review and ideated solutions of problems that exist for women on college campuses.
		In the ideation we found that there were a few common themes that were hazardous for women on college campuses. These issues were:
		<ol>
			<li>Navigating out of dangerous situations </li>
			<li>Contacting a close friend when in trouble </li>
			<li>Discretely contacting the authorities  </li>
		</ol>
		After the ideation session we conducted interviews women on college capmuses to cross reference our secondary data from our literature review.
		Using the interviews we ideated solutions to solve the major safety concerns. 
		We came out with a low fidelity protoype that addressed all three concerns of having a discrete way to contact the authorities and friends with a location, and navigating to a safe area when in trouble. 
		Then we used  the low fidelity to run user tests to the same users from the interviews as a focal point to face the safety concerns and user experience. 
		The user tests guided the team to implement changes from the low fidelity prototype in creating our high fideility prototype. 
		The final design was sumarized in the poster above.  
	</p>
</Fragment>
	);


}



}
export default EscapeKey;