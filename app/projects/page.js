"use client";
import { useState } from 'react';
import GalleryModal from "@/components/GalleryModal";
import projects from "@/data/projectsData";

export default function Projects() {
    const [openProject, setOpenProject] = useState(null);
    const [isGalleryOpen, setGalleryOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);
    const [galleryTitle, setGalleryTitle] = useState("");

    const toggleProject = (index) => {
        setOpenProject(openProject === index ? null : index);
    };

    const openGallery = (title, images) => {
        setGalleryTitle(title);
        setGalleryImages(images);
        setGalleryOpen(true);
    };

    return (
        <div className="container mx-auto py-2 px-6 animate-fadeIn">
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

                        <div
                            className={`overflow-hidden transition-all duration-1000 ${
                                openProject === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            <div className="px-4 py-2 text-gray-700">
                                {project.details}

                                {/* Buttons for Gallery & GitHub */}
                                <div className="flex space-x-4 mt-4">
                                    <button
                                        onClick={() => openGallery(project.title, project.gallery)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Gallery
                                    </button>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                                    >
                                        GitHub Repo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Render Gallery Modal */}
            <GalleryModal
                isOpen={isGalleryOpen}
                onClose={() => setGalleryOpen(false)}
                images={galleryImages}
                title={galleryTitle}
            />
        </div>
    );
}
