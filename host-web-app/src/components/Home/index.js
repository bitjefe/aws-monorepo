import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import * as ROUTES from '../../constants/routes';

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import { HiOutlineMail } from "react-icons/hi"
import { HiOutlineCode } from "react-icons/hi"
import { MdPeopleOutline } from "react-icons/md"

async function submitContactInfo() {
    const data = {
        body: {
            hostType:formState.hostType,
            businessName:formState.businessName,
            locations:formState.locations,
            state:formState.state,
            email:formState.email,
            message:formState.message
        }
    };
    const apiData = await API.post('contact', '/new-host', data);
    alert("Mail Sent");
}

const formState = { 
    hostType:"",
    businessName:"",
    locations:"",
    state:"",
    email:"",
    message:""
}

function updateFormState(key, value) {
    formState[key] = value;
}


function HomePage() {
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false)
    const [message] = useState("")
    const [email] = useState("")
    
    useEffect(() => {
        setIsLoading(true)
        let { state } = history.location;
        const hostTypeIn = state && state.hostType;
        const businessNameIn = state && state.businessName;
        const locationsIn = state && state.locations;
        const headquartersIn = state && state.headquarters;
        
        const isValidInput = (hostTypeIn && businessNameIn && locationsIn && headquartersIn)
        
        if (isValidInput) {
            updateFormState('hostType', hostTypeIn);
            updateFormState('businessName', businessNameIn);
            updateFormState('locations', locationsIn);
            updateFormState('state', headquartersIn);
            setIsLoading(false)
        } else {
            history.push(ROUTES.HOSTSELECTION)
            setIsLoading(false)
        }
    });
  
  
    return (
        <Container>
            <Row className="vh-100 align-items-center text-center">
                <Col>
                    <Row xs={12} lg={8} className="mb-1">
                        <Col className="w-full text-center">
                            <h2 className="pb-3">Let's get connected</h2>
                        </Col>
                    </Row>
                    <Row xs={12} lg={8} className="mb-4">
                        <Col>
                            <HiOutlineMail size={36} className="m-3"/>
                            <p style={{fontSize:14}}>Fast, easy sign up</p>
                        </Col>
                        <Col className="w-100 text-center">
                            <HiOutlineCode size={36} className="m-3"/>
                            <p style={{fontSize:14}}>Build your Upon Listing</p>
                        </Col>
                        <Col>
                            <MdPeopleOutline size={36} className="m-3"/>
                            <p style={{fontSize:14}}>Welcome Guests</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={10} lg={8}>
                            <Form>
                                <Form.Group 
                                    controlId="Form.ControlTextarea1"
                                    className="text-left"
                                    >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        placeholder="Enter your email address"
                                        type="email"
                                        className="bg-light"
                                        onChange={e => updateFormState('email', e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group
                                    controlId="Form.ControlTextarea2"
                                    className="text-left"
                                    >
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        className="bg-light"
                                        placeholder="Enter a short message about your listing"
                                        onChange={e => updateFormState('message', e.target.value)}
                                    />
                                </Form.Group>
                                <Row>
                                    <Col className="text-right pt-5 pb-5">
                                        <Button onClick={submitContactInfo} disabled={isLoading}>
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;