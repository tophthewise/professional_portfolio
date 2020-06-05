import React, { Component } from "react";
import "../../Components/Projects/Projects.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import theartiste from "../../img/TheArtiste2.PNG";
import arizonabusstop from "../../img/ArizonaBustop.PNG";
import bristmas from "../../img/Bhristmas.PNG";
import FFE from "../../img/FlowersForErika.PNG";
import GardenGateway from "../../img/GardenGateway.PNG";
import GOE from "../../img/GardenOfEden.jpg";
import Gibbs from "../../img/GibbsInSF.PNG";
import HeartInTheHeavens from "../../img/HeartInTheHeavens.jpg";
import HeavenCzako from "../../img/HeavenCzako.PNG";
import KayakingOnMars from "../../img/KayakingOnMars.PNG";
import Marisa from "../../img/Marisa.PNG";
import Prayforhealing from "../../img/Prayforhealing.PNG";
import SplitSchieber from "../../img/SplitSchieber.PNG";
import StairwayToNoah from "../../img/StairwayToNoah.PNG";
import StrawberryJammo from "../../img/StrawberryJammo.PNG";
import SunComeDown from "../../img/SunComeDown.PNG";

export default class photography extends Component {
  render() {
    const ImgStyle = {
      height: "50vh",
      width: "100%",
      "border-radius": "40%",
      "padding-top": "2vh",
    };
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Photography</h1>
        <h2 style={{ textAlign: "center" }}>Newest Edits</h2>
        <div>
          <img
            src={theartiste}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>The Artiste</h2>
        </div>
        <div>
          <img
            src={arizonabusstop}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Arizona Bus Stop</h2>
        </div>
        <div>
          <img
            src={bristmas}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Christmas with the Porters</h2>
        </div>
        <div>
          <img
            src={FFE}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Flowers for Erika</h2>
        </div>
        <div>
          <img
            src={GardenGateway}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Garden Gateway</h2>
        </div>
        <div>
          <img
            src={GOE}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Garden of Eden</h2>
        </div>
        <div>
          <img
            src={Gibbs}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Gibbin in SF</h2>
        </div>
        <div>
          <img
            src={HeartInTheHeavens}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Heart in the Heavens</h2>
        </div>
        <div>
          <img
            src={HeavenCzako}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Heaven Czako</h2>
        </div>
        <div>
          <img
            src={KayakingOnMars}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Kayaking On Mars</h2>
        </div>
        <div>
          <img
            src={Marisa}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Duschenne</h2>
        </div>
        <div>
          <img
            src={Prayforhealing}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Speaking Words of Wisdom</h2>
        </div>
        <div>
          <img
            src={SplitSchieber}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Split Schieber</h2>
        </div>
        <div>
          <img
            src={StairwayToNoah}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Stairway to Noah</h2>
        </div>

        <div>
          <img
            src={StrawberryJammo}
            margin="0 auto "
            className="center"
            width="4px"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Strawberry Jammo</h2>
        </div>
        <div>
          <img
            src={SunComeDown}
            margin="0 auto "
            className="center"
            height="600px"
            alt="sherri Studio"
          />
          <h2 style={{ textAlign: "center" }}>Sun Come Down</h2>
        </div>
      </div>
    );
  }
}
