import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="containers">
            {<Row className="header-all">
                <Col xs={12} lg={12}>
                    <div className="home-description p-4">
                        <h1 className="title">
                            RACE IN TO
                        </h1>
                        <p className="p-title">
                            Book a Super Bike
                        </p>
                        <p className="p-title">
                            Every ride turns into preparation for the next race with the stret legal
                        </p>
                        <Button className="btn-visit p-2">Explore Places</Button>
                    </div>
                </Col>


            </Row>}

        </div>
    );
};

export default Banner;
