import React from 'react';
import { VscGithub } from "react-icons/vsc";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { SiLeetcode } from "react-icons/si";
import MoveIcon from '../componets/MoveLeftIcon';
import { FaDownload } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";

const Hero = () => {
    return (
        <section className='page flex flex-col items-center justify-evenly p-5'>
            <div className="img-identity flex md:gap-5 items-start  md:px-10 md:justify-normal flex-wrap">
                <img src="my_pic.jpg" alt="myImg" className='w-30 mx-auto rounded-lg' title='Sunny Mishra'/>
                <div className="name-work flex flex-col max-w-fit mx-auto justify-center gap-3">
                    <h1 className='text-4xl md:text-6xl xl:text-8xl font-bold max-w-fit mx-auto'>Sunny mishra</h1>
                    <p className='text-2xl md:text-3xl xl:text-4xl font-medium tracking-wider max-w-fit mx-auto'>I'm a frontend developer</p>
                    <a className='flex gap-2 items-center bg-black rounded-md max-w-fit px-3 py-2 cursor-pointer mx-auto active:scale-95' href="/Sunny_Mishra_Resume.pdf" download="Sunny_Resume_New_2.pdf" title='Download Resume'><FaDownload /><span>Download Resume</span></a>
                    <p className='flex items-center gap-4 select-none text-2xl md:text-4xl max-w-fit mx-auto cursor-default bg-white px-3 py-2 rounded-md'>
                        <a href="https://www.linkedin.com/in/the-sunny-mishra/" target='_blank' title='LinkedIn'><PiLinkedinLogoBold className='cursor-pointer text-[#1469C7] relative transition-all md:hover:bottom-0.5' /></a>
                        <a href="https://github.com/sunny6289" target='_blank' title='Github'><VscGithub className='cursor-pointer text-[#000] relative transition-all md:hover:bottom-0.5' /></a>
                        <a href="https://leetcode.com/u/sunny_6289/" target='_blank' title='LeetCode'><SiLeetcode className='cursor-pointer text-[#FDA31C] relative transition-all md:hover:bottom-0.5' /></a>
                        <a href='mailto:sunmishra70@gmail.com?body=Hi%20Sunny%20Mishra,%20' title='Mail'><MdEmail className='cursor-pointer text-[#1469C7] relative transition-all md:hover:bottom-0.5' /></a>
                    </p>
                </div>
            </div>
            <div className="about h-full overflow-y-auto scroll-none mt-5 md:px-10">
                <h3 className='max-w-fit mx-auto tracking-wider mb-4 text-4xl font-medium '>About</h3>
                <p className='text-xl'>Hi, I’m a passionate <strong>Frontend Developer</strong> with a knack for crafting seamless and engaging web experiences. Armed with a solid foundation in <strong>HTML5, CSS3, JavaScript</strong>, and a deep love for modern tools like <strong>React.js and Tailwind CSS</strong>, I bring ideas to life with clean, efficient, and user-focused designs.<br/><br/>

                    As a 4th-year Computer Science Engineering student, I blend academic knowledge with hands-on experience to create impactful projects, many of which you can explore in my portfolio. Whether it’s building dynamic interfaces or optimizing user journeys, I thrive on turning challenges into elegant solutions.<br/><br/>

                    Let’s build something amazing together! 🚀</p>
            </div>
            <MoveIcon />
            
        </section>
    );
}

export default Hero;
