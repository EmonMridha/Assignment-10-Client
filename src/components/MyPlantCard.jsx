import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyPlantCard = ({ plant, plants, setPlants }) => {
    const { careLevel, category, description, healthStatus, image, lastWateredDate, name, nextWateringDate, wateringFrequency, _id } = plant;
    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-10-server-topaz-two.vercel.app/plants/${id}`, {
                    method: 'DELETE'
                }
                )
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingPlants = plants.filter(p => p._id !== id);
                            setPlants(remainingPlants)
                    })

            }
        });

    }
    return (
        <div class="max-w-4xl mx-auto bg-white my-20 shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row">

            <div class="md:w-1/2">
                <img
                    src={image}
                    alt="Aloe Vera"
                    class="w-full h-64 md:h-full object-cover"
                />
            </div>


            <div class="p-6 md:w-1/2 flex flex-col justify-between">

                <div>
                    <h2 class="text-2xl font-bold text-green-800 mb-2">{name}</h2>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">{careLevel}</span>
                        <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">{category}</span>
                        <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Water every {wateringFrequency} days</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <p class="text-gray-500 text-sm">Health Status</p>
                            <p class="font-semibold text-black">{healthStatus}</p>
                        </div>
                        <div>
                            <p class="text-gray-500 text-sm">Watering Frequency</p>
                            <p class="font-semibold text-black">Every {wateringFrequency} days</p>
                        </div>
                        <div>
                            <p class="text-gray-500 text-sm">Care Level</p>
                            <p class="font-semibold text-black">{careLevel}</p>
                        </div>
                        <div>
                            <p class="text-gray-500 text-sm">Category</p>
                            <p class="font-semibold text-black">{category}</p>
                        </div>
                    </div>

                    <div class="mb-4">
                        <p class="text-gray-500 text-sm">Description</p>
                        <p class="text-gray-700">
                            {description}
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <p class="text-gray-500 text-sm">Last Watered Date</p>
                            <p class="font-semibold text-black">{lastWateredDate}</p>
                        </div>
                        <div>
                            <p class="text-gray-500 text-sm">Next Watering Date</p>
                            <p class="font-semibold text-green-700">{nextWateringDate}</p>
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-between">

                    <div class="flex gap-2">
                        <Link to='/allPlants' class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition">Back</Link>
                        <Link className='btn border-none bg-pink-600' to={`/update/${_id}`}>Update</Link>
                        <Link onClick={() => handleDelete(_id)} className='btn border-none bg-red-800'>Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPlantCard;