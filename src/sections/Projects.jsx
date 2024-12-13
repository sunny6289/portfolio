import React from 'react';
import MoveIcon from '../componets/MoveLeftIcon';
import MoveRightIcon from '../componets/MoveRightIcon';

const projects = [
    {
        id: 1,
        name: 'Notes web app',
        techStack: ['React JS', 'Redux-toolkit', 'Tailwind CSS', 'Firebase'],
        description: 'A feature-rich notes website that allows users to create, edit, delete, and archive notes. With Firestore as the database, users can securely authenticate and access their data seamlessly across devices.',
        image: 'notes-web-app.png',
        liveLink: 'https://noted-nu.vercel.app/',
        codeLink: 'https://github.com/sunny6289/notes-complex',
    },
    {
        id: 2,
        name: 'Eco-Commerce',
        techStack: ['React JS', 'Context API', 'Tailwind CSS'],
        description: 'An eco-friendly e-commerce website where users can explore products, add them to a wishlist or cart, place orders, and view order details. A fully responsive frontend project focused on seamless user experience.',
        image: 'eco-commerce.png',
        liveLink: 'https://eco-commerce-hazel.vercel.app/',
        codeLink: 'https://github.com/sunny6289/eco-commerce',
    },
    {
        id: 3,
        name: 'Habit tracker',
        techStack: ['React JS', 'Redux-toolkit', 'Tailwind CSS', 'Redux persist'],
        description: 'A habit tracker app that helps users build habits by setting goals and tracking daily progress. Habits and progress are stored in local storage, allowing users to mark them as done after 11:59 PM each day.',
        image: 'habit-tracker.png',
        liveLink: 'https://habit-tracker-redux-toolkit.vercel.app/',
        codeLink: 'https://github.com/sunny6289/habit-tracker-redux-toolkit',
    },
    {
        id: 4,
        name: 'Form Snippet Documentation',
        techStack: ['React JS', 'React syntax highlighter', 'React Scroll', 'Tailwind CSS'],
        description: 'A documentation website for the "form-snippet" npm package, offering detailed topics, code snippets, and pagination for easy navigation and a seamless learning experience.',
        image: 'form-snippet-doc.png',
        liveLink: 'https://docs-form-snippet.vercel.app/',
        codeLink: 'https://github.com/Git21221/docs-form-snippet',
    },
];

const Projects = () => {
    return (
        <section className='h-screen page p-5 overflow-hidden'>
            <h1 className='text-center text-4xl sm:text-6xl mb-5 font-bold'>My Projects</h1>
            <div className="projects-container max-w-full h-[calc(100%-5rem)] grid grid-cols-1 sm:grid-cols-2 mx-auto gap-3 overflow-y-auto scroll-smooth scroll-none">
                {
                    projects.map((proj) => (
                        <div key={proj.id} className="project-container h-64 overflow-hidden relative flex flex-wrap items-center rounded-md">
                            <div className='w-full h-full'> {/* Set a fixed height */}
                                <img src={proj.image} alt={proj.name} className='w-full h-full object-cover' />
                            </div>
                            <div className="proj-details absolute bottom-0 left-0 right-0 bg-[#0000008f] bg-opacity-90 px-3 py-1 sm:p-2 flex flex-col gap-1">
                                <h2 className="text-lg sm:text-xl font-bold">{proj.name}</h2>
                                <div className='flex flex-wrap gap-1'>
                                {
                                    proj.techStack.map((tech, idx)=><span key={idx} className='py-0.5 px-2 sm:px-3 sm:py-1 bg-blue-500 rounded max-w-40 overflow-hidden text-ellipsis font-mono text-sm sm:text-md'>{tech}</span>)
                                }
                                </div>
                                <p className="text-sm sm:text-md">{proj.description}</p>
                                <div className="button-container flex gap-2">
                                    <a href={proj.codeLink} target='_blank' className='px-3 py-1 bg-slate-500 text-white rounded active:scale-95 md:hover:bg-slate-700'>GitHub</a>
                                    <a href={proj.liveLink} target='_blank' className='px-3 py-1 bg-blue-500 text-white rounded active:scale-95 md:hover:bg-blue-700'>Live</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <MoveIcon />
            <MoveRightIcon/>
        </section>

    );
}

export default Projects;
