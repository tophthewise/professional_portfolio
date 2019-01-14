import React,{Component} from 'react';
import Spotify from '../../img/Music.png';
import './Musician.css';



class Music_Page extends Component{


render(){
return(
<div className="background"> 
<h1 className="center" >Music</h1>
<img className ="center" src={Spotify}/>

<div className="center">
	<p className="spaceLinks">
		<a  href="https://soundcloud.com/toph_th3_poet">Music</a>
	</p>
	<p className="spaceLinks">
		<a  href="#Production">Production</a>
	</p>
	<p className="spaceLinks">
		<a  href="#somethin">Influences</a>
	</p>
</div>
</div>
);

	}
};
export default Music_Page;