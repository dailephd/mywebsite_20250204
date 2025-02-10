"use client";

import { useState } from 'react';

export default function Page() {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skills = [
        {
            category: "Computational Skills",
            subcategories: [
                {
                    label: "Programming",
                    categories: [
                        {
                            label: "Programming Languages",
                            skills: [
                                {name: "Python", proficiency: 90},
                                {name: "R", proficiency: 90},
                                {name: "Julia", proficiency: 50},
                                {name: "Java", proficiency: 50},
                                {name: "Kotlin", proficiency: 60}
                            ]
                        },
                        {
                            label: "Web Development",
                            skills: [
                                {name: "HTML", proficiency: 95},
                                {name: "CSS", proficiency: 90},
                                {name: "JavaScript", proficiency: 85},
                                {name: "React", proficiency: 70},
                                {name: "Django", proficiency: 90},
                                {name: "Next.js", proficiency: 70}
                            ]
                        },
                        {
                            label: "Version Control",
                            skills: [
                                {name: "Gitlab", proficiency: 80},
                                {name: "GitHub", proficiency: 80}
                            ]
                        },
                        {
                            label: "Database Management",
                            skills: [
                                {name: "PostgreSQL", proficiency: 80}
                            ]
                        },
                        {
                            label: "Software Development",
                            skills: [
                                {name: "Full Stack Development", proficiency: 85}
                            ]
                        }
                    ]
                },
                {
                    label: "Data Science and Artificial Intelligence",
                    categories: [
                        {
                            label: "Data Analysis",
                            skills: [
                                {name: "Pandas", proficiency: 90},
                                {name: "NumPy", proficiency: 90},
                                {name: "Xarray", proficiency: 90},
                                {name: "Tidyverse", proficiency: 80},
                                {name: "Geopandas", proficiency: 70}
                            ]
                        },
                        {
                            label: "Machine Learning",
                            skills: [
                                {name: "Scikit-learn", proficiency: 90}
                            ]
                        },
                        {
                            label: "Deep Learning",
                            skills: [
                                {name: "PyTorch", proficiency: 90},
                                {name: "TensorFlow-Keras", proficiency: 90},
                                {name: "Pytorch-geometric", proficiency: 90}
                            ]
                        },
                        {
                            label: "Deep Learning Models",
                            skills: [
                                {name: "CNN", proficiency: 90},
                                {name: "RNN", proficiency: 95},
                                {name: "LSTM", proficiency: 95},
                                {name: "Transformer", proficiency: 100},
                                {name: "BERT", proficiency: 100},
                                {name: "GNN", proficiency: 90},
                                {name: "MPNN", proficiency: 90},
                                {name: "GAT", proficiency: 90}
                            ]
                        },
                        {
                            label: "Data Visualization",
                            skills: [
                                {name: "Matplotlib", proficiency: 90},
                                {name: "Seaborn", proficiency: 90},
                                {name: "Plotly", proficiency: 90},
                                {name: "ggplot2", proficiency: 90},
                                {name: "Bokeh", proficiency: 70},
                                {name: "Cartopy", proficiency: 70},
                                {name: "Folium", proficiency: 65}
                            ]
                        },
                        {
                            label: "Big Data",
                            skills: [
                                {name: "Pyspark", proficiency: 60}
                            ]
                        },
                        {
                            label: "Natural Language Processing",
                            skills: [
                                {name: "NLTK", proficiency: 85},
                                {name: "Transformers (Hugging Face)", proficiency: 90}
                            ]
                        },
                        {
                            label: "Cloud Computing",
                            skills: [
                                {name: "IBM Watson Studio", proficiency: 80},
                                {name: "Google Cloud Platform", proficiency: 70},
                                {name: "Microsoft Azure", proficiency: 70}
                            ]
                        },
                        {
                            label: "Development Environments",
                            skills: [
                                {name: "Windows", proficiency: 90},
                                {name: "Linux (Ubuntu, RHEL, Debian)", proficiency: 85}
                            ]
                        },
                        {
                            label: "Programming Tools",
                            skills: [
                                {name: "Visual Studio Code", proficiency: 100},
                                {name: "Pycharm", proficiency: 100},
                                {name: "Webstorm", proficiency: 100},
                                {name: "IntelliJ IDEA", proficiency: 80},
                                {name: "Jupyter Lab", proficiency: 100}
                            ]
                        }
                    ]
                },
                {
                    label: "Computational Biology and Bioinformatics",
                    categories: [
                        {
                            label: "Bioinformatics Tools",
                            skills: [
                                {name: "BLAST", proficiency: 85},
                                {name: "ClustalW", proficiency: 80},
                                {name: "Biopython", proficiency: 85},
                                {name: "Bioconductor", proficiency: 75},
                            ]
                        },
                        {
                            label: "Data Processing",
                            skills: [
                                {name: "SAMtools", proficiency: 50},
                                {name: "BEDtools", proficiency: 50},
                                {name: "BCFtools", proficiency: 50},
                                {name: "Bowtie", proficiency: 50},
                                {name: "BWA", proficiency: 50},
                                {name: "Cufflinks", proficiency: 50},
                                {name: "Tophat", proficiency: 50}
                            ]
                        },
                        {
                            label: "RNA-seq Analysis",
                            skills: [
                                {name: "DESeq2", proficiency: 75}
                            ]
                        },
                        {
                            label: "Proteomic Data Analysis",
                            skills: [
                                {name: "Differential Expression Analysis", proficiency: 90},
                                {name: "Heatmap", proficiency: 90},
                                {name: "Hierarchical Clustering", proficiency: 90}
                            ]
                        },
                        {
                            label: "Statistical Methods",
                            skills: [
                                {name: "Hypothesis testing", proficiency: 90},
                                {name: "Regression analysis", proficiency: 100},
                                {name: "Correlation analysis", proficiency: 90},
                                {name: "Time series analysis", proficiency: 100},
                                {name: "Multivariate analysis", proficiency: 80},
                                {name: "Non-parametric methods", proficiency: 90},
                                {name: "Machine-learning related statistics", proficiency: 90}
                            ]
                        },
                        {
                            label: "fMRI Processing and Analysis",
                            skills: [
                                {name: "Nipype", proficiency: 70},
                                {name: "Nilearn", proficiency: 70}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            category: "Experimental Skills",
            subcategories: [
                {
                    label: "Microbiology",
                    categories: [
                        {
                            label: "Bacteria",
                            skills: [
                                {name: "Culture", proficiency: 90},
                                {name: "Growth characterization", proficiency: 90},
                                {name: "MIC assay", proficiency: 95},
                            ]
                        },
                        {
                            label: "Molecular Biology",
                            skills: [
                                {name: "Molecular cloning", proficiency: 90},
                                {name: "Strain construction", proficiency: 90},
                                {name: "Phage transduction", proficiency: 90},
                                {name: "Click-iT - AHA", proficiency: 80},
                                {name: "PCR", proficiency: 95},
                            ]
                        },
                        {
                            label: "Single-cell microscopy",
                            skills: [
                                {name: "Single-molecule FISH", proficiency: 70},
                                {name: "Single-cell fluorescent microscopy", proficiency: 90},
                                {name: <>Single-cell time-lapse<br />imaging</>, proficiency: 90},
                                {name: "Single-cell image analysis with Fiji, MicrobeJ", proficiency: 90}
                            ]
                        },
                    ],
                },
                {
                    label: "Developmental Biology",
                    categories: [
                        {
                            label: "Animal Handling",
                            skills: [
                                {name: "Animal husbandry", proficiency: 80},
                                {name: "Genotyping", proficiency: 95},
                                {name: "Surgical procedures", proficiency: 85},
                            ]
                        },
                        {
                            label: "Protein Assays",
                            skills: [
                                {name: "Protein purification", proficiency: 70},
                                {name: "Immunoblotting", proficiency: 85}
                            ]
                        },
                        {
                            label: "Histology",
                            skills: [
                                {name: "Cryosection", proficiency: 80},
                                {name: "Histological analysis", proficiency: 85}
                            ]
                        },
                        {
                            label: "Immunofluorescence",
                            skills: [
                                {name: "Confocal microscopy", proficiency: 80},
                                {name: "Immunohistochemistry", proficiency: 90},
                                {name: "Immunocytochemistry", proficiency: 90},
                                {name: "Immunolabeling of RPE explant cultures", proficiency: 90}
                            ]
                        },
                        {
                            label: "Animal Cell Culture",
                            skills: [
                                {name: "Mouse fibroblast isolation", proficiency: 95},
                                {name: "Mouse fibroblast immortalization", proficiency: 80},
                                {
                                    name: "Isolation of mesenchymal stem cells from human umbilical cords",
                                    proficiency: 90
                                },
                                {name: "Commercial cell line culture", proficiency: 100},
                                {name: "Aseptic techniques", proficiency: 95},
                            ]
                        },
                    ]
                },
            ]
        },
        {
            category: "Interdisciplinary Skills",
            subcategories: [
                {
                    label: "Critical Thinking and Problem Solving",
                    categories: [
                        {
                            label: "Core Analytical Skills",
                            skills: [
                                { name: "Problem Solving", proficiency: 90 },
                                { name: "Critical Thinking", proficiency: 90 },
                                { name: "Logical Reasoning", proficiency: 85 },
                                { name: "Analytical Thinking", proficiency: 85 }
                            ]
                        }
                    ]
                },
                {
                    label: "Project Management and Organization",
                    categories: [
                        {
                            label: "Planning and Execution",
                            skills: [
                                { name: "Project Management", proficiency: 80 },
                                { name: "Task Prioritization", proficiency: 85 },
                                { name: "Time Management", proficiency: 90 },
                            ]
                        }
                    ]
                },
                {
                    label: "Collaboration and Communication",
                    categories: [
                        {
                            label: "Teamwork and Leadership",
                            skills: [
                                { name: "Teamwork", proficiency: 85 },
                                { name: "Leadership", proficiency: 80 },
                                { name: "Negotiation", proficiency: 70 }
                            ]
                        },
                        {
                            label: "Communication Skills",
                            skills: [
                                { name: "Verbal Communication", proficiency: 70 },
                                { name: "Written Communication", proficiency: 90 },
                                { name: "Presentation Skills", proficiency: 80 },
                                { name: "Public Speaking", proficiency: 70 }
                            ]
                        }
                    ]
                },
                {
                    label: "Personal Effectiveness",
                    categories: [
                        {
                            label: "Self-Management",
                            skills: [
                                { name: "Conscientiousness", proficiency: 90 },
                                { name: "Self-Discipline", proficiency: 95 },
                                { name: "Multi-Tasking", proficiency: 90 }
                            ]
                        },
                        {
                            label: "Professional Skills",
                            skills: [
                                { name: "Adaptability", proficiency: 90 },
                                { name: "Lifelong Learning", proficiency: 85 },
                                { name: "Flexibility", proficiency: 90 },
                                { name: "Innovation and Creativity", proficiency: 85 }
                            ]
                        }
                    ]
                },
                {
                    label: "Ethical and Professional Responsibility",
                    categories: [
                        {
                            label: "Ethical Practice",
                            skills: [
                                { name: "Ethical Decision Making", proficiency: 80 },
                                { name: "Integrity", proficiency: 90 },
                                { name: "Professionalism", proficiency: 95 },
                                { name: "Accountability", proficiency: 90 }
                            ]
                        }
                    ]
                },
                {
                    label: "Data Analysis and Interpretation",
                    categories: [
                        {
                            label: "Quantitative Skills",
                            skills: [
                                { name: "Statistical Analysis", proficiency: 85 },
                                { name: "Data Interpretation", proficiency: 95 },
                                { name: "Research Methods", proficiency: 90 },
                                { name: "Data Visualization", proficiency: 85 }
                            ]
                        }
                    ]
                }
            ]
        },
    ];

    return (
        <div className="container mx-auto py-16 px-6 animate-fadeIn">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skillCategory, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg mb-12">
                        <h4 className="text-2xl font-semibold mb-4 text-blue-800 text-center">{skillCategory.category}</h4>

                        <div className="space-y-6">
                            {skillCategory.subcategories.map((subcategory, subIndex) => (
                                <div
                                    key={subIndex}
                                    className="bg-white p-4 rounded transition duration-300 ease-in-out hover:bg-yellow-300 hover:bg-opacity-90 relative"
                                >
                                    {/* Conditionally render "Hover for details" text for the first box */}
                                    {subIndex === 0 && (
                                        <span className="absolute top-0 right-0 text-xs text-gray-500 pr-2 pt-2">
                                        Hover for details
                                    </span>
                                    )}

                                    <h5 className="text-xl font-semibold mb-4 text-gray-700">{subcategory.label}</h5>

                                    <div className="flex flex-wrap">
                                        {subcategory.categories.map((category, catIndex) => (
                                            <div key={catIndex} className="relative group m-1">
                                            <span className="inline-block bg-blue-400 text-gray-700 py-2 px-4 rounded-full cursor-pointer transition duration-300 ease-in-out text-center">
                                                {category.label}
                                            </span>

                                                {/* Hover effect to show skills */}
                                                <div className="absolute left-0 top-full mt-2 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                                                    <div className="bg-white p-4 rounded shadow-lg w-full">
                                                        {category.skills.map((skill, skillIndex) => (
                                                            <div key={skillIndex} className="relative mb-2">
                                                                <span className="block text-gray-700 mb-1">{skill.name}</span>
                                                                <div className="h-2 bg-gray-300 rounded w-full relative">
                                                                    <div
                                                                        className="h-full bg-green-500 rounded"
                                                                        style={{ width: `${skill.proficiency}%` }}
                                                                    ></div>
                                                                    <span className="absolute top-[-20px] right-0 text-sm font-semibold text-gray-700">
                                                                    {skill.proficiency}%
                                                                </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );



}