"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function GalleryModal({ isOpen, onClose, images, title }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-[90vw] max-h-[90vh] w-full md:max-h-[80vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">{title} - Gallery</h3>
                    <button onClick={onClose} className="text-red-500 text-4xl font-bold">&times;</button>
                </div>

                {/* Gallery Images */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {images && images.length > 0 ? (
                        images.map((img, index) => (
                            <div key={index} className="relative w-full h-64">
                                <Image
                                    src={img}
                                    alt={`Gallery Image ${index}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No images available</p>
                    )}
                </div>

                {/* Close Button */}
                <div className="mt-4 text-center">
                    <button onClick={onClose} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
