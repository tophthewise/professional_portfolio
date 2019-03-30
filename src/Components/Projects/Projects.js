	import React,{Component, Fragment} from 'react';
	import ReactDOM from 'react-dom';
	import {BrowserRouter} from 'react-router-dom';
	import './Projects.css';
	import { Card, CardImg, CardText, CardBody,
	  CardTitle, CardSubtitle, Button } from 'reactstrap';
	  import MediaQuery from 'react-responsive';

	import {Link} from 'react-router-dom';
	import CIPic from '../../img/CheckinIn.png';
	import EKPic from '../../img/EscapeKey3.png';
	import comingsoon from '../../img/ComingSoon.jpg';









	class Projects extends Component{


	render(){

	const ImgStyle = {height:'40vh', width:'100%', 'border-radius':'17%','padding-top':'5vh'};
	const visiText = {'font-size':'1.2rem'};
const spacing={"paddingBottom":'10%'};
const mobile = {'border':'solid white',
	'border-radius': '10%',
	'display':'inline-table',
	'margin-left':'6.5vw',
	'text-align':'center',
	'height':'600px' ,
	'width':'80%'}


	return(
	<Fragment>
	{/*<p> Hi im paul!</p>*/}
	<div className="background">
			<div className="center">
				<h1 className="center display-3">Projects</h1>
			</div>
			<MediaQuery minWidth={1000}>
			<div className="centerCard">
				
				<div className="test" >
					<Card col-xs="3">
					        <CardImg top style={ImgStyle}width="100%" src= {comingsoon} alt="Card image cap" />
					        <CardBody>
					          <CardTitle tag="h2" className="center"> <b>Still Lyfe</b></CardTitle>
					          <CardSubtitle className="center" style={spacing}>Coming Soon</CardSubtitle>
					          
					        </CardBody>
					      </Card>
				</div>
				<div className="test" >
					<Card col-xs="3" >
					        <CardImg top width="100%" style={ImgStyle} src={CIPic} alt="Card image cap" />
					        <CardBody className="text-center">
					          <CardTitle tag="h2" className="center"><b>Checkin' In</b></CardTitle>
					          <CardText style={visiText}>"Checkin' In" is a design for people with Alcohol Use Disorder (AUD) with their recovery process.  Users can communicate anonymously with others in recovery, and track individual sobreity progress.</CardText>
					          <Link to = '/CheckinIn' ><Button className="centerButton">See More</Button></Link>
					        </CardBody>
					      </Card>
				</div>

			</div>
			<div className="centerCard">
				
				<div className="test" >
					<Card col-xs="3">
					        <CardImg top style={ImgStyle} width="100%" src={EKPic} alt="Card image cap" />
					        <CardBody className="text-center">
					          <CardTitle tag="h2" className="center"><b>Escape Key</b></CardTitle>
					          <CardText style={visiText}>"Escape Key" is a design for women who don't feel safe on college campuses to have a way out of dangerous situations through: escape routes, 911 quick dialing, or send a distress message.</CardText>
					          <Link to = '/EscapeKey' ><Button className="centerButton">See More</Button></Link>
					        </CardBody>
					      </Card>
				</div>
			</div>
			
			</MediaQuery>
			<MediaQuery maxWidth={1000}>
			<div className="centerCard">
				
				<div style={mobile} >
					<Card col-xs="5">
					        <CardImg top style={ImgStyle}width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
					        <CardBody>
					          <CardTitle tag="h2" className="center"> <b>Styll Life</b></CardTitle>
					          <CardSubtitle className="center" style={spacing}>Coming Soon</CardSubtitle>
					          
					        </CardBody>
					      </Card>
				</div>

			</div>
			<div className="centerCard">
				<div style={mobile} >
					<Card col-xs="5" >
					        <CardImg top width="100%" style={ImgStyle} src={CIPic} alt="Card image cap" />
					        <CardBody className="text-center">
					          <CardTitle tag="h2" className="center"><b>Checkin' In</b></CardTitle>
					          <CardText style={visiText}>"Checkin' In" is a design for people with Alcohol Use Disorder (AUD) with their recovery process.  Users can communicate anonymously with others in recovery, and track individual sobreity progress.</CardText>
					          <Link to = '/CheckinIn' ><Button className="centerButton">See More</Button></Link>
					        </CardBody>
					      </Card>
				</div>
			</div>
			<div className="centerCard">
				<div style={mobile} >	
					<Card col-xs="5">	        
						<CardImg top style={ImgStyle} width="100%" src={EKPic} alt="Card image cap" />	  
				      	<CardBody className="text-center">	          
				      		<CardTitle tag="h2" className="center"><b>Escape Key</b></CardTitle>	   
				      		<CardText style={visiText}>"Escape Key" is a design for women who don't feel safe on college campuses to have a way out of dangerous situations through: escape routes, 911 quick dialing, or send a distress message.</CardText>	         
				       		<Link to = '/EscapeKey' ><Button className="centerButton">See More</Button></Link>	 
				        </CardBody>	      
				    </Card>
				</div>			
				
			</div>
			
			</MediaQuery>

		</div>
	</Fragment>
		);


	}



	}
	export default Projects;