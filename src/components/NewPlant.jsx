import React from 'react';

const NewPlant = ({plant}) => {

    return (
        <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{plant.name}</h2>
                <p>Next Watering Date: {plant.nextWateringDate}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default NewPlant;