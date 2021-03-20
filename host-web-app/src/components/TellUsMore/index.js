import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import * as ROUTES from '../../constants/routes';

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

function TellUsMorePage() {
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false)
    const [hostType, setHostType] = useState("")
    const [businessName, setBusinessName] = useState("")
    const [locations, setLocations] = useState("1")
    const [headquarters, setHeadquarters] = useState("")
    
    useEffect(() => {
        setIsLoading(true)
        let { state } = history.location;
        const hostTypeIn = state && state.hostType;
        hostTypeIn ? setHostType(hostTypeIn) : history.push(ROUTES.HOSTSELECTION);
        setIsLoading(false)
    });

    const handleContinue = (event) => {
        setIsLoading(true)
        history.push({
            pathname: ROUTES.HOME,
            state: {
                hostType:hostType,
                businessName:businessName,
                locations:locations,
                headquarters:headquarters,
            }
        }, () => {
            setIsLoading(false)
        })
    }
    
    return (
        <Container>
            <Row className="vh-100 align-items-center text-center">
                <Col>
                    <Row>
                        <Col />
                        <Col xs={10} lg={8} className="w-100 text-center">
                            <h2 className="p-3">Tell us more about your business</h2>
                            <p className="p-3">
                                We want to make sure Upon is providing you the exact tools for your listing.
                                Fill out the information below so we can tailor our experience to your precise needs.
                            </p>
                        </Col>
                        <Col />
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={10} lg={8}>
                            <Form onSubmit={handleContinue}>
                                <Form.Group controlId="exampleForm.ControlInput1" className="text-left">
                                    <Form.Label>Enter your business name</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        value={businessName}
                                        placeholder="Business name"
                                        className="bg-light"
                                        onChange={e => setBusinessName(e.target.value)}
                                        />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1" className="text-left">
                                    <Form.Label>Select numbers of Locations</Form.Label>
                                    <Form.Control
                                        value={locations}
                                        as="select"
                                        placeholder="Number of locations"
                                        className="bg-light"
                                        onChange={e => setLocations(e.target.value)}
                                        >
                                        <option>1</option>
                                        <option>2-4</option>
                                        <option>5-10</option>
                                        <option>10+</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput2" className="text-left">
                                    <Form.Label>What state are you headquarted in?</Form.Label>
                                    <Form.Control
                                        value={headquarters}
                                        type="text"
                                        placeholder="Illinois"
                                        className="bg-light"
                                        onChange={e => setHeadquarters(e.target.value)}
                                        />
                                </Form.Group>
                                <Row>
                                    <Col className="text-right pt-5 pb-5">
                                        <Button type="submit" disabled={isLoading}>
                                            Continue
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default TellUsMorePage;