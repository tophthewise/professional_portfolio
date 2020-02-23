import React, { Component } from "react";
import backdrop from "../../img/Music_Cover.jpg";
import { Link } from "react-router-dom";
import "./Musician.css";
const myStyle = {
  backgroundImage: `url( ${backdrop} )`,
  height: 500,
  backgroundSize: "cover",
  color: "#e5e7eb"
};

class Musician extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tile">
        <header style={myStyle}>
          <h1> {this.props.title}</h1>
          <Link to="/Music" onClick={() => this.props.history.push("/Music")}>
            {" "}
            See More Here{" "}
          </Link>
          {/* <a onClick={()=>this.props.history.push('/Music')}> haha Davis</a> */}
        </header>
      </div>
    );
  }
}
export default Musician;
