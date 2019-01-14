import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './Papers.css';




class Papers extends Component{


render(){

const Pubs = [{to:'../../Files/Anima.docx',label:'Anima'}]
	const BigText = {'font-size':'56px'}

const publications= Pubs.map(paper=>{
	return(
		<a key = {paper.label} href= {paper.to}>{paper.label}</a>
		);
	
});

return(
<Fragment>
{/*<p> Hi im paul!</p>*/}

	<div className="background">
		<div className="center">
			<h1 className="center" style={BigText}>Papers</h1>
			<nav className="center bigSpacing">
				{publications}
			</nav>
		</div>
	</div>

</Fragment>
	);


}



}
export default Papers;