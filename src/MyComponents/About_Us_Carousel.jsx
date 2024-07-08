import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about_us_meetOurTeam from './Images/about_us_meetOurTeam.png';

export default function About_Us_Carousel(props) {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <img className="meetOurTeamImg" src={props.imgsrc} alt="dfghj" />
                                        <h1>dfghjk</h1>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
