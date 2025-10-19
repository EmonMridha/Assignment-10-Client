import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import MyPlantCard from "./myPlantCard";


const MyPlants = () => {

    const { user } = useContext(AuthContext);
    const [plants, setPlants] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/userPlants/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setPlants(data); // All plants data added by the logged in user
                })
        }
    }, [user])


    return (
        <div>
            {
                plants.map(plant => <MyPlantCard key={plant._id} plant={plant}></MyPlantCard>)
            }
        </div>
    );
};

export default MyPlants;