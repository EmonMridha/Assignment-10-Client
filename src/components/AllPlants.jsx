import { Link, useLoaderData, useNavigation } from 'react-router';
import Spinner from './Spinner';

const AllPlants = () => {
    const fetchedPlants = useLoaderData();
    const navigation = useNavigation();

    const sortedPlants = [...fetchedPlants].sort((a,b) => {
        const parseDate = (dateStr) => {
            if (!dateStr) return null;
            const [day, month, year] = dateStr.split('/');
            return new Date(`${year}-${month}-${day}`);
        };
        const dateA = parseDate(a.nextWateringDate);
        const dateB = parseDate(b.nextWateringDate);
        if (!dateA) return 1;
        if (!dateB) return -1;
        return dateA - dateB;
    }
    )

    if (navigation.state === 'loading') {
        return <Spinner></Spinner>;
    }
    return (
        <div>
            <h1 className='text-white text-center text-4xl mt-30 mb-[-100px]'>All Added Plants</h1>
            <div className=' mx-auto'>
                <table className="table my-50">
                    <thead>
                        <tr>
                            <th>Plant Name</th>
                            <th>Category</th>
                            <th>Next Water</th>
                            <th>Watering Frequency</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedPlants.map(plant => (
                            <tr key={plant._id}>
                                <td className='font-bold'>{plant.name}</td>
                                <td>{plant.category}</td>
                                <td>{plant.nextWateringDate ?plant.nextWateringDate : 'N/A'}</td>
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