import React from 'react';
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandFirebase } from "react-icons/tb";
import { DiGithubFull } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import MoveIcon from '../componets/MoveLeftIcon';
import MoveRightIcon from '../componets/MoveRightIcon';

const Skills = () => {
    return (
        <section className='page p-5 h-full w-full flex flex-col justify-around'>
            <h1 className='text-center text-5xl sm:text-6xl font-bold'>Skills</h1>
            <div className="logo-icons-container grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="skill-logo flex flex-col items-center">
                    <TbBrandHtml5 title='HTML5' className='text-7xl sm:text-8xl text-[#DE4A24] relative sm:hover:-top-1'/>
                    <span className='text-md sm:text-xl'>HTML5</span>
                </div>
                <div className="skill-logo flex flex-col items-center">
                    <TbBrandCss3 title='CSS3' className='text-7xl sm:text-8xl text-[#004CE9] relative sm:hover:-top-1'/>
                    <span className='text-md sm:text-xl'>CSS3</span>
                </div>
                <div className="skill-logo flex flex-col items-center">
                    <SiTailwindcss title='Tailwind CSS' className='text-7xl sm:text-8xl text-[#38BDF8] relative sm:hover:-top-1'/>
                    <span className='text-md sm:text-xl'>Tailwind CSS</span>
                </div>
                <div className="skill-logo flex flex-col items-center">
                    <TbBrandJavascript title='Javascript' className='text-7xl sm:text-8xl text-[#F0DC55] relative sm:hover:-top-1'/>
                    <span className='text-md sm:text-xl'>Javascript</span>
                </div>
                <div className="skill-logo flex flex-col items-center">
                    <TbBrandReact title='React JS' className='text-7xl sm:text-8xl text-[#08DDFF] relative sm:hover:-top-1'/>
                    <span className='text-md sm:text-xl'>React JS</span>
                </div>
                <div className="skill-logo flex flex-col items-center">
                    <TbBrandRedux title='Redux toolkit' className='text-7xl sm:text-8xl text-[#5A4488] relative sm:hover:-top-1'/>
                    <span className='text-md sm:text-xl'>Redux toolkit</span>
                </div>
                <div className="skill-logo flex flex-col items-center">
                    <DiGithubFull title='Github' className='text-7xl sm:text-8xl text-white relative sm:hover:-top-1'/>
                    <span className='text-md sm:text-xl'>Github</span>
                </div>
                <div className="skill-logo flex flex-col items-center">
                    <TbBrandFirebase title='Firebase' className='text-7xl sm:text-8xl text-[#FFCD36] relative sm:hover:-top-1'/>
                    <span className='text-md sm:text-xl'>Firebase</span>
                </div>
                <div className="skill-logo flex flex-col items-center">
                    <PiFigmaLogoFill title='Figma' className='text-7xl sm:text-8xl text-[#F35425] relative sm:hover:-top-1'/>
                    <span className='text-md sm:text-xl'>Figma</span>
                </div>
            </div>
            <MoveIcon/>
            <MoveRightIcon/>
        </section>
    );
}

export default Skills;

