import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import db from "../firebase";
import { motion } from "framer-motion";

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -100,
  },
};

// const pageTransition = {
//   duration: 3,
// };

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addr, setAddr] = useState("");
  const [desc, setDesc] = useState("");

  const [loader, setLoader] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setLoader(true);
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        phone: phone,
        addr: addr,
        desc: desc,
      })
      .then(() => {
        alert("Request Submit Success !");
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setPhone("");
    setAddr("");
    setDesc("");
  };

  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <Container className="my-3">
        <h3 className="text-center m-2">Contact Form ☎️</h3>
        <p className="text-muted text-center">Fill the form correctly</p>
        <Form onSubmit={handleForm} className="my-3">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Enter your phone No."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={addr}
              onChange={(e) => setAddr(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <div className="btnGroup d-flex">
            <Button
              className="d-block m-auto"
              variant="secondary"
              type="submit"
              style={{ background: loader ? "#ccc" : "rgb(2,2,110)" }}
            >
              Submit
            </Button>
            <Button className="d-block m-auto" variant="secondary" type="reset">
              Clear
            </Button>
          </div>
        </Form>
      </Container>
    </motion.div>
  );
};

export default Contact;
