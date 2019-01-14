
import React,{Component, Fragment} from 'react';
import Headshot from '../../img/Headshot.jpg';
import '../../Components/Navigation/Navigation.css';
import Musician from '../../Components/Musician/Musician';
import Resume from '../../Files/Resume_Eric_Porter_12_18_2018.pdf';
import Nav from '../../Components/About/aboutNavigation'
import './About.css'
import logo from '../../img/Sun.svg';



//import './Musician.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

class About extends Component{


render(){
	const profiles = [
      {to:'https://www.linkedin.com/in/eric-porter-687aa6122/',label:'LinkedIn'},
      {to:'mailto:eric.porter820@gmail.com' ,label:"Contact"},
     
    ];
    const profile_links = profiles.map(profile => {
      return (
                <li key ={profile.label}>
                <a href={profile.to}>{profile.label}  
                </a>
                </li>
        )

    });
return(
<Fragment>
<div className="background"> 

	<div className="center">
		<h1 className="center">About</h1>
		<img className ="center" src={Headshot}/>

	</div>
	
	<Nav className="center" logoTitle="Cornell (BS '17,MS '18)"/>
	<div className="movein ">
		<p className = "cleanspace">
			<span className="innerBlurb">
				Hi! I am a developer and designer interested in interactive web
				 development and clean interactive custom product experience. I 
				 currently work at The Dow Chemical Company in the Enterprise Architect practice 
				 looking to do more hands on development and design. </span>

		</p>
		<p className = "cleanspace">
			<span className="innerBlurb">
				My interests range from equitable pay of all musical artists 
				and the business model of independent artists to solving complex
				 social issues through critical and speculative design. 
				Through working in the intersection of Business and Technology 
				I hope to influence the changes in daily problems  using smart analytics 
				and visualizations to revolutionize user experiences for all.
			</span>
		</p>
		<p className = "cleanspace">
			<span className="innerBlurb">I was raised in New York(Vestal and Poughkeepsie). 
			While I enjoy New York, I enjoy learning about all 
			differnt sorts of culture beyond the New Yorker lifestyle.
			Living in Michigan for 6 months has enriched my appreciation 
			for different cultures.
			I've been outside of the US(Namibia) and hope to do some more traveling, 
			using my travel to enhance my projects and solving different problems
			 with different cultural lenses. 
			 When not traveling I enjoy making music and DIY projects.
			 </span>
		</p>
	</div>

</div>
</Fragment>

);


	}
};
export default About;