"use client";

export default function Education() {
    return (
        <div className="container mx-auto py-16 px-6 animate-fadeIn">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Degrees Section */}
                <div>
                    <h4 className="text-2xl font-semibold mb-6 text-gray-800">Degrees</h4>
                    <ul className="space-y-6">
                        <li>
                            <div>
                                <h4 className="text-2xl font-semibold text-blue-800">M.S. in Computer Science</h4>
                                <p className="text-gray-600"><em>Expected August 2025 - Texas A&M University-Corpus Christi, USA</em></p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4 className="text-2xl font-semibold text-blue-800">Ph.D. in Biological Sciences</h4>
                                <p className="text-gray-600"><em>February 2016 - Korea Advanced Institute of Science and Technology (KAIST), South Korea</em></p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4 className="text-2xl font-semibold text-blue-800">B.Sc. (Honours) in Biology</h4>
                                <p className="text-gray-600"><em>June 2010 - Vietnam National University-Hanoi, Vietnam</em></p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Certificates Section */}
                <div>
                    <h4 className="text-2xl font-semibold mb-6 text-gray-800">Certificates</h4>
                    <ul className="space-y-6">
                        <li>
                            <div>
                                <h4 className="text-2xl font-semibold text-blue-800">Python Core</h4>
                                <p className="text-gray-600"><em>February 2023, JetBrains Academy - d6053d7a</em></p>
                                <a href="/Documents/Certificates/Hyperskill%20Certificate%202-d6053d7a.pdf"
                                   target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Download a Copy
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4 className="text-2xl font-semibold text-blue-800">Johns Hopkins University Genomic Data Science Specialization</h4>
                                <p className="text-gray-600"><em>May 2022, Coursera - ZJEJM337MNK6</em></p>
                                <a href="/Documents/Certificates/Genomic_Data_Science_Johns_Hopkins_Coursera_Cert.pdf"
                                   target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Download a Copy
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4 className="text-2xl font-semibold text-blue-800">IBM Advanced Data Science Specialization</h4>
                                <p className="text-gray-600"><em>February 2021, Coursera - JRWXNFF62K6G</em></p>
                                <a href="/Documents/Certificates/Advanced_Data_Science_IBM_Coursera_Cert.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Download a Copy
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4 className="text-2xl font-semibold text-blue-800">IBM Data Science Professional Certificate</h4>
                                <p className="text-gray-600"><em>November 2020, Coursera - CQV5XQKXFHS3</em></p>
                                <a href="/Documents/Certificates/IBM_Data_Science_Coursera_Cert.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Download a Copy
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
