import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData } from 'react-router';

const Update = () => {
    const { _id, imageUrl, name, wateringFrequency, lastWateredDate, nextWateringDate, healthStatus, email, userName, category, careLevel, description } = useLoaderData();
    const handleUpdatePlant = e => {
        e.preventDefault();
        const form = e.target;
        const updatedData = new FormData(form);
        const updatedPlant = Object.fromEntries(updatedData)
        console.log(updatedPlant);


        //  send updated plant data to the server 

        fetch(`https://assignment-10-server-topaz-two.vercel.app/plants/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPlant)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
            <form onSubmit={handleUpdatePlant} className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
                    Update Plant
                </h2>

                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Image URL</label>
                    <input
                        type="url"
                        name='imageUrl'
                        placeholder="Enter image URL"
                        className="input input-bordered w-full"
                        defaultValue={imageUrl}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Plant Name</label>
                    <input
                        type="text"
                        name='name'
                        placeholder="Enter plant name"
                        defaultValue={name}
                        className="input input-bordered w-full"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Category</label>
                    <select defaultValue={category} name='category' className="select select-bordered w-full ">
                        <option disabled >Select Category</option>
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
                        defaultValue={description}
                        placeholder="Write a short description"
                        className="textarea textarea-bordered w-full"
                        rows="3"
                    ></textarea>
                </div>


                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Care Level</label>
                    <select name='careLevel' defaultValue={careLevel} className="select select-bordered w-full">
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
                        defaultValue={wateringFrequency}
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Last Watered Date</label>
                    <input defaultValue={lastWateredDate} type="date" name='lastWateredDate' className="input input-bordered w-full" />
                </div>


                <div className="mb-4">
                    <label className="block text-black font-medium mb-1">Next Watering Date</label>
                    <input defaultValue={nextWateringDate} type="date" name='nextWateringDate' className="input input-bordered w-full" />
                </div>


                <div className="mb-6">
                    <label className="block text-black font-medium mb-1">Health Status</label>
                    <input
                        defaultValue={healthStatus}
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
                        defaultValue={email}


                    />
                </div>

                <div className="mb-6">
                    <label className="block text-black font-medium mb-1">User Name</label>
                    <input
                        type="text"
                        name='userName'
                        placeholder="e.g., healthy, wilting"
                        className="input input-bordered w-full"
                        defaultValue={userName}

                    />
                </div>


                <button
                    type="submit"
                    className="btn btn-success w-full hover:bg-green-700 text-white font-semibold"
                >
                    Update Plant
                </button>
            </form>
        </div>
    );
};

export default Update;