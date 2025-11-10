import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const AddPlant = () => {
    const { user } = useContext(AuthContext); // get logged in user from AuthProvider

    const handleAddPlant = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newPlant = Object.fromEntries(formData.entries());
        console.log(newPlant);

        // send plant data to the server
        fetch('https://assignment-10-server-topaz-two.vercel.app/plants', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPlant)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "New plant data has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
            <form onSubmit={handleAddPlant} className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
                    Add Plant
                </h2>


                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Image URL</label>
                    <input
                        type="url"
                        name='imageUrl'
                        placeholder="Enter image URL"
                        className="input input-bordered w-full"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Plant Name</label>
                    <input
                        type="text"
                        name='name'
                        placeholder="Enter plant name"
                        className="input input-bordered w-full"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Category</label>
                    <select className="select select-bordered w-full" name='category'>
                        <option disabled selected>Select Category</option>
                        <option>Succulent</option>
                        <option>Fern</option>
                        <option>Flowering</option>
                        <option>Herb</option>
                        <option>Cactus</option>
                    </select>
                </div>


                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Description</label>
                    <textarea
                        name='description'
                        placeholder="Write a short description"
                        className="textarea textarea-bordered w-full"
                        rows="3"
                    ></textarea>
                </div>


                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Care Level</label>
                    <select className="select select-bordered w-full" name='careLevel'>
                        <option disabled selected>Select Care Level</option>
                        <option>Easy</option>
                        <option>Moderate</option>
                        <option>Difficult</option>
                    </select>
                </div>


                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Watering Frequency</label>
                    <input
                        type="text"
                        placeholder="e.g., every 3 days"
                        className="input input-bordered w-full"
                        name='wateringFrequency'
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Last Watered Date</label>
                    <input type="date" name='lastWateredDate' className="input input-bordered w-full" />
                </div>


                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Next Watering Date</label>
                    <input type="date" name='nextWateringDate' className="input input-bordered w-full" />
                </div>


                <div className="mb-6">
                    <label className="block text-black font-medium mb-1">Health Status</label>
                    <input
                        type="text"
                        name='healthStatus'
                        placeholder="e.g., healthy, wilting"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="mb-6">
                    <label className="block font-medium text-black mb-1">Email</label>
                    <input
                        type="email"
                        name='email'
                        placeholder="e.g., healthy, wilting"
                        className="input input-bordered w-full"
                        value={user?.email || ''}
                        readOnly
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-black font-medium mb-1">User Name</label>
                    <input
                        type="text"
                        name='userName'
                        placeholder="e.g., healthy, wilting"
                        className="input input-bordered w-full"
                        value={user?.displayName || ''}
                        readOnly
                    />
                </div>


                <button
                    type="submit"
                    className="btn btn-success w-full hover:bg-green-700 text-white font-semibold"
                >
                    Submit
                </button>
            </form>
        </div>

    );
};

export default AddPlant;