import React from 'react';
import NewPlant from './NewPlant';
import TopPlantMistakes from './TopPlantMistakes';
import BeginnerFriendlyPlants from './BeginnerFriendlyPlants';

const Home = () => {
    return (
        <div>
           
            <div className="flex justify-center my-10 px-2 md:px-10">
                <div className="carousel w-full md:w-10/12 rounded-2xl overflow-hidden shadow-lg">
                   
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co.com/8nSrgZZP/pexels-agnieszka-palmowska-23342-631909.jpg"
                            alt="Nature Home"
                            className="w-full h-[250px] sm:h-[400px] md:h-[600px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center px-6 md:px-12 text-white">
                            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3">Bring Nature Home</h2>
                            <p className="max-w-md text-sm sm:text-base md:text-lg">
                                Discover the best indoor plants for your space. Make plants your best friend at home.
                            </p>
                        </div>
                        <a href="#slide3" className="btn btn-circle absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2">❮</a>
                        <a href="#slide2" className="btn btn-circle absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2">❯</a>
                    </div>

                   
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="public/pexels-gochrisgoxyz-1477166.jpg"
                            alt="Plant Care Tips"
                            className="w-full h-[250px] sm:h-[400px] md:h-[600px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center px-6 md:px-12 text-white">
                            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3">Top Plant Care Tips</h2>
                            <p className="max-w-md text-sm sm:text-base md:text-lg">
                                Water regularly, keep in medium sunlight, and let them enjoy fresh air to stay healthy.
                            </p>
                        </div>
                        <a href="#slide1" className="btn btn-circle absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2">❮</a>
                        <a href="#slide3" className="btn btn-circle absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2">❯</a>
                    </div>

                   
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="public/pexels-mdsnmdsnmdsn-788485.jpg"
                            alt="Beginner-Friendly Plants"
                            className="w-full h-[250px] sm:h-[400px] md:h-[600px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center px-6 md:px-12 text-white">
                            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3">Beginner-Friendly Plants</h2>
                            <p className="max-w-md text-sm sm:text-base md:text-lg">
                                Start your plant journey today with easy-to-care indoor plants perfect for beginners.
                            </p>
                        </div>
                        <a href="#slide2" className="btn btn-circle absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2">❮</a>
                        <a href="#slide1" className="btn btn-circle absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2">❯</a>
                    </div>
                </div>
            </div>

            
            <NewPlant />
            <TopPlantMistakes />
            <BeginnerFriendlyPlants></BeginnerFriendlyPlants>
        </div>
    );
};

export default Home;
