import React,{Component} from 'react';
//change image to something dope 

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCopyright,fas);



class Footer extends Component{


render(){
const spacing={"padding-top":'5%'};
const date= new Date();
const year = date.getFullYear();
return(
<p className="center" style={spacing}>
<FontAwesomeIcon icon={faCopyright}/>
{ " Copyright "+year}
<a href="https://www.linkedin.com/in/eric-porter-687aa6122/"> Eric Porter</a>
</p>
);

	}
};
export default Footer;