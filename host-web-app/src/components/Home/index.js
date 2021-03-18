import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import { Container, Button, Form } from 'react-bootstrap';

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
    
    console.log(data)
    const apiData = await API.post('contact', '/new-host', data);
    console.log({ apiData })
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
    return (
        <Container>
            <h3>Get in touch</h3>
            <br />
            <Form>
                <Form.Group>
                    <Form.Label>HostType</Form.Label>
                    <Form.Control placeholder="Host Type" onChange={e => updateFormState('hostType', e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control placeholder="Business Name" onChange={e => updateFormState('businessName', e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Locations</Form.Label>
                    <Form.Control placeholder="Locations" onChange={e => updateFormState('locations', e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control placeholder="State" onChange={e => updateFormState('state', e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Email" onChange={e => updateFormState('email', e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control placeholder="Message" onChange={e => updateFormState('message', e.target.value)} />
                </Form.Group>
                <Button onClick={submitContactInfo}>Send a message</Button>
            </Form>
        </Container>
    );
}

export default HomePage;