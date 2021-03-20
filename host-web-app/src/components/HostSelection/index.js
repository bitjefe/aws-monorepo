import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import * as ROUTES from '../../constants/routes';

import { AiOutlineGlobal } from "react-icons/ai"
import { FiShoppingBag } from "react-icons/fi"
import { BiBuildingHouse } from "react-icons/bi"
import { RiHotelBedLine } from "react-icons/ri"
import { IoAmericanFootballOutline } from "react-icons/io5"

function HostSelectionPage() {
    let history = useHistory();
    const [hostType, setHostType] = useState("")

    function handleContinue() {
        history.push({
            pathname: ROUTES.TELLUSMORE,
            state: {
                hostType:hostType
            }
        })
    }
    
    let listingDescHandler = [];
    
    switch (hostType) {
        case "Accommodation":
            listingDescHandler.push("Short Term Rental, AirBnb, VRBO")
            break;
        case "Real Estate":
            listingDescHandler.push("Listing Agents, Commercial, Marketing")
            break;
        case "Retail":
            listingDescHandler.push("Shopping, Storefronts")
            break;
        case "Arts, Ent & Rec":
            listingDescHandler.push("Sporting Events, Concerts, Shows")
            break;
        case "Transportation":
            listingDescHandler.push("Planes, Trains, RideShares")
            break;
        default:
            listingDescHandler.push("Select a host type below")
    }
    
    return (
        <Container>
            <Row className="vh-100 align-items-center text-center">
                <Col>
                    <Row>
                        <Col className="w-100 text-center">
                            <h2 className="p-3">What best describes your listing?</h2>
                            <p className="p-3">{listingDescHandler}</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={10} md={4} lg={3} xl={2}>
                            <Card
                                className={hostType === "Accommodation" ? "mt-3 w-full bg-light active" : "mt-3 w-full bg-light"}
                                style={{height:200, cursor:"pointer"}}
                                onClick={() => setHostType("Accommodation")}
                                >
                                <Card.Body>
                                    <RiHotelBedLine size={48} className="m-3"/>
                                    <Card.Text>
                                        Accomodation
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Form>
                                        <Form.Row className="align-items-center">
                                            <Col xs="12">
                                                <Form.Check
                                                  custom
                                                  type="radio"
                                                  className="text-center"
                                                  checked={hostType === "Accommodation"} 
                                                />
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xs={10} md={4} lg={3} xl={2}>
                            <Card
                                className={hostType === "Real Estate" ? "mt-3 w-full bg-light active" : "mt-3 w-full bg-light"}
                                style={{height:200, cursor:"pointer"}}
                                onClick={() => setHostType("Real Estate")}
                                >
                                <Card.Body>
                                    <BiBuildingHouse size={48} className="m-3" />
                                    <Card.Text>
                                        Real Estate
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Form>
                                        <Form.Row className="align-items-center">
                                            <Col xs="12">
                                                <Form.Check
                                                  custom
                                                  type="radio"
                                                  className="text-center"
                                                  checked={hostType === "Real Estate"} 
                                                />
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xs={10} md={4} lg={3} xl={2}>
                            <Card
                                className={hostType === "Retail" ? "mt-3 w-full bg-light active" : "mt-3 w-full bg-light"}
                                style={{height:200, cursor:"pointer"}}
                                onClick={() => setHostType("Retail")}
                                >
                                <Card.Body>
                                    <FiShoppingBag size={48} className="m-3"/>
                                    <Card.Text>
                                        Retail
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Form>
                                        <Form.Row className="align-items-center">
                                            <Col xs="12">
                                                <Form.Check
                                                  custom
                                                  type="radio"
                                                  className="text-center"
                                                  checked={hostType === "Retail"} 
                                                />
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xs={10} md={4} lg={3} xl={2}>
                            <Card
                                className={hostType === "Arts, Ent & Rec" ? "mt-3 w-full bg-light active" : "mt-3 w-full bg-light"}
                                style={{height:200, cursor:"pointer"}}
                                onClick={() => setHostType("Arts, Ent & Rec")}
                                >
                                <Card.Body>
                                    <IoAmericanFootballOutline size={48} className="m-3"/>
                                    <Card.Text>
                                        Arts, Ent & Rec
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Form>
                                        <Form.Row className="align-items-center">
                                            <Col xs="12">
                                                <Form.Check
                                                  custom
                                                  type="radio"
                                                  className="text-center"
                                                  checked={hostType === "Arts, Ent & Rec"} 
                                                />
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xs={10} md={4} lg={3} xl={2}>
                            <Card
                                className={hostType === "Transportation" ? "mt-3 w-full bg-light active" : "mt-3 w-full bg-light"}
                                style={{height:200, cursor:"pointer"}}
                                onClick={() => setHostType("Transportation")}
                                >
                                <Card.Body>
                                    <AiOutlineGlobal size={48} className="m-3"/>
                                    <Card.Text>
                                        Transportation
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0">
                                    <Form>
                                        <Form.Row className="align-items-center">
                                            <Col xs="12">
                                                <Form.Check
                                                  custom
                                                  type="radio"
                                                  className="text-center"
                                                  checked={hostType === "Transportation"} 
                                                />
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-5">
                            <Button onClick={handleContinue} disabled={hostType === ""}>
                                Continue
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default HostSelectionPage;