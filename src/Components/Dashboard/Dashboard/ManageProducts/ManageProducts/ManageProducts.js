import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct'

const ManageProducts = () => {
    const [services, setServices] = useState([]);
    // fetch the data from JSON file 
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // delete service as like order 
    const handelDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/bikes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully.');
                        const remainingOrders = services.filter(order => order?._id !== id);
                        setServices(remainingOrders);
                    }
                });
        }
    }
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
                <div className="container pb-5">
                    <h1 className="p-2 fw-bold bg-secondary text-white mt-4">Our Bikes</h1>

                    {/* Pass the data to another component using map  */}
                    <div className="row row-cols-1 row-cols-md-1 text-lg-start g-5 mt-5 ">
                        {
                            services.map(mainservice => <ManageProduct
                                mainservice={mainservice}
                                key={mainservice.id}
                                handelDeleteOrder={handelDeleteOrder}
                            ></ManageProduct>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default ManageProducts;