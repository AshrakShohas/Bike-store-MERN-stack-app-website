import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Explore from './../Explore/Explore';

const Explores = () => {
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

                    <h2 className="m-5 mt-5">Best Bikes in Bangladesh</h2>
                    <div className="row row-cols-1 row-cols-md-1 text-lg-start g-5 mt-5 ">

                        {
                            services.map(service => <Explore
                                key={service.id}
                                service={service}
                            ></Explore>)
                        }
                    </div>
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Explores;