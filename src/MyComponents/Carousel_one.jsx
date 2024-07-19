import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '@fortawesome/fontawesome-free/css/all.min.css';
import r1_c1 from './Images/r1_c1.png';
import r1_c2 from './Images/r1_c2.png';
import r1_c3 from './Images/r1_c3.png';
import r1_c4 from './Images/r1_c4.png';
import r2_c1 from './Images/r2_c1.png';
import r2_c2 from './Images/r2_c2.png';
import r2_c3 from './Images/r2_c3.png';
import r2_c4 from './Images/r2_c4.png';

export default function Carousel_one() {
    return (
        <>
            <div>
                <Carousel class="carousel">
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r1_c1} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r1_c2} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r1_c3} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r1_c4} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r2_c1} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r2_c2} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r2_c3} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r2_c4} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r1_c1} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r1_c2} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r1_c3} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r1_c4} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r2_c1} class="pos_relative pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r2_c2} class="pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r2_c3} class="pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <Card.Body>
                                            <img src={r2_c4} class="pos_relative d-block w-100" alt="..." />
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>Black Chair </h3>
                                                </div>
                                                <div className="carousel_price_padding col-3">
                                                    <h5>$24</h5>
                                                </div>
                                            </div>
                                            <span class="pos_absolute_top badge bg-danger">New</span>
                                            
                                            <span class="pos_absolute badge bg-dark">Living Room</span>
                                            <i class="pos_absolute_fevicon fa-brands fa-gratipay"></i>
                                            <i class="pos_absolute_fevicon_one fa-solid fa-cart-shopping"></i>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}