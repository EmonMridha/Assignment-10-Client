import React from 'react';

const BeginnerFriendlyPlants = () => {

    const plants = [
        {
            name: "Snake Plant",
            description: "Tolerates low light and infrequent watering — ideal for busy beginners.",
            image: "public/pexels-nietjuhart-776656.jpg",
        },
        {
            name: "Aloe Vera",
            description: "Loves sunlight and needs watering only when soil is dry.",
            image: "public/pexels-elletakesphotos-1549201.jpg",
        },
        {
            name: "Peace Lily",
            description: "Thrives in indirect light and adds natural beauty indoors.",
            image: "public/pexels-thepaintedsquare-2239673.jpg",
        },
        {
            name: "Spider Plant",
            description: "Grows easily in any condition and produces baby plants effortlessly.",
            image: "public/pexels-nietjuhart-776656.jpg",
        },
    ];
    return (
        <div>
            <section className="my-50 px-4 md:px-10 lg:px-20">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-green-700">
                    🌿 Beginner-Friendly Plants
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {plants.map((plant, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={plant.image}
                                alt={plant.name}
                                className="w-full h-48 sm:h-56 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-lg md:text-xl font-semibold mb-2 text-green-800">
                                    {plant.name}
                                </h3>
                                <p className="text-sm text-gray-600">{plant.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BeginnerFriendlyPlants;