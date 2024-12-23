import React from "react";
import image from '/images/HalfDome.jpg'
import {BiCurrentLocation, BiEnvelope, BiPhone, BiSun, BiMoon, BiLogoLinkedin} from 'react-icons/bi'
import { FaDocker,FaPython,FaReact,FaGithub,FaJava,FaLinux,FaJira,FaConfluence } from "react-icons/fa";
import { SiCplusplus,SiTypescript,SiMysql } from "react-icons/si";
import { DiMongodb, DiMysql } from "react-icons/di";
import { MdHtml,MdCss } from "react-icons/md";

const HeaderLeft = ({darkMode,toggleDarkMode}) => {

    return (
        <div className='min-h-screen flex-[1] relative p-10
        transition-all duration-500 dark:bg-black dark:text-white sm:border-r
        dark:border-gray-700'>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center
                justify-center gap-5">
                    <img src={image} alt="" className='w-32" rounded-full'/>
                    
                    <div className="text-center space-y-1">
                        <h1 className="text-4x1 font-light">
                            <span className="font-semibold">Luke Noramczyk
                            </span>
                            
                        </h1>
                        <h3 className="text-x1 font-light">Software Engineer</h3>
                    </div>
                    <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
                        {
                            darkMode ? (
                                <BiSun className="text-2x1"/>
                            ) : (
                                <BiMoon className='text-2x1'/>
                            )
                        }
                    </button>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <BiCurrentLocation className="text-x1"/>
                            <span>Colorado Springs, CO</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiEnvelope className="text-x1"/>
                            <span>noramczykl@yahoo.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiPhone className="text-x1"/>
                            <span>530-867-0003</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start
                gap-5 border-b p-5 dark:border-gray-700">
                    <ul className="space-y-3"> 
                    <li className="flex items-center gap-2">
                            <BiLogoLinkedin className="text-x1"/>
                            <span>luke-noramczyk-314aab102</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start
                gap-5 border-b p-5 dark:border-gray-700">
                    <h1 className="text-base font-semibold md:text-2x1">EDUCATION</h1>
                    <ul>
                        <li className="relative flex flex-col gap-1 
                        border-1 p-6 before:absolute before:left-[-6px]
                        before:top-1/2 before:h-3 before:w-3
                        before:-translate-y-1/2 before:rounded-full
                        before:bg-black dark:before:bg-white
                        before:transform">
                            <span className="font-semibold md:text-lg">B.S. Computer Science</span>
                            <span className="font-light">California State University, Sacramento</span>
                            <span className="text-sm text-grey-400">2018-2021</span>
                        </li>
                        <li className="relative flex flex-col gap-1 
                        border-1 p-6 before:absolute before:left-[-6px]
                        before:top-1/2 before:h-3 before:w-3
                        before:-translate-y-1/2 before:rounded-full
                        before:bg-black dark:before:bg-white
                        before:transform">
                            <span className="font-semibold md:text-lg">A.S. Computer Science</span>
                            <span className="font-light">Folsom Lake College</span>
                            <span className="text-sm text-grey-400">2018-2021</span>
                        </li>
                        <li className="relative flex flex-col gap-1 
                        border-1 p-6 before:absolute before:left-[-6px]
                        before:top-1/2 before:h-3 before:w-3
                        before:-translate-y-1/2 before:rounded-full
                        before:bg-black dark:before:bg-white
                        before:transform">
                            <span className="font-semibold md:text-lg">A.A. Math & Science</span>
                            <span className="font-light">Folsom Lake College</span>
                            <span className="text-sm text-grey-400">2018-2021</span>
                        </li>

                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start">
                    <h1 className="text-base font-semibold">SKILLS</h1>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex flex-wrap gap-3">
                            <FaJava size={35}/>
                            <FaPython size={35}/>
                            <SiCplusplus size={35}/>
                            <FaGithub size={35}/>
                            <SiTypescript size={35}/>
                            <FaDocker size={35}/>

                            <FaReact size={35}/>
                            <MdHtml size={35}/>
                            <MdCss size={35}/>

                            <DiMongodb size={35}/>
                            <SiMysql size={35}/>

                            <FaLinux size={35}/>
                            <FaJira size={35}/>
                            <FaConfluence size={35}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
    
}

export default HeaderLeft