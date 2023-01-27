import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Second from "./second";
import { Link } from "react-router-dom";
// import Second from "./Second";


const First = () => {
    const [firstPosition, setfirstPosition] = useState("400");
    const [bathRoom, setbathRoom] = useState(1);

    const addBathroom = () => {
        setbathRoom(bathRoom + 1);
        setfirstPosition(Number(firstPosition) + Number(120));
    };

    const subBathroom = () => {
        if (bathRoom > 0) {
            setbathRoom(bathRoom - 1);
            setfirstPosition(Number(firstPosition) - Number(120));
        }
    };

    const [bedrooms, setBedrooms] = useState(1);
    const addBedrooms = () => {
        setBedrooms(bedrooms + 1);
        setfirstPosition(Number(firstPosition) + Number(40));
    };

    const subBedrooms = () => {
        if (bedrooms > 0) {
            setBedrooms(bedrooms - 1);
            setfirstPosition(Number(firstPosition) - Number(40));
        } else {
            setBedrooms(0);
            setfirstPosition(510);
        }
    };

    const [value, setValue] = useState(" ");

    const val = () => {
        if (value === "") {
            setValue("Your field is empty");
        } else {
            setValue("Not empty");
        }

    };


    return (
        <>
            <section>
                <div className="page1 text-center my-5">
                    <h5 className="display-4 ">Budget your Spend</h5>
                    <p>
                        CostFinder helps you figure out your average spend based on the
                        elements you like in your space
                    </p>
                </div>

                <div className="container my-5">
                    <div className="row">
                        <Card style={{ width: "500px" }} className="col mx-3">
                            <Card.Body>

                                <Card.Subtitle className="mb-2 text-muted">
                                    Start with how many Bedrooms do you have?
                                </Card.Subtitle>

                                <InputGroup className="mb-3">
                                    <button variant="success" onClick={subBedrooms}>
                                        -
                                    </button>
                                    <Form.Control placeholder={bedrooms} />
                                    <button variant="success" onClick={addBedrooms}>
                                        +
                                    </button>
                                </InputGroup>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: "500px" }} className="col mx-3">
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Start with how many Baathrooms do you have?
                                </Card.Subtitle>
                                <InputGroup className="mb-3">
                                    <button variant="success" onClick={subBathroom}>
                                        -
                                    </button>
                                    <Form.Control placeholder={bathRoom} />
                                    <button variant="success" onClick={addBathroom}>
                                        +
                                    </button>
                                </InputGroup>
                            </Card.Body>
                        </Card>


                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <Card style={{ width: "800px" }} className="mx-auto">

                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted text-center display-8 assumed">
                                Assumed Carpet Area (Sq. ft.)=
                                <h4 className="">{firstPosition} sq.ft</h4>
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-4 text-muted text-center display-8 my-5">
                                Please enter your Carpet Area (Sq. ft.){" "}
                            </Card.Subtitle>
                            <InputGroup
                                className="m-auto"
                                style={{ width: "150px", height: "25px" }}
                            >
                                <Form.Control type="number" required placeholder={value} />
                            </InputGroup>
                            <p className="text-center text-danger">{val}</p>
                        </Card.Body>
                    </Card>
                </div>
            </section>

            <section>
                <h5 className="text-center mt-5 mb-3 ">Assumed Configuration</h5>
                <div className=" container">
                    <Card className="mx-auto shadow m-4"
                        style={{ width: "600px", height: "200px" }}>
                        <Row>
                            <Col >
                                <img
                                    src="http://costfinder.consdeployer.com/assets/roomselection/livingroom.PNG"
                                    alt=""
                                    style={{ width: "200px", height: "200px" }}
                                    className="mx-5"
                                />
                            </Col>
                            <Col >
                                <h4 className="my-5">Living Room</h4>
                            </Col>
                            <Col sm={2}>
                                <h4 className="my-5">1</h4>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="mx-auto shadow m-4"
                        style={{ width: "600px", height: "200px" }}>
                        <Row>
                            <Col >
                                <img
                                    src="http://costfinder.consdeployer.com/assets/roomselection/bedroom.png"
                                    alt=""
                                    style={{ width: "200px", height: "200px" }}
                                    className="mx-5"
                                />
                            </Col>
                            <Col  >
                                <h4 className="my-5">BedRoom</h4>
                            </Col>
                            <Col sm={2}>
                                <h4 className="my-5" >1</h4>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="mx-auto shadow m-4"
                        style={{ width: "600px", height: "200px" }}>
                        <Row>
                            <Col>
                                <img
                                    src="http://costfinder.consdeployer.com/assets/roomselection/bathroom.png"
                                    alt=""
                                    style={{ width: "200px", height: "200px" }}
                                    className="mx-5"
                                />
                            </Col>
                            <Col >
                                <h4 className="my-5">BathRoom</h4>
                            </Col>
                            <Col sm={2}>
                                <h4 className="my-5">1</h4>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="mx-auto shadow m-4"
                        style={{ width: "600px", height: "200px" }}>
                        <Row>
                            <Col >
                                <img
                                    src="./image/kitch.png'"
                                    alt=""
                                    style={{ width: "200px", height: "200px" }}
                                    className="mx-5"
                                />
                            </Col>
                            <Col >
                                <h4 className="my-5">kitchen</h4>
                            </Col>
                            <Col sm={2} >
                                <h4 className="my-5">1</h4>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </section>


            <section>
                <div className="container">
                    <Link to="/second" className="btn btn-success   px-5 py-3 m-3">
                        Next 
                    </Link>
                </div>
            </section>

        </>
    )

};

export default First;