import React from 'react';

const TopPlantMistakes = () => {

    const mistakes = [
        {
            id: 1,
            title: "Overwatering",
            desc: "Too much water can suffocate plant roots. Always check if the top soil is dry before watering again.",
            icon: "💧",
        },
        {
            id: 2,
            title: "Too Little Sunlight",
            desc: "Plants need sunlight to make food! Keep them near a bright window with indirect light.",
            icon: "☀️",
        },
        {
            id: 3,
            title: "Wrong Pot Choice",
            desc: "Using pots without drainage holes traps water and causes root rot.",
            icon: "🪴",
        },
        {
            id: 4,
            title: "Ignoring Pests",
            desc: "Tiny insects like aphids can destroy leaves quickly. Check your plants regularly.",
            icon: "🐛",
        },
    ];

    return (
        <div>
            <section className="text-center py-10 px-10 bg-base-200 rounded-2xl shadow-inner my-10">
                <h2 className="text-4xl font-bold text-green-300 mb-8">
                    🌿 Top Plant Care Mistakes
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    Avoid these common mistakes to keep your plants healthy, happy, and
                    thriving at home.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                    {mistakes.map((mistake) => (
                        <div
                            key={mistake.id}
                            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            <div className="text-5xl mb-3">{mistake.icon}</div>
                            <h3 className="text-xl font-semibold text-green-700 mb-2">
                                {mistake.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{mistake.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TopPlantMistakes;