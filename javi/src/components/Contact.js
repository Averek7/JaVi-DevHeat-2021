import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  const handleForm = () => {};

  return (
    <Container className="my-5">
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type="Number" placeholder="Enter your phone No." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Description:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <div className="btnGroup d-flex">
          <Button className="d-block m-auto" variant="secondary" type="submit">
            Submit
          </Button>
          <Button className="d-block m-auto" variant="secondary" type="reset">
            Clear
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;
