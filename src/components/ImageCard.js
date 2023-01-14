import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import "./card.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function ImageCard(props) {

    let [numOfliks, setNumOfliks] = useState(0);

    const IncreasNumOfLiks = () => {

        // increment num of liks by 1
        setNumOfliks(numOfliks+1)

        // increment num of total likes by 1
        props.increment();
    }


  return (
    <>
      <Container id="bodyCard">
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} id="card">
              <Card.Title id="cardnum" style={{ color: "#6C00FF" }}>
                {props.id}
              </Card.Title>
              <Card.Img variant="top" src={props.img} id="cardImg" onClick={IncreasNumOfLiks}/>
              <Card.Body id="info" style={{ margin: "-10px 0px" }}>
                <Card.Title id="cardTitle" style={{ color: "#6C00FF" }}>
                  {props.title}
                </Card.Title>
                <Card.Text id="cardText" style={{ color: "#6C00FF" }}>
                  <p>❤️ : {numOfliks} </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );

}

export default ImageCard;

//JSX