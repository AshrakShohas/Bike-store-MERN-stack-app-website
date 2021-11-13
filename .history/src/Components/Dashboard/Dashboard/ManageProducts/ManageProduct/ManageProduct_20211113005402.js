import React from 'react';
import './ManageProduct.css'
import { Link } from 'react-router-dom';

const ManageProduct = (props) => {
    const { _id, name, img, price } = props?.mainservice;
    return (
        // single service 
        <div className="container">
            <div className="row g-0 border border-warning mb-5 p-1 ">
                <div className="col-md-4 ">
                    <img src={img} className="img-fluid rounded-start" width="150px" alt="..." />
                </div>
                <div className="col-md-8 px-5 d-flex align-items-center ">
                    <div className="card-body ">
                        <h5 className="card-title">{name}</h5>
                        <p><small>Product ID {_id}</small></p>
                        <p>Cost : &#2547; {price}</p>
                    </div>
                    <Link ><button className="btn-danger px-4 py-1 rounded-2 border-0" onClick={() => props?.handelDeleteOrder(_id)}>Delete</button></Link>
                </div>

            </div>

        </div>



    );
};

export default ManageProduct;