import React from "react";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import First from "../Part/First";
import { Row, Col } from "react-bootstrap";


const Navbara = () => {
    return (
        <>
            <section className="nav1">
                <Row>
                    <Navbar variant="dark" className="navbar d-flex justify-content-center">
                        <Navbar.Brand href="#home" className="font-weight-bold text-center display-1 mx-4">
                            {/* <i class="fa-solid fa-house-circle-check fa-2x text-primary"></i> */}
                            <h4 className="head text-center align-top mx-2 display-6">
                                5 Element
                            </h4>
                            <h5 className=" head text-center align-top mx-2 display-8">costfinder</h5>
                            <i class="fa-solid fa-hand-holding-dollar  fa-2x text-primary"></i>
                        </Navbar.Brand>
                    </Navbar>
                </Row>
                <Row>
                    <div className="d-flex">
                        <Col sm={2}>
                            <span>
                                <i class="fa-solid fa-1 fa-2x"></i>
                            </span>
                        </Col>
                        <Col sm={2}>
                            <span>
                                <i class="fa-solid fa-2 fa-2x "></i>
                            </span>
                        </Col>
                        <Col sm={2}>
                            <span>
                                <i class="fa-solid fa-3 fa-2x"></i>
                            </span>
                        </Col>
                    </div>
                </Row>
            </section>
            <First/>
        </>
    )
}

export default Navbara;

