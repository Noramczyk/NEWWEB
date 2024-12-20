import React from "react";
import micro from "/src/videos/out.mp4"
import javaGame from "/src/videos/javaGame.mp4"
import stockAlgo from "/src/videos/threadAlgo.mp4"

const slideImages = [
    '/src/images/P1.jpg',
    '/src/images/P2.jpg',
    '/src/images/P4.jpg'
  ];
  
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }

const Home = () => {

    return (
        <div className='min-h-screen flex-[3] transition-all
        duration-500 dark:bg-black dark:text-white'>

            <main className="max-w-[1000px] flex-col gap-10 p-5
            md:mx-10 md:py-14">

                {/* <div className="space-y-5">

                    <h1 className="text-2x1 font-bold
                    md:text-4x1">About</h1>
                    
                    <p className="text-sm text-gray-600
                    dark:text-gray-400 md:text-base">
                        ddeseecce
                    </p>
                </div> */}

                <div className="space-y-10 font-bold md:text-4x1">Work Experience

                <div className="flex flex-col lg:flex-row lg:gap-20">
                        <ul>
                            <li className="relative flex flex-col gap-1 
                            border-1 p-6 before:absolute before:left-[-6px]
                            before:top-1/2 before:h-3 before:w-3
                            before:-translate-y-1/2 before:rounded-full
                            before:bg-black dark:before:bg-white
                            before:transform">
                                <span className="text-lg font-semibold">Software Engineer</span>
                                <span className="font-light">Auria Space</span>
                                <span className="text-sm text-gray-400">10/2022 - Present</span>
                                <span className="dark:text-gray-400">
                                Utilized Typescript, Python, and micro-services utilized for simulation development software.
                                Employed CI/CD pipelines for continuous integration and to identify security vulnerabilities.
                                Team lead who advised others in story creation from requirements and consulted with Software 
                                Architects/System Engineering on how to optimally solve problems.
                                Pytest & Jest for functional unit testing to increase overall code coverage and to 
                                implement TDD.
                                </span>
                            </li>
                            <li className="relative flex flex-col gap-1 
                            border-1 p-6 before:absolute before:left-[-6px]
                            before:top-1/2 before:h-3 before:w-3
                            before:-translate-y-1/2 before:rounded-full
                            before:bg-black dark:before:bg-white
                            before:transform">
                                <span className="text-lg font-semibold">Advanced Engineering Tech</span>
                                <span className="font-light">Maxar Space LLC</span>
                                <span className="text-sm text-gray-400">12/2018 – 07/2020</span>
                                <span className="dark:text-gray-400">
                                Adapted and implemented software scripts which tested many different functionalities of the
                                spacecrafts which was critical to its life cycle in space.
                                Performed RF & electrical testing on spacecrafts which progressed them through each stage until final completion.
                                Worked within a team that ensured all defined progress was being completed in a proficient manner.
                                </span>
                            </li>
                            <li className="relative flex flex-col gap-1 
                            border-1 p-6 before:absolute before:left-[-6px]
                            before:top-1/2 before:h-3 before:w-3
                            before:-translate-y-1/2 before:rounded-full
                            before:bg-black dark:before:bg-white
                            before:transform">
                                <span className="text-lg font-semibold">Embedded Software Engineer</span>
                                <span className="font-light">Self Employed</span>
                                <span className="text-sm text-gray-400">09/2015 - 01/2017</span>
                                <span className="dark:text-gray-400">
                                Developed clear and modifiable software solutions.
                                Interfaced with clients on a weekly basis to ensure all work was approved and within scope.
                                Data collection taken through instrumentation which utilized a Python GUI to track behavior 
                                and optimize individual prototypes. This allowed my clients get the best representation of how the product was performing.
                                Presented hardware solutions which automated control through many different electronic interfaces.
                                </span>
                            </li>

                        </ul>
                    </div>

                    <div className="flex flex-col items-center
                     justify-center gap-5">
                        <h1 className="text-2x1 font-bold md:text-4x1 gap-1">PROJECT DEMOS</h1>
                            <span className="font-light">Python stock market Algorithm</span>
                            <ul>
                                <video width="500" height="400" controls >
                                    <source src={stockAlgo} type="video/mp4"/>
                                </video>
                            </ul>
                            <li className="relative flex flex-col gap-1 
                            border-1 p-6 before:absolute before:left-[-6px]
                            before:top-1/2 before:h-3 before:w-3
                            before:-translate-y-1/2 before:rounded-full
                            before:transform">
                                <span className="text-sm text-gray-400">Multithreaded program with mutex locking critical sections</span>
                                <span className="text-sm text-gray-400">Autonomous algorithm utilizing API's and a websocket connection for data</span>
                                <span className="text-sm text-gray-400">Backtested to optimize performance</span>
                            </li>

                            <span className="font-light">Microcontroller based embedded system</span>
                            <ul>
                                <video width="500" height="400" controls >
                                    <source src={micro} type="video/mp4"/>
                                </video>
                            </ul>
                                <li className="relative flex flex-col gap-1 
                                border-1 p-6 before:absolute before:left-[-6px]
                                before:top-1/2 before:h-3 before:w-3
                                before:-translate-y-1/2 before:rounded-full
                                before:transform">
                                    <span className="text-sm text-gray-400">Software written in C</span>
                                    <span className="text-sm text-gray-400">Interrupt driven for concurrency</span>
                                    <span className="text-sm text-gray-400">Circuits developed to optimize performance</span>
                                </li>

                            <span className="font-light">3D game written in Java</span>
                            <ul>
                                <video width="500" height="400" controls >
                                    <source src={javaGame} type="video/mp4"/>
                                </video>
                            </ul>
                            <li className="relative flex flex-col gap-1 
                            border-1 p-6 before:absolute before:left-[-6px]
                            before:top-1/2 before:h-3 before:w-3
                            before:-translate-y-1/2 before:rounded-full
                            before:transform">
                                <span className="text-sm text-gray-400">Software written in Java</span>
                                <span className="text-sm text-gray-400">Physics / Javascript / Terrain / Skybox</span>
                                <span className="text-sm text-gray-400">Sound / AI / External Models / Lighting / Hierarchical SceneGraph</span>
                            </li>
                    </div>          
                </div>
            </main>
        </div>
    )
}

export default Home