	import React,{Component, Fragment} from 'react';
	import ReactDOM from 'react-dom';
	import {BrowserRouter} from 'react-router-dom';
	import './Projects.css';
	import { Card, CardImg, CardText, CardBody,
	  CardTitle, CardSubtitle, Button } from 'reactstrap';
	import {Link} from 'react-router-dom';
	import Anima from '../../Pages/Anima/Anima';
	import CIPic from '../../img/CheckinIn.png';
	import EKPic from '../../img/EscapeKey3.png';








	class Projects extends Component{


	render(){

	const ImgStyle = {height:'40vh', width:'100%', 'border-radius':'17%','padding-top':'5vh'};
	const cardStyle = {'height':'500px'};




	return(
	<Fragment>
	{/*<p> Hi im paul!</p>*/}
	<div className="background">
			<div className="center">
				<h1 className="center display-1">Projects</h1>
			</div>
			
			<div className="centerCard">
				<div className="test" style={cardStyle}>
					<Card col-xs="3" >
					        <CardImg top width="100%" style={ImgStyle} src={CIPic} alt="Card image cap" />
					        <CardBody className="text-center">
					          <CardTitle tag="h2" className="center"><b>Checkin' In</b></CardTitle>
					          <CardText>"Checkin' In" is a design to help people with Alcohol Use Disorder (AUD) with their recovery process allowing users to create a community and communicate anonymously with others struggling with AUD, and track progress of their sobreity.</CardText>
					          <Link to = '/CheckinIn' ><Button className="centerButton">See More</Button></Link>
					        </CardBody>
					      </Card>
				</div>
				<div className="test" style={cardStyle}>
					<Card col-xs="3">
					        <CardImg top style={ImgStyle} width="100%" src={EKPic} alt="Card image cap" />
					        <CardBody className="text-center">
					          <CardTitle tag="h2" className="center"><b>Escape Key</b></CardTitle>
					          <CardText>Escape Key is a design for women who don't feel safe on college campuses to have a way out of dangerous situations through: escape routes, 911 quick dialing, or send a distress message.</CardText>
					          <Link to = '/EscapeKey' ><Button className="centerButton">See More</Button></Link>
					        </CardBody>
					      </Card>
				</div>
			</div>
			<div className="centerCard">
				<div className="test" style={cardStyle}>
					<Card col-xs="3">
					        <CardImg top style={ImgStyle}width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
					        <CardBody>
					          <CardTitle tag="h2" className="center"><b>Anima</b></CardTitle>
					          <CardSubtitle className="center">Card subtitle</CardSubtitle>
					          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
					          <Link to = '/Anima' ><Button className="centerButton">See More</Button></Link>
					        </CardBody>
					      </Card>
				</div>
				<div className="test" style={cardStyle}>
					<Card col-xs="3">
					        <CardImg top style={ImgStyle}width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
					        <CardBody>
					          <CardTitle tag="h2" className="center"> <b>? </b></CardTitle>
					          <CardSubtitle className="center">Card subtitle</CardSubtitle>
					          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
					          <Link to = '#' ><Button className="centerButton">See More</Button></Link>
					        </CardBody>
					      </Card>
				</div>

			</div>
			


		</div>
	</Fragment>
		);


	}



	}
	export default Projects;