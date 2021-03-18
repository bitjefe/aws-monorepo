import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function HostSelectionPage() {
    let history = useHistory();
    const [hostType, setHostType] = useState("")

    function handleClick() {
        history.push("/home");
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
                <Col xs={12}>
                    <Row>
                        <Col className="w-100 text-center">
                            <h1 className="p-3">What best describes your listing?</h1>
                            <p className="p-3">{listingDescHandler}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Card
                                border="secondary"
                                style={{height:200, cursor:"pointer"}}
                                onClick={() => setHostType("Accommodation")}
                                >
                                <Card.Body>
                                    <Card.Text>
                                        Accomodation
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                border="secondary"
                                style={{height:200, cursor:"pointer"}}
                                onClick={() => setHostType("Real Estate")}
                                >
                                <Card.Body>
                                    <Card.Text>
                                        Real Estate
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                border="secondary"
                                style={{height:200, cursor:"pointer"}}
                                onClick={() => setHostType("Retail")}
                                >
                                <Card.Body>
                                    <Card.Text>
                                        Retail
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                border="secondary"
                                style={{height:200, cursor:"pointer"}}
                                onClick={() => setHostType("Arts, Ent & Rec")}
                                >
                                <Card.Body>
                                    <Card.Text>
                                        Arts, Ent & Rec
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                border="secondary"
                                style={{height:200, cursor:"pointer"}}
                                onClick={() => setHostType("Transportation")}
                                >
                                <Card.Body>
                                    <Card.Text>
                                        Transportation
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pt-5">
                            <Button onClick={handleClick} disabled={hostType === ""}>
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