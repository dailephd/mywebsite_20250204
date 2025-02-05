"use client";

import { useState } from 'react';

export default function Projects() {
    const [openProject, setOpenProject] = useState(null);

    const toggleProject = (index) => {
        setOpenProject(openProject === index ? null : index);
    };

    const projects = [
        {
            title: "Deep learning for 16S rRNA gene copy number prediction",
            details: (
                <ul className="first-level list-disc list-inside mt-2 space-y-1 text-gray-700">
                    <li>
                        <strong>Project:</strong> Deep learning for 16S rRNA gene copy number prediction.
                        <ul className="second-level list-inside mt-2 space-y-1 text-gray-700">
                            <li>
                                <strong>Description:</strong> Implemented various deep learning models, including CNN,
                                RNN, Transformer, BERT, and hybrid models, to identify the optimal model for predicting
                                16S rRNA gene copy numbers. The goal was to achieve higher accuracy than traditional
                                bioinformatics and phylogenetic tools. Results indicated that the best model was BERT,
                                with an RMSE of approximately 0.5, surpassing traditional tools with RMSEs ranging from
                                2-3.
                            </li>
                            <li><strong>Role:</strong> Graduate Research Assistant.</li>
                            <li><strong>Technologies:</strong> TensorFlow, PyTorch, Scikit-learn, Matplotlib.</li>
                            <li>
                                <strong>Challenges Overcome:</strong>
                                <ul className="third-level list-circle list-inside mt-2 space-y-1 ml-6">
                                    <li>Imbalanced data: Addressed by using class weights.</li>
                                    <li>Limited computing power: Managed by transitioning from PyTorch to TensorFlow and
                                        tuning models layer by layer on data subsets.
                                    </li>
                                    <li>Encoding DNA sequences: Solved using k-merization.</li>
                                </ul>
                            </li>
                            <li><strong>Duration:</strong> September 2023 - August 2024.</li>
                            <li><strong>Team size:</strong> 2.</li>
                        </ul>
                    </li>
                </ul>
            ),
        },
        {
            title: "Graph Neural Network to predict water depth level in a simulated sewage network.",
            details: (
                <ul className="first-level list-disc list-inside mt-2 space-y-1 text-gray-700">
                    <li><strong>Project:</strong> Graph Neural Network to predict water depth level in a simulated
                        sewage network.
                        <ul className="second-level list-inside mt-2 space-y-1 text-gray-700">
                            <li><strong>Description:</strong> Implemented four graph neural network models: single-layer
                                linear GNN, multi-layer linear GNN, message-passing GNN, and RNN-graph attention
                                network, on time series data of water depth levels in a simulated sewage network. The
                                best model was a multi-layer GNN with MAE = 0.0017 and MSE = 0.6 x 10<sup>-5</sup>.
                            </li>
                            <li><strong>Role:</strong> Sole Developer.</li>
                            <li><strong>Technologies:</strong> PyTorch Geometric, Matplotlib.</li>
                            <li><strong>Challenges Overcome:</strong>
                                <ul className="third-level list-circle list-inside mt-2 space-y-1 ml-6">
                                    <li>Processing time series graph data: Solved by writing custom data loaders and
                                        custom graph neural network models.
                                    </li>
                                </ul>
                            </li>
                            <li><strong>Duration:</strong> January 2024 - April 2024.</li>
                            <li><strong>Team size:</strong> 1.</li>
                        </ul>
                    </li>
                </ul>
            ),
        },
        {
            title: "Smart Tutor e-learning platform",
            details: (
                <ul className="second-level list-inside mt-2 space-y-1 text-gray-700">
                    <li><strong>Description:</strong> Developed a web application that allows users to upload text
                        materials, create tests, conduct evaluations, and view feedback. Evaluations are conducted
                        based on defined metrics. Users can also track their performance over time.
                    </li>
                    <li><strong>Role:</strong> Project Manager.</li>
                    <li><strong>Technologies:</strong> LangChain, OpenAI API, Django, PostgreSQL, Plotly, Panel.</li>
                    <li><strong>Challenges Overcome:</strong>
                        <ul className="third-level list-circle list-inside mt-2 space-y-1 ml-6">
                            <li>Team communication: Addressed by using multiple communication channels, including
                                Outlook email, Discord, in-person meetings, and Zoom.
                            </li>
                            <li>Distribution of workload: Resolved by dividing the team into frontend, backend, and AI
                                groups, each led by a group leader. The project manager coordinated meetings with the
                                entire team.
                            </li>
                            <li>Framework selection: Django was chosen due to the team's familiarity with Python.
                                LangChain and OpenAI API were selected by the AI specialist for developing GenAI
                                features.
                            </li>
                            <li>Assembling and deploying the web application: The project manager assembled the
                                application and deployed it on Heroku.
                            </li>
                            <li>Disagreement among team members: The project manager gathered input from each member,
                                provided feedback, and made executive decisions.
                            </li>
                        </ul>
                    </li>
                    <li><strong>Duration:</strong> June 2024 - August 2024.</li>
                    <li><strong>Team size:</strong> 8.</li>
                </ul>
            ),
        },

        {
            title: "Dissociation kinetics of small-molecule inhibitors in " +
                "Escherichia coli is coupled to the physiological state of cells.",
            details: (
                <ul className="second-level list-inside mt-2 space-y-1 text-gray-700">
                    <li>
                        <strong>Description:</strong> The unbinding rate of Hoechst 33342 is not constant but depends on
                        the cell growth rate. This dependence is mediated by cellular activity, forming a feedback loop
                        with the inhibitor’s activity. There is cell-to-cell heterogeneity in inhibitor-target
                        interaction, leading to the coexistence of two distinct subpopulations: actively growing cells
                        that dissociate the inhibitors from the targets and non-growing cells that do not.
                    </li>
                    <li><strong>Role:</strong> First Author.</li>
                    <li>
                        <strong>Methodology:</strong> Bacterial culture, bacterial strain construction with KEIO
                        library, small-molecule binding/unbinding rate measurement, time-lapse imaging, β-Galactosidase
                        assay, fluorescence microscopy, image analysis with Fiji, statistical analysis with R, SPSS.
                    </li>
                    <li>
                        <strong>Challenges Overcome:</strong>
                        <ul className="third-level list-circle list-inside mt-2 space-y-1 ml-6">
                            <li>Measuring binding/unbinding rates of fluorophores at the single-cell level: Addressed by
                                developing a new procedure to manually measure fluorescence intensity using single-cell
                                imaging.
                            </li>
                            <li>Selection of fluorophores: Hoechst was chosen after testing various fluorophores and
                                optimizing the procedures.
                            </li>
                            <li>Chemical treatment procedures: Solved by measuring Hoechst intensity at different time
                                points after treatment.
                            </li>
                        </ul>
                    </li>
                    <li><strong>Duration:</strong> February 2020 - January 2022.</li>
                    <li><strong>Team size:</strong> 4.</li>
                </ul>
            ),
        },
        {
            title: "Active efflux leads to heterogeneous dissipation of proton motive force by protonophores in bacteria.",
            details: (
                <ul className="second-level list-inside mt-2 space-y-1 text-gray-700">
                    <li><strong>Description:</strong> E. coli cells responded heterogeneously to protonophores,
                        resulting in bimodal distributions of cell growth, substrate transport, and motility. This
                        heterogeneous response required active efflux systems. The response is driven by efflux-mediated
                        positive feedback between PMF and protonophores’ action.
                    </li>
                    <li><strong>Role:</strong> First Author.</li>
                    <li><strong>Methodology:</strong> Bacterial culture, strain construction with KEIO library,
                        fluorescence microscopy, motor speed measurement.
                    </li>
                    <li><strong>Challenges Overcome:</strong>
                        <ul className="third-level list-circle list-inside mt-2 space-y-1 ml-6">
                            <li>Lack of experimental expertise: Addressed by collaborating with a different group.</li>
                            <li>Selection and standardization of protonophores: Resolved by testing various known
                                protonophores.
                            </li>
                            <li>Observing the dissipation of PMF: Solved by using fluorescent intensity of Hoechst 33342
                                and flagellar motor speed as proxies for PMF.
                            </li>
                            <li>Difficulty in strain construction: Overcome by modifying PCR protocols.</li>
                        </ul>
                    </li>
                    <li><strong>Duration:</strong> September 2018 - January 2021.</li>
                    <li><strong>Team size:</strong> 5.</li>
                </ul>
            )
        },
        {
            title: "Distinct mechanisms coordinate transcription and translation under " +
                "carbon and nitrogen starvation in Escherichia coli.",
            details: (
                <ul className="second-level list-inside mt-2 space-y-1 text-gray-700">
                    <li><strong>Role:</strong> Second Co-Author.</li>
                    <li><strong>Methodology:</strong> Bacterial culture, strain construction with KEIO library, smFISH,
                        β-Galactosidase assay, automated image analysis with MATLAB, fluorescent labeling of proteins
                        using L-azidohomoalanine.
                    </li>
                    <li><strong>Challenges Overcome:</strong>
                        <ul className="third-level list-circle list-inside mt-2 space-y-1 ml-6">
                            <li>Lack of equipment: Addressed by collaborating with different labs that had the necessary
                                equipment.
                            </li>
                            <li>Protocol modifications: Adjusted protocols according to lab conditions when possible.
                            </li>
                            <li>Quantifying smFISH results: Solved by using an automated program and validating results
                                with manual counting.
                            </li>
                        </ul>
                    </li>
                    <li><strong>Duration:</strong> September 2017 - March 2018.</li>
                    <li><strong>Team size:</strong> 4.</li>
                </ul>
            )
        },
        {
            title: "Antibiotic-induced population fluctuations and dynamics of bacterial heteroresistance to antibiotics.",
            details: (
                <ul className="second-level list-inside mt-2 space-y-1 text-gray-700">
                    <li><strong>Description:</strong> Eradicating bacteria with antibiotics is stochastic in nature.
                        Bactericidal antibiotics induced population fluctuations. At high concentrations, bacterial
                        clearance dynamics were heterogeneous. At low concentrations, clearance still occurred with a
                        non-zero probability. Eradication could be facilitated by increasing extinction probability.
                    </li>
                    <li><strong>Role:</strong> Third Co-Author.</li>
                    <li><strong>Methodology:</strong> Bacterial culture, strain construction with KEIO library, MIC
                        measurement by plate assay, time-lapse microscopy, replicate culture by microtiter plate, image
                        analysis with MicrobeJ.
                    </li>
                    <li><strong>Challenges Overcome:</strong>
                        <ul className="third-level list-circle list-inside mt-2 space-y-1 ml-6">
                            <li>Inconsistent count data: Solved by modifying procedures, following them carefully, and
                                documenting every step.
                            </li>
                        </ul>
                    </li>
                    <li><strong>Duration:</strong> March 2017 - September 2017.</li>
                    <li><strong>Team size:</strong> 6.</li>
                </ul>
            )
        },
        {
            title: "Endocytic regulation of RPE cell polarity and adhesion in eye development",
            details: (
                <ul className="second-level list-inside mt-2 space-y-1 text-gray-700">
                    <li><strong>Description:</strong> Distributions of membrane proteins differ in embryonic,
                        post-natal, and mature mouse RPE, suggesting developmental regulation of protein trafficking.
                        Loss of Tsg101 severely disturbed the polarity of RPE, which forms irregular aggregates
                        exhibiting
                        non-polarized distribution of cell adhesion proteins and activation of epidermal growth factor
                        receptor signaling.
                    </li>
                    <li><strong>Role:</strong> First author.</li>
                    <li><strong>Methodology:</strong> mating of genetically-engineered mice, immunohistochemistry,
                        electron microscopy, electroretinogram (ERG) and optomotry, statistical analysis.
                    </li>
                    <li><strong>Challenges Overcome:</strong>
                        <ul className="third-level list-circle list-inside mt-2 space-y-1 ml-6">
                            <li>
                                Mouse colony management: solved by keeping clear records of mouse strains and breeding
                                schemes.
                            </li>

                            <li>
                                    Difficulty in immunohistochemistry of certain antibodies: solved by modified existing protocols.
                            </li>
                            <li>
                                    Lack of expertise in electron microscopy, ERG and optomotry: solved by collaborating with
                                    different facilities.
                            </li>
                            </ul>
                        </li>

                        <li><strong>Team size:</strong> 9.</li>
                        </ul>
                    )
                },
            ];

    return (
        <div className="container mx-auto py-16 px-6 animate-fadeIn">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Projects</h3>
            <div className="space-y-4">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg shadow-md">
                        <button
                            onClick={() => toggleProject(index)}
                            className="relative w-full text-left px-4 py-2 text-2xl font-semibold text-blue-800 hover:bg-yellow-300 hover:bg-opacity-90 rounded-t-lg focus:outline-none"
                        >
                            {project.title}
                            <span className="absolute bottom-0 right-0 text-sm text-gray-500 pr-4 pb-2">
                            {openProject === index ? "click to collapse" : "click to expand"}
                        </span>
                        </button>
                        {openProject === index && (
                            <div className="px-4 py-2 text-gray-700">
                                {project.details}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

}
