import { GraduationCap, FlaskConical, Code2, Wrench, BookOpenCheck, BrainCircuit, FileBarChart } from "lucide-react";

export default function About() {
    return (
        <div className="container mx-auto py-2 px-6 max-w-5xl animate-fadeIn">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
                About Me
            </h3>

            <div className="text-lg text-gray-700 leading-relaxed space-y-6 mb-12">
                <p>
                    I’m a scientist turned software engineer, combining deep experience in
                    computer science and biological sciences. My early career was rooted
                    in experimental research, where I learned to ask sharp questions,
                    design systematic tests, and extract meaning from complex data. Those
                    skills translated naturally into programming and building data-driven
                    systems.
                </p>
                <p>
                    I approach software the same way I approached science: iteratively,
                    with hypotheses, feedback loops, and a focus on solving meaningful
                    problems. My current work spans full stack development, data science,
                    and artificial intelligence, grounded in strong data analysis and
                    statistical thinking.
                </p>
                <p>
                    I&apos;m especially motivated by challenges in medicine, healthcare, and
                    life sciences—domains where technology can make a real impact. I’ve
                    built projects ranging from AI-powered educational platforms to
                    predictive models for environmental systems and biological datasets.
                </p>
                <p>
                    With an MS in Computer Science and a PhD in Biological Sciences, I
                    bring a unique interdisciplinary perspective to every problem I
                    tackle.
                </p>
            </div>

            <h4 className="text-2xl font-semibold mb-6 text-gray-800">Quick Facts</h4>
            <ul className="space-y-4 text-base text-gray-700">
                <li className="flex items-baseline gap-3">
          <span className="w-6 h-6 flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-pink-500" />
          </span>
                    <span>
            MS in Computer Science – Texas A&M University–Corpus Christi
          </span>
                </li>
                <li className="flex items-baseline gap-3">
          <span className="w-6 h-6 flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-pink-500" />
          </span>
                    <span>
            PhD in Biological Sciences – KAIST (South Korea)
          </span>
                </li>
                <li className="flex items-baseline gap-3">
          <span className="w-6 h-6 flex items-center justify-center shrink-0">
            <FlaskConical className="w-5 h-5 text-blue-500" />
          </span>
                    <span>
            Former experimental biologist, now building full stack, AI, and
            data-driven applications
          </span>
                </li>
                <li className="flex items-baseline gap-3">
          <span className="w-6 h-6 flex items-center justify-center shrink-0">
            <Code2 className="w-5 h-5 text-green-500" />
          </span>
                    <span>
            Experienced in modern web frameworks (Django, React, Next.js,
            Express.js), machine learning libraries (PyTorch, TensorFlow), and
            data tools (Tidyverse, PostgreSQL)
          </span>
                </li>
                <li className="flex items-baseline gap-3">
          <span className="w-6 h-6 flex items-center justify-center shrink-0">
            <Wrench className="w-5 h-5 text-yellow-500" />
          </span>
                    <span>
            Developed Smart Tutor, an AI-powered e-learning platform with
            personalized evaluations
          </span>
                </li>
                <li className="flex items-baseline gap-3">
          <span className="w-6 h-6 flex items-center justify-center shrink-0">
            <BrainCircuit className="w-5 h-5 text-purple-500" />
          </span>
                    <span>
            Built a GNN model to predict water depth levels in synthetic sewage
            system data
          </span>
                </li>
                <li className="flex items-baseline gap-3">
          <span className="w-6 h-6 flex items-center justify-center shrink-0">
            <FileBarChart className="w-5 h-5 text-red-500" />
          </span>
                    <span>
            Created a differential expression analysis pipeline for Alzheimer’s
            and Parkinson’s proteomic data using hybrid Frequentist–Bayesian
            methods
          </span>
                </li>
            </ul>
        </div>
    );
}