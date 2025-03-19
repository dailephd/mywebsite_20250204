const projects = [
    {
        title: "Smart Tutor e-learning platform",
        details: (
            <ul className="list-inside mt-2 space-y-1 text-gray-700">
                <li><strong>Description:</strong> Developed a web application that allows users to upload text
                    materials, create tests, conduct evaluations, and view feedback. Evaluations are conducted
                    based on defined metrics. Users can also track their performance over time.
                </li>
                <li><strong>Role:</strong> Project Manager.</li>
                <li><strong>Technologies:</strong> LangChain, OpenAI API, Django, PostgreSQL, Plotly, Panel.</li>
                <li><strong>Duration:</strong> June 2024 - August 2024.</li>
                <li><strong>Team size:</strong> 8.</li>
            </ul>
        ),
        gallery: [
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1739184242/smarttutor_registration_l2b8dl.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1739184242/smarttutor_viewfile_tjkupb.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1739184242/smarttutor_login_zbvjug.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1739184242/smarttutor_dashboard_lxp2xs.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1739184241/smarttutor_exam_zfwlqd.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1739184241/smarttutor_evaluation_wzmxsa.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1739184241/smarttutor_allfiles_srnnne.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1739184241/smarttutor_flashcards_qh5gth.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1739184241/smarttutor_summary_qjbzbw.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1739184241/smarttutor_profile_uocjka.png",
            ],
        github: "https://github.com/dailephd/Smart_Tutor"
    },
    {
        title: "Graph Neural Network to predict water depth level in a simulated sewage network.",
        details: (
            <ul className="list-inside mt-2 space-y-1 text-gray-700">
                        <li><strong>Description:</strong> Implemented 5 graph neural network models: GCNConv
                            ,GRU-GCNConv, GCNConv-LSTM, MPNN, GAT-Transformer on time series data of water depth levels in a
                            Storm Water Management Model (SWMM).
                        </li>
                        <li><strong>Role:</strong> Sole Developer.</li>
                        <li><strong>Technologies:</strong> PyTorch Geometric, Matplotlib, Plotly.</li>
                        <li><strong>Duration:</strong> January 2024 - April 2024.</li>
                        <li><strong>Team size:</strong> 1.</li>
            </ul>
        ),
        gallery: [
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1740353592/mpnn_xyatyf.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1740353591/gru_gcn_fu7lou.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1740353590/gcn_lstm_bxt9lo.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1740353590/gat_transformer_lqd3lt.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1740353590/gcnconv_jkkwa8.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1740353590/all_training_d5qptr.png",
        ],
        github: "https://github.com/dailephd/gnn_swmm_water_depth"
    },

    {
        title: "Automated Differential Expression Analysis of the Human Brain " +
            "Proteome in Alzheimer's and Parkinson's Patients. " +
            "Integrating Frequentist and Bayesian Methods",
        details: (
            <ul className="list-inside mt-2 space-y-1 text-gray-700">
                        <li>
                            <strong>Description:</strong> Developed a pipeline for identifying significantly differentially
                            expressed proteins in proteomics datasets using a hybrid Frequentist-Bayesian approach.
                            The workflow first applies Frequentist statistical tests (ANOVA, Welch’s test, Kruskal-Wallis)
                            to screen significant proteins, followed by Bayesian inference for verification. It includes batch
                            normalization, missing data handling, and log2 fold change analysis, ensuring robust results.
                            The pipeline also integrates visualizations such as volcano plots and Bayesian posterior distributions
                            to compare statistical methods and enhance interpretability.
                        </li>
                        <li><strong>Role:</strong> Sole Data Scientist.</li>
                        <li><strong>Technologies:</strong>PyMC, Statsmodels, ArviZ, Scikit-learn, Pandas, Numpy, Matplotlib, Seaborn.</li>
                        <li><strong>Duration:</strong>July 2021 - August 2021.</li>
                        <li><strong>Team size:</strong>1.</li>
            </ul>
        ),

        gallery: [
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1742337543/significance_vs_log2FC_ekraha.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1742337438/plot_2025-03-18_16-54-02_27_bd3k9h.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1742337432/plot_2025-03-18_16-54-02_28_o5iq7m.png",
            "https://res.cloudinary.com/dh8fw5mx5/image/upload/v1742337342/log2FC_btdqeg.png",
        ],
        github: "https://github.com/dailephd/DEA_Freq_Bayes/"
    },

    {
        title: "Deep learning for 16S rRNA gene copy number prediction",
        details: (
            <ul className="list-inside mt-2 space-y-1 text-gray-700">
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
                        <li><strong>Duration:</strong> September 2023 - August 2024.</li>
                        <li><strong>Team size:</strong> 2.</li>
            </ul>
        ),
    },

    {
        title: "Dissociation kinetics of small-molecule inhibitors in " +
            "Escherichia coli is coupled to the physiological state of cells.",
        details: (
            <ul className="list-inside mt-2 space-y-1 text-gray-700">
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
                <li><strong>Duration:</strong> February 2020 - January 2022.</li>
                <li><strong>Team size:</strong> 4.</li>
            </ul>
        ),
    },
    {
        title: "Active efflux leads to heterogeneous dissipation of proton motive force by protonophores in bacteria.",
        details: (
            <ul className="list-inside mt-2 space-y-1 text-gray-700">
                <li><strong>Description:</strong> E. coli cells responded heterogeneously to protonophores,
                    resulting in bimodal distributions of cell growth, substrate transport, and motility. This
                    heterogeneous response required active efflux systems. The response is driven by efflux-mediated
                    positive feedback between PMF and protonophores’ action.
                </li>
                <li><strong>Role:</strong> First Author.</li>
                <li><strong>Methodology:</strong> Bacterial culture, strain construction with KEIO library,
                    fluorescence microscopy, motor speed measurement.
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
            <ul className="list-inside mt-2 space-y-1 text-gray-700">
                <li><strong>Role:</strong> Second Co-Author.</li>
                <li><strong>Methodology:</strong> Bacterial culture, strain construction with KEIO library, smFISH,
                    β-Galactosidase assay, automated image analysis with MATLAB, fluorescent labeling of proteins
                    using L-azidohomoalanine.
                </li>
                <li><strong>Duration:</strong> September 2017 - March 2018.</li>
                <li><strong>Team size:</strong> 4.</li>
            </ul>
        )
    },
    {
        title: "Antibiotic-induced population fluctuations and dynamics of bacterial heteroresistance to antibiotics.",
        details: (
            <ul className="list-inside mt-2 space-y-1 text-gray-700">
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
                <li><strong>Duration:</strong> March 2017 - September 2017.</li>
                <li><strong>Team size:</strong> 6.</li>
            </ul>
        )
    },
    {
        title: "Endocytic regulation of RPE cell polarity and adhesion in eye development",
        details: (
            <ul className="list-inside mt-2 space-y-1 text-gray-700">
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
                <li><strong>Team size:</strong> 9.</li>
            </ul>
        )
    },
];

export default projects;
