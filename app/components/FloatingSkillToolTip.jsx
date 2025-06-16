'use client';

import React, { useState } from 'react';
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react-dom';

export default function FloatingSkillTooltip({ label, skills }) {
    const [open, setOpen] = useState(false);

    const { x, y, reference, floating, strategy, refs } = useFloating({
        open,
        onOpenChange: setOpen,
        middleware: [offset(8), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });

    return (
        <div
            ref={reference}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative inline-block m-1 cursor-pointer"
        >
            <span className="inline-flex items-center justify-center bg-blue-400 text-gray-700 py-2 px-4 rounded-full cursor-pointer transition duration-300 ease-in-out text-center text-sm leading-snug break-words text-balance">
                {label}
            </span>

            {open && (
                <div
                    ref={floating}
                    style={{ position: strategy, top: y ?? 0, left: x ?? 0 }}
                    className="z-50 bg-white shadow-lg rounded p-4 w-64"
                >
                    {skills.map((skill, i) => (
                        <div key={i} className="mb-3">
                            <div className="flex justify-between mb-1">
                                <span className="text-gray-700">{skill.name}</span>
                                <span className="text-sm font-semibold text-gray-600">
                  {skill.proficiency}%
                </span>
                            </div>
                            <div className="h-2 bg-gray-300 rounded">
                                <div
                                    className="h-full bg-green-500 rounded"
                                    style={{ width: `${skill.proficiency}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
