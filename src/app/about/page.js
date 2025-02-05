"use client";

export default function About() {
    return (
        <div className="container mx-auto py-16 px-6 animate-fadeIn">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center">About Me</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center relative">
                {/* Card 1 -  */}
                <li className="p-5 text-xl max-w-xs mx-auto
                border border-pink-500/0 rounded-lg shadow-lg text-pink-600 neon-effect-pink
                animate-fly-from-top-left w-[400px] h-[200px]">
                    Dedicated Computer Science student with a PhD in Biological Sciences,
                    blending technical expertise with advanced research capabilities
                </li>

                {/* Card 2*/}
                <li className="p-5 text-xl max-w-xs mx-auto
                border border-blue-500/0 rounded-lg shadow-lg text-blue-600 neon-effect-blue
                animate-fly-from-top-right w-[400px] h-[200px]">
                    Extensive expertise in microbiology, developmental biology, and quantitative biology,
                    with a deep understanding of experimental and analytical methods.
                </li>

                {/* Card 3 */}
                <li className="p-7 text-xl max-w-xs mx-auto
                border border-green-500/0 rounded-lg shadow-lg text-green-600 neon-effect-green
                animate-fly-from-bottom-left w-[400px] h-[200px]">
                    Experienced in informatics, data science, and artificial intelligence,
                    delivering data-driven solutions and innovations.
                </li>

                {/* Card 4 - Glass effect */}
                <li className="p-7 text-xl max-w-xs mx-auto
                border border-yellow-500/0 rounded-lg shadow-lg text-yellow-600 neon-effect-yellow
                animate-fly-from-bottom-right w-[400px] h-[200px]">
                    Enthusiastic about solving complex challenges at the convergence
                    of informatics and biological sciences.
                </li>
            </ul>
        </div>
    );
}




