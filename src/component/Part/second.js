import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
// import Third from "./";
import { Link } from "react-router-dom";

const Second = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section>
        <Row>
          <div className="col">
            <Card className="m-5 p-4" style={{ width: "400px", height: "150px" }}>
              <Row>
                <Col sm={8}>Living Room</Col>
                <Col sm={3}>
                  <Form>
                    <Form.Check type="switch" id="custom-switch" />
                  </Form>
                </Col>
              </Row>

              <Row>
                <Col sm={8}>Kitchen</Col>
                <Col sm={3}>
                  <Form>
                    <Form.Check type="switch" id="custom-switch" />
                  </Form>
                </Col>
              </Row>

              <Row>
                <Col sm={8}>Master Bedroom</Col>
                <Col sm={3}>
                  <Form>
                    <Form.Check type="switch" id="custom-switch" />
                  </Form>
                </Col>
              </Row>

              <Row>
                <Col sm={8}>Master Bathroom</Col>
                <Col sm={3}>
                  <Form>
                    <Form.Check type="switch" id="custom-switch" />
                  </Form>
                </Col>
              </Row>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "600px" }}>
              <Card.Img
                variant="top"
                src="http://costfinder.consdeployer.com/assets/productselection/bathroombg.jpg"
              />
              <Card.Body>
                <Container className="align-items-center">
                  <div >
                    <Form.Check.Input />
                    <Form.Check.Label>Enable Living Room</Form.Check.Label>
                  </div>
                </Container>
                <p className="text-muted ">
                  How would you like to spend on this room?
                </p>
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      className="d-inline-flex mx-2 "
                    />
                    <Form.Check.Label>Basic</Form.Check.Label>
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      className="d-inline-flex mx-2 "
                    />
                    <Form.Check.Label>Standard</Form.Check.Label>
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      className="d-inline-flex mx-2"
                    />
                    <Form.Check.Label>Lavish</Form.Check.Label>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Row>
              <Card
                style={{ width: "18rem" }}
                className="shadow-lg mx-auto  bg-white rounded"
              >
                <Card.Body>
                  <p className="text-center">Net Estimate ₹ 0</p>
                  <h6 className="text-muted text-sm-center">
                    Estimate includes labour cost + material cost
                  </h6>
                  <button className="btn btn-success  px-4 py-2 ">
                    Get Detailed Estimate
                  </button>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <div className="container" style={{ width: "18rem" }}>
                <p>
                  A variation upto + or - 15% could occur in cases where your
                  space has specific requirements not accounted in the
                  Costfinder. The CostFinder uses current optimised market rates
                  to budget your dream space.
                </p>
              </div>
            </Row>

            <Row>
              <img
                src="http://costfinder.consdeployer.com/assets/productselection/helpbulb.png"
                alt=""
                style={{ width: "10rem" }}
                className="mx-auto"
              />

              <div className="container">
                <Button
                  variant="primary"
                  onClick={handleShow}
                  className="btn btn-secondary  mx-auto"
                >
                  Help
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <div className="container">
                      <h2 className="text-center">
                        Help<i class="fa-regular fa-circle-question"></i>
                      </h2>
                    </div>
                  </Modal.Header>
                  <Modal.Footer>
                    <div className="container">
                      <Nav.Item className="text-center ">
                        <Nav.Link href="/home" className="my-2 text-primary">
                          <i class="fa-solid fa-align-justify"></i>Want us to
                          Fill the Form
                        </Nav.Link>
                        <Nav.Link
                          eventKey="link-1"
                          className="my-2  text-danger"
                        >
                          <i class="fa-solid fa-book-open-reader"></i>Read about
                          COST FINDER{" "}
                          <i class="fa-solid fa-hand-holding-dollar"></i>
                        </Nav.Link>
                        <Nav.Link
                          eventKey="link-2"
                          className="my-2  text-success"
                        >
                          <i class="fa-brands fa-whatsapp"></i>Reach us on
                          Whatsapp
                        </Nav.Link>
                      </Nav.Item>
                    </div>
                  </Modal.Footer>
                </Modal>
              </div>
            </Row>
          </div>
        </Row>
      </section>
    </>
  );
};

export default Second;
