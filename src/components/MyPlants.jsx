import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import MyPlantCard from "./myPlantCard";
import Spinner from "./Spinner";


const MyPlants = () => {

    const { user } = useContext(AuthContext);
    const [plants, setPlants] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`http://localhost:3000/userPlants/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setPlants(data); // All plants data added by the logged in user
                })
                .finally(() => setLoading(false))
        }
    }, [user])

    if (loading) {
        return <Spinner></Spinner>
    }


    return (
        <div>
            {
                plants.map(plant => <MyPlantCard key={plant._id} plant={plant}></MyPlantCard>)
            }
        </div>
    );
};

export default MyPlants;