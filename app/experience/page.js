"use client";

export default function Experience() {
    const experiences = [
        {
            title: "Graduate Research Assistant",
            company: "Korea Advanced Institute of Science and Technology (KAIST)",
            location: "South Korea",
            date: "September 2010 – February 2016",
            color: "border-red-500",
            bgColor: "bg-red-50"
        },
        {
            title: "Visiting Scholar",
            company: "Emory University",
            location: "Atlanta, Georgia, USA",
            date: "March 2017 – January 2022",
            color: "border-green-500",
            bgColor: "bg-green-50"
        },
        {
            title: "Graduate Research Assistant",
            company: "Texas A&M University-Corpus Christi",
            location: "Texas, USA",
            date: "September 2023 – August 2024",
            color: "border-purple-500",
            bgColor: "bg-purple-50"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 animate-fadeIn">
            {/* Header Section - Fixed at the Top */}
            <div className="py-2 px-6">
                <h3 className="text-3xl font-semibold text-gray-800 text-center">Experience</h3>
            </div>

            {/* Cards Section - Centered Vertically */}
            <div className="flex-grow flex justify-center py-24 px-6">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`border-l-4 ${exp.color} shadow-md rounded-lg p-6 ${exp.bgColor} transition-transform transform hover:scale-105 
                            w-80 h-56 flex flex-col justify-between`}
                        >
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                                <p className="text-lg text-gray-700 mt-1">{exp.company}</p>
                                <p className="text-md text-gray-600">{exp.location}</p>
                            </div>
                            <p className="text-sm text-gray-500 italic mt-2">{exp.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
