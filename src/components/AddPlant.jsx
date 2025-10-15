import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const AddPlant = () => {

    const {user} = useContext(AuthContext); // Getting current logged in user
    const [formData, setFormData] = useState({
        image: '',
        name: '',
        category: '',
        description: '',
        careLevel: '',
        wateringFrequency: '',
        lastWateredDate: '',
        nextWateringDate: '',
        healthStatus: '',
        email:'',
        userName:''
    });

    useEffect(()=>{
        if(user){
            setFormData(prev=>({
                ...prev,
                email:user.email || '',
                userName: user.displayName || ''
            }))
        }
    },[user])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Plant added:', formData);
        alert('Plant added successfully!');
    };
    return (
        <div className="flex justify-center items-center py-10 bg-base-200 min-h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-3xl"
            >
                <h2 className="text-4xl font-semibold text-red-700 text-center mb-6">Add New Plant</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Image URL */}
                    <div>
                        <label className="block text-black text-sm font-medium mb-1">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Plant Name */}
                    <div>
                        <label className="block text-black text-sm font-medium mb-1">Plant Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter plant name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-black text-sm font-medium mb-1">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="succulent">Succulent</option>
                            <option value="fern">Fern</option>
                            <option value="flowering">Flowering</option>
                            <option value="herb">Herb</option>
                            <option value="cactus">Cactus</option>
                        </select>
                    </div>

                    {/* Care Level */}
                    <div>
                        <label className="block text-black text-sm font-medium mb-1">Care Level</label>
                        <select
                            name="careLevel"
                            value={formData.careLevel}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select Care Level</option>
                            <option value="easy">Easy</option>
                            <option value="moderate">Moderate</option>
                            <option value="difficult">Difficult</option>
                        </select>
                    </div>

                    {/* Watering Frequency */}
                    <div>
                        <label className="block text-black text-sm font-medium mb-1">Watering Frequency</label>
                        <input
                            type="text"
                            name="wateringFrequency"
                            value={formData.wateringFrequency}
                            onChange={handleChange}
                            placeholder="e.g., every 3 days"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Health Status */}
                    <div>
                        <label className="block text-black text-sm font-medium mb-1">Health Status</label>
                        <input
                            type="text"
                            name="healthStatus"
                            value={formData.healthStatus}
                            onChange={handleChange}
                            placeholder="e.g., healthy, wilting"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Last Watered Date */}
                    <div>
                        <label className="block text-black text-sm font-medium mb-1">Last Watered Date</label>
                        <input
                            type="date"
                            name="lastWateredDate"
                            value={formData.lastWateredDate}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Next Watering Date */}
                    <div>
                        <label className="block text-black text-sm font-medium mb-1">Next Watering Date</label>
                        <input
                            type="date"
                            name="nextWateringDate"
                            value={formData.nextWateringDate}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {/* User Email */}
                    <div>
                        <label className="block text-black text-sm font-medium mb-1">User Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            readOnly
                            
                        />
                    </div>
                    {/* User Name */}
                    <div>
                        <label className="block text-black text-sm font-medium mb-1">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            readOnly
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                    <label className="block text-black text-sm font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Write a short description of the plant"
                        className="textarea textarea-bordered w-full h-24"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-8 text-center">
                    <button type="submit" className="btn btn-success w-full md:w-1/2">
                        Add Plant
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPlant;