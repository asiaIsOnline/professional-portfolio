"use client"
import React from 'react';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { TypeAnimation } from 'react-type-animation';
import Lottie from 'lottie-react';

import PageHeader from './ui/PageHeader';
import { BentoGrid } from "./ui/BentoGrid";
import { ExpertiseTools } from './ui/ExpertiseTools';

import profilePic from '../public/profile-pic.png';
import CSULBSeal from '../public/CSU-long-beach-seal.svg';
import coffeeCup from '../public/coffee-cup.svg';
import meltingPizza from '../public/melting-pizza.svg';
import sleepyFace from '../public/sleepy-face.svg';
import sunset from '../public/sunset.svg';
import cityBuildings from '../public/city-buildings.svg';
import SwordSlash from '../public/Sword_Slash.json';
import { SiFigma, SiHtml5, SiCss3, SiTailwindcss, SiTypescript, SiReact, SiPython } from "react-icons/si";
import { BiLogoPostgresql } from 'react-icons/bi';

const tools = [
  {
    id: 1,
    toolName: "Figma",
    designation: "The industry standard collaborative design tool",
    icon: <SiFigma className='w-8 h-8 mx-auto'/>
  },
  {
    id: 2,
    toolName: "HTML5",
    designation: "The markup language for web pages",
    icon: <SiHtml5 className='w-8 h-8 mx-auto'/>
  },
  {
    id: 3,
    toolName: "CSS3",
    designation: "The stylesheet language for web design",
    icon: <SiCss3 className='w-8 h-8 mx-auto'/>
},
  {
    id: 4,
    toolName: "TailwindCSS",
    designation: "The current standard CSS framework",
    icon: <SiTailwindcss className='w-8 h-8 mx-auto'/>
  },
  {
    id: 5,
    toolName: "TypeScript",
    designation: "The working developer's JavaScript",
    icon: <SiTypescript className='w-7 h-7 mx-auto'/>
}, 
  {
    id: 6,
    toolName: "React & React Native",
    designation: "The front-end library for creating responsive user interfaces for various devices",
    icon: <SiReact className='w-8 h-8 mx-auto'/>
  },
  {
    id: 7,
    toolName: "Python",
    designation: "A high-level language for automation, databases, and machine learning",
    icon: <SiPython className='w-8 h-8 mx-auto'/>
},
{
    id: 8,
    toolName: "PostgreSQL",
    designation: "A popular relational database maangement system",
    icon: <BiLogoPostgresql className='w-10 h-10 mx-auto'/>
},
]

const About = () => {

  return (
    <div id="about">
        <PageHeader title="About"/>
        <div className='relative w-full'>
          <div className='absolute top-1/3 -left-4 w-40 h-40 md:w-2/3 md:h-2/3 bg-steelPink rounded-full filter blur-2xl opacity-25 animate-gradientAnimation
            dark:mix-blend-screen dark:opacity-35'></div>
            <div className='
            absolute top-24 left-24 w-40 h-40 md:w-2/3 md:h-2/3 bg-ultramarine rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-gradientAnimation animation-delay-2000
            dark:bg-slateBlue dark:mix-blend-screen dark:opacity-25'></div>
            <div className='
            absolute top-0 right-0 w-40 h-40 md:w-2/3 md:h-2/3 bg-fountainBlue rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-gradientAnimation animation-delay-4000
            dark:mix-blend-screen dark:opacity-35'></div>
          <BentoGrid className="relative max-w-7xl mx-auto md:auto-rows-[8rem] gap-y-8 gap-x-4 z-10" >
            {/*About section - Top Row*/}
            <AboutCard className='p-10 col-span-3 row-span-2'>
                <h3 className='text-2xl font-bold tracking-wider '>Bio</h3>
                <p>As a UX/UI designer and full-stack developer I have and continue to have a passion for design and development fueled be a personal desire for learning and self-improvement.</p>
            </AboutCard>

            <AboutCard className='p-10 col-span-3 row-span-2'>
              <h3 className='text-2xl font-bold tracking-wider '>Hobbies</h3>
              <p>I won’t lie I spend a ton of time working but you might also catch me...
                <TypeAnimation 
                  sequence={[
                    "playing a new RPG that's consumed my personal life 🎮", 1000,
                    "hanging out with my daughter watching dancing fruit 🍓", 1000,
                    "trying out a new recipe I found on YouTube 🍲", 1000,
                    "spending time in my garden trying to grow something new 🪴", 1000,
                    "going on long drives through the city with my husband 🚗", 1000,
                  ]}
                  wrapper='span'
                  repeat={Infinity}
                />
              </p>
            </AboutCard>

            {/*
            <AboutCard className='p-5 col-span-1 row-span-2'>
              <Lottie 
                animationData={SwordSlash}
                loop={true}
              />
            </AboutCard>
            */}

            {/*About section - Middle Row*/}
            <AboutCard className='col-span-2 row-span-1'>
              <h3 className='text-2xl font-bold text-center tracking-wider'>6+ Years of Experience</h3>
            </AboutCard>

            <AboutCard className='p-5 col-span-2 row-span-2 row-start-4'>
              <h3 className='text-2xl font-bold text-center tracking-wider'>Fueled By...</h3>
              <div className='mx-auto flex gap-6'>
                <Image
                  src={coffeeCup}
                  alt="Coffee cup with heart"
                  width={80}
                  height={80}
                />
                  <Image
                  src={meltingPizza}
                  alt="Coffee cup with heart"
                  width={80}
                  height={80}
                />
                <Image
                  src={sleepyFace}
                  alt="Coffee cup with heart"
                  width={80}
                  height={80}
                />
              </div>
            </AboutCard>

            <AboutCard className='col-span-2 row-span-3 place-items-center p-4'>
              <Image
                src={profilePic}
                alt="Asia Thompson Profile Pic"
                width={200}
                height={200}
                className='rounded-full'
              />
              <h3 className='text-2xl font-bold tracking-wider'>Asia Thompson</h3>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 rounded-full bg-green'></div>
                Open for Work
              </div>
            </AboutCard>

            <AboutCard className='p-10 col-span-2 row-span-2'>
              <h3 className='text-2xl font-bold tracking-wider'>Born & Raised</h3>
              <p>As a Cali girl I’m used to perfect weather, crowded cities, and PST time, but I can work with any time zone.</p>
            </AboutCard>

            <AboutCard className='col-span-1 row-span-1 col-start-5 row-start-5'>
              <Image 
                src={sunset}
                alt="Sunset"
                width={80}
                height={80}
                className='mx-auto'
              />
            </AboutCard>

            <AboutCard className='col-span-1 row-span-1 col-start-6 row-start-5'>
              <Image 
                src={cityBuildings}
                alt="City buildings"
                width={80}
                height={80}
                className='mx-auto'
              />
            </AboutCard>

            {/*About section - Bottom Row*/}
            <AboutCard className='p-6 col-span-1 row-span-2 place-items-center content-between'>
              <h3 className='text-2xl font-bold tracking-wider'>Attended</h3>
              <Image
                src={CSULBSeal}
                alt="California State University Long Beach seal"
              />
            </AboutCard>

            <AboutCard className='p-10 col-span-3 row-span-2 content-between'>
              <h3 className='text-2xl font-bold tracking-wider'>Prior Positions</h3>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-4'>
                  <p className='font-bold'>UX Designer & Full-Stack Developer | Previous Writer</p>
                  <div className='flex justify-between'>
                    <p>UpWork</p>
                    <p>2016 - 2021</p>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <p className='font-bold'>Coding Foundations Curriculum Developer</p>
                  <div className='flex justify-between'>
                    <p>Mastery Coding</p>
                    <p>2021 - 2023</p>
                  </div>
                </div>
              </div>
            </AboutCard>


            <AboutCard className='p-10 col-span-2 row-span-2'>
              <h3 className='text-2xl font-bold tracking-wider'>Most Used Tech</h3>
              <ExpertiseTools className="flex flex-row flex-wrap items-center justify-center" tools={tools}/>
            </AboutCard>

          </BentoGrid>
        </div>
    </div>
  )
}

const AboutCard = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div 
    className={cn(
      "flex flex-col flex-1 place-content-center gap-6 w-full h-full min-h-[8rem] border-4 rounded-2xl border-black/10 shadow-lg bg-white dark:bg-black dark:border-white/10", 
      className
    )}
  >
    {children}
  </div>
);

export default About

