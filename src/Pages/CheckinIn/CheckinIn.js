import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//import './Designer.css';
import Projects from '../../Components/Projects/Projects';
import Papers from '../../Components/Papers/Papers';
import poster from '../../img/CheckinInPoster.png';




class CheckinIn extends Component{


render(){

const headerstyle={'padding-left':"2%"};
const textStyle ={'padding-left':'2%'};
const imgStyle ={'height':'100%','width':'40%', 'border-radius':'0px','border':'white solid','padding-bottom':'0px'}
const title = {'padding-bottom':'1px'}

return(
<Fragment>
	<h1 className="center" style={title}>
		{"Checkin' In"}
	</h1>

	<img className="center" style = {imgStyle} src={poster} />
	<h2 style={headerstyle}>
		Design
	</h2>
	<p style={textStyle}>
"Checkin' In" is a design to help people with Alcohol Use Disorder (AUD). 
It focuses on each users recovery process allowing him/her/them to create a community, communicate anonymously with others struggling with AUD, and track progress of their sobreity.	
</p>
	<h2 style={headerstyle}>
		Process
	</h2>
	<p style={textStyle}>
		First we chose a problem space that was important to us all, which ended up being substance abuse recovery specifically those suffering from Alcohol Use Disorder(AUD).
		After defining the problem space we conducted a literature review and ideated solutions of problems that exist in AUD.
		In the ideation we found that there were 3 common themes that caused our users the most issues. These issues were:
		<ol>
			<li>A lack anonymity in community chat groups</li>
			<li>Unsatisfactory support </li>
			<li>Inaccurate sobriety tracking</li>
		</ol>
		After the ideation session we conducted interviews with Medical professionals to cross reference our secondary data from our literature review.
		Using the interviews we ideated solutions to solve the major pain points for our users. 
		We came out with a low fidelity protoype that addressed all three concerns with a chat that doesn't warrant an identity, A chat group to connect with others suffering with AUD for support, and an algorithm to represent accurate sobriety.
		Then we used  the low fidelity to run user tests to medical professionals since we couldn't reach out to those suffering with AUD due to confidentiality. 
		The user tests guided the team to implement changes from the low fidelity prototype in creating our high fideility prototype. 
		The final design was sumarized in the poster above.  
	</p>
</Fragment>
	);


}



}
export default CheckinIn;