import React from 'react';
import { Link } from 'react-router';

const NewPlant = ({plant}) => {
    const {_id} = plant;
   
    return (
        <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{plant.name}</h2>
                <p>Next Watering Date: {plant.nextWateringDate}</p>
                <div className="card-actions justify-end">
                    <Link to={`details2/${_id}`} className="btn btn-primary" >View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default NewPlant;