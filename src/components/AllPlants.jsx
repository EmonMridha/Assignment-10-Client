import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {
    const fetchedPlants = useLoaderData();
    console.log(fetchedPlants);
    return (
        <div>
            <h1 className='text-white text-center text-4xl mt-30 mb-[-100px]'>All Added Plants</h1>
            <div className=' mx-auto'>
                <table className="table my-50">
                    <thead>
                        <tr>
                            <th>Plant Name</th>
                            <th>Category</th>
                            <th>Watering Frequency</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fetchedPlants.map(plant => (
                            <tr key={plant._id}>
                                <td className='font-bold'>{plant.name}</td>
                                <td>{plant.category}</td>
                                <td>Every {plant.wateringFrequency} days</td>
                                <td>
                                    <Link to={`/plants/${plant._id}`} className="btn btn-sm btn-info">
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllPlants;