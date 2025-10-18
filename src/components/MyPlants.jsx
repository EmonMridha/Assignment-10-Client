import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";


const MyPlants = () => {

    const { user } = useContext(AuthContext);
    const [plants, setPlants] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/userPlants/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setPlants(data);
                    console.log(data);
                })
        }
    },[user])

    


    return (
        <div>

        </div>
    );
};

export default MyPlants;