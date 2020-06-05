import React, { Component } from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
  } from "reactstrap";
export default class photographyCard extends Component {
    render() {
        const ImgStyle = {
            height: "40vh",
            width: "100%",
            "border-radius": "17%",
            "padding-top": "5vh",
          };
        return (
            <div>
                <Card>
                    <CardImg  style = {ImgStyle} width="100%" src= {}/>
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardText></CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
