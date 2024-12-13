import React from 'react';
import MoveIcon from '../componets/MoveLeftIcon';
import MoveRightIcon from '../componets/MoveRightIcon';

const educationDetail = [
    {
        id: 1,
        title: 'B.tech in Computer Science & Engineering',
        institute: 'Elitte College of Engineering',
        start: '2022',
        end: '2025',
        marks: '8.91',
        grading: 'CGPA'
    },
    {
        id: 2,
        title: 'Diploma in Computer Science & Engineering',
        institute: 'Acharya Prafulla Chandra Ray Polytechnic',
        start: '2019',
        end: '2022',
        marks: '9.2',
        grading: 'CGPA'
    },
    {
        id: 3,
        title: 'Higher Secondary Education',
        institute: 'Batanagar Sri Ramkrishna Ashram Vivekananda Vidya Mandir',
        start: '2017',
        end: '2019',
        marks: '65%',
        grading: 'Percentage'
    },
    {
        id: 4,
        title: 'Secondary Education',
        institute: 'Batanagar Sri Ramkrishna Ashram Vivekananda Vidya Mandir',
        start: '2022',
        end: '2025',
        marks: '70%',
        grading: 'Percentage'
    },
]

const Education = () => {
    return (
        <section className='page p-5 flex flex-col justify-around'>
            <h1 className='text-center text-5xl sm:text-6xl font-bold mb-3'>Education</h1>
            <div className="education-conatainer w-full overflow-y-auto scroll-none scroll-smooth grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    educationDetail.map((edu)=>(
                        <div key={edu.id} className='flex flex-col w-full border-4 border-dashed border-white rounded-md p-3 md:p-6'>
                            <h1 className='font-semibold text-xl'>{edu.title}</h1>
                            <p className='text-[#ffffff92] text-lg'>{edu.institute}</p>
                            
                            <div className='flex gap-2 items-center text-[#ffffff92]'>
                                <span>{`${edu.start} - `}</span>
                                <span>{edu.end}</span>
                            </div>
                            <div className='flex gap-2 items-center text-lg'>
                                <span>{`${edu.grading} : `}</span>
                                <span>{edu.marks}</span>
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

export default Education;
