import React from 'react'
import about_us_img1 from './Images/about_us_img1.png';
import { Link, useNavigate } from "react-router-dom";
import star from './Images/star.svg';
import about_us_img2 from './Images/about_us_img2.png';
import about_us_img3 from './Images/about_us_img3.png';
import about_us_img4 from './Images/about_us_img4.png';
import about_us_img5 from './Images/about_us_img5.png';
import about_us_meetOurTeam from './Images/about_us_meetOurTeam.png';
import Brands from './Brands';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About_Us_Carousel from './About_Us_Carousel';
import invertedCommas from './Images/invertedCommas.svg'
import Subscribe from './Subscribe';
import Footer from './Footer';

export default function About_Us() {
    return (
        <>
            <div className="aboutUs_section_one">
                <div className="aboutUs_section_one_wrapper">
                    <div className="aboutUs_section_one_left">
                        <h1>Provide the best quality ingredients for home products</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst posuere, lectus dis vehicula augue elementum quam risus. Placerat dictum lobortis lacinia volutpat morbi cum justo commodo est aliquam, facilisi consequat ligula vivamus faucibus</p>
                        <Link to="/team">
                            <button type="button" class="btn btn-light">Meet Our Team</button>
                        </Link>

                        <div className="ratings">
                            <div className="rating_absolute">
                                <div className="ratings_top">
                                    <h6>Ratings</h6>
                                    <img src={star} alt="" />
                                    <h6>5.0</h6>
                                </div>
                                <div className="ratings_middle">
                                    <p>Trusted by many people from all over the world</p>
                                </div>
                                <div className="ratings_bottom">
                                    <img src={about_us_img2} alt="" />
                                    <img src={about_us_img3} alt="" />
                                    <img src={about_us_img4} alt="" />
                                    <img src={about_us_img5} alt="" />
                                    <p>3K+</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="aboutUs_section_one_right">
                        <img src={about_us_img1} alt="" />
                    </div>
                </div>
            </div>

            <Brands />

            <div className="meeting_team">
                <h1>Meet Our Team</h1>
                <p className='meeting_team_p'>We write various things related to furniture, from tips and what things I need to pay attention to when choosing furniture</p>


                {/* <About_Us_Carousel
                    imgsrc={about_us_meetOurTeam}
                /> */}

                <div className="aboutUs_carousel_wrapper">
                    <Carousel>
                        <Carousel.Item>
                            <Container>
                                <Row>
                                    <Col md={4}>
                                        <Card>
                                            <Card.Body>
                                                <img className='meetOurTeamImg' src={about_us_meetOurTeam} alt="" />
                                                <h1>Mia Lobey</h1>
                                                <h5>Accountant</h5>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card>
                                            <Card.Body>
                                                <img className='meetOurTeamImg' src={about_us_meetOurTeam} alt="" />
                                                <h1>Mia Lobey</h1>
                                                <h5>Accountant</h5>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card>
                                            <Card.Body>
                                                <img className='meetOurTeamImg' src={about_us_meetOurTeam} alt="" />
                                                <h1>Mia Lobey</h1>
                                                <h5>Accountant</h5>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Container>
                                <Row>
                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <img className='meetOurTeamImg' src={about_us_meetOurTeam} alt="" />
                                                <h1>Mia Lobey</h1>
                                                <h5>Accountant</h5>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <img className='meetOurTeamImg' src={about_us_meetOurTeam} alt="" />
                                                <h1>Mia Lobey</h1>
                                                <h5>Accountant</h5>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col lg={4}>
                                        <Card>
                                            <Card.Body>
                                                <img className='meetOurTeamImg' src={about_us_meetOurTeam} alt="" />
                                                <h1>Mia Lobey</h1>
                                                <h5>Accountant</h5>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            {/* Customer_Review Carousel Starts*/}
            <div className="customer_review">
                <h1>How happy are they with our service</h1>
                <div className="aboutUs_carousel_wrapper">
                    <Carousel>
                        <Carousel.Item>
                            <Container>
                                <Row>
                                    <Col md={4}>
                                        <Card>
                                            <Card.Body>
                                                <img className='invertedCommasImg' src={invertedCommas} alt="" />
                                                <h6 className='invertedCommas_h6'>For the material and the chair as we expected it's good.</h6>
                                                <p className='invertedCommas_p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                                <div className="customer_details">
                                                    <div className="customer_image">
                                                        <img className='customer_img' src={about_us_img2} alt="" />
                                                    </div>
                                                    <div className="customer_prsnl_details">
                                                        <h6 className='customer_prsnl_details_h6'>Dagruel Manulo</h6>
                                                        <p className='customer_prsnl_details_p'>Sydney, Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card>
                                            <Card.Body>
                                                <img className='invertedCommasImg' src={invertedCommas} alt="" />
                                                <h6 className='invertedCommas_h6'>For the material and the chair as we expected it's good.</h6>
                                                <p className='invertedCommas_p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                                <div className="customer_details">
                                                    <div className="customer_image">
                                                        <img className='customer_img' src={about_us_img2} alt="" />
                                                    </div>
                                                    <div className="customer_prsnl_details">
                                                        <h6 className='customer_prsnl_details_h6'>Dagruel Manulo</h6>
                                                        <p className='customer_prsnl_details_p'>Sydney, Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card>
                                            <Card.Body>
                                                <img className='invertedCommasImg' src={invertedCommas} alt="" />
                                                <h6 className='invertedCommas_h6'>For the material and the chair as we expected it's good.</h6>
                                                <p className='invertedCommas_p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                                <div className="customer_details">
                                                    <div className="customer_image">
                                                        <img className='customer_img' src={about_us_img2} alt="" />
                                                    </div>
                                                    <div className="customer_prsnl_details">
                                                        <h6 className='customer_prsnl_details_h6'>Dagruel Manulo</h6>
                                                        <p className='customer_prsnl_details_p'>Sydney, Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Container>
                                <Row>
                                    <Col md={4}>
                                        <Card>
                                            <Card.Body>
                                                <img className='invertedCommasImg' src={invertedCommas} alt="" />
                                                <h6 className='invertedCommas_h6'>For the material and the chair as we expected it's good.</h6>
                                                <p className='invertedCommas_p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                                <div className="customer_details">
                                                    <div className="customer_image">
                                                        <img className='customer_img' src={about_us_img2} alt="" />
                                                    </div>
                                                    <div className="customer_prsnl_details">
                                                        <h6 className='customer_prsnl_details_h6'>Dagruel Manulo</h6>
                                                        <p className='customer_prsnl_details_p'>Sydney, Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card>
                                            <Card.Body>
                                                <img className='invertedCommasImg' src={invertedCommas} alt="" />
                                                <h6 className='invertedCommas_h6'>For the material and the chair as we expected it's good.</h6>
                                                <p className='invertedCommas_p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                                <div className="customer_details">
                                                    <div className="customer_image">
                                                        <img className='customer_img' src={about_us_img2} alt="" />
                                                    </div>
                                                    <div className="customer_prsnl_details">
                                                        <h6 className='customer_prsnl_details_h6'>Dagruel Manulo</h6>
                                                        <p className='customer_prsnl_details_p'>Sydney, Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={4}>
                                        <Card>
                                            <Card.Body>
                                                <img className='invertedCommasImg' src={invertedCommas} alt="" />
                                                <h6 className='invertedCommas_h6'>For the material and the chair as we expected it's good.</h6>
                                                <p className='invertedCommas_p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                                                <div className="customer_details">
                                                    <div className="customer_image">
                                                        <img className='customer_img' src={about_us_img2} alt="" />
                                                    </div>
                                                    <div className="customer_prsnl_details">
                                                        <h6 className='customer_prsnl_details_h6'>Dagruel Manulo</h6>
                                                        <p className='customer_prsnl_details_p'>Sydney, Australia</p>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            {/* Customer_Review Carousel Ends*/}

            <Subscribe/>

            <Footer/>
        </>
    )
}
