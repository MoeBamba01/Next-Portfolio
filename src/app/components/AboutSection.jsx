"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disk pl-2'> 
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>ReactJs</li>
            <li>NextJs</li>
            <li>Express</li>
            <li>Dart</li>
            <li>FLutter</li>
            <li>Adobe Illustrator</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul className='list-disk pl-2'>
            <li>Universite Cheikh Anta Diop(UCAD)</li>
            <li>Gomycode</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "Certifications",
        content: (
            <ul className='list-disk pl-2'>
            <li> Gomycode Fullstack Js Bootcamp </li>
            <li>AWS Cloud Practitionner</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [ isPending , startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition (() => {
            setTab(id);
        });
    };

  return (
    <section className='text-white '>
        <div className='md:grid md:grid-cols-2 gap-8 itemss-center py-8 px-image source \4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg '>
                    I'm a versatile full-stack web developer with a focus on mobile development. My expertise extends beyond code – as a graphic designer, I seamlessly blend functionality with visually captivating design. With a keen eye for detail and a commitment to user-centric experiences, I bring ideas to life through the synergy of technology and creativity. Explore my portfolio and witness the seamless fusion of innovation and design in every project.
                </p>
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}
                    >
                    {" "}
                    Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("Education")} 
                    active={tab === "Education"}
                    >
                    {" "}
                    Education{" "}
                        
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("Certifications")} 
                    active={tab === "Certifications"}
                    >
                    {" "}
                    Certifications{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find ((t) => t.id === tab).content}</div>
            </div>
        </div>
        </section>
    
  )
} 

export default AboutSection