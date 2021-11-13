import React, { useEffect, useState } from 'react';
import { Button, Spinner, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div>
            {services.length === 0 ?
                <Button className="my-5 " variant="primary">
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button> :
                <div id="services" className="container">

                    <h2 className="my-5 pb-3 border-bottom border-3 border-success">Best Bikes in Bangladesh</h2>
                    <Row xs={1} md={2} lg={3} >
                        {
                            services.slice(0, 6).map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </Row>
                </div>
            }
        </div>
    );
};

export default Services;