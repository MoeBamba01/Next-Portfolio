"use client";
import React, { useState, useRef } from "react";
import ProjectCard from './ProjectCard'
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "E-commerce Application",
      description: "A FullStack E-commerce app Built with Reactjs",
      image: "/images/Projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/MoeBamba01/Final-Projet.git",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Qr Code Generator",
      description: "A Simple QrCode Generator Built wit Vite and ReactJs",
      image: "/images/Projects/Qr-Code-Gen.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/MoeBamba01/Qr-Code-Generator.git",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Movie List App",
      description: "A Movie LIst App Buit WIth React",
      image: "/images/Projects/Movie-list.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/MoeBamba01/React-Hooks.git",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Responsive Web-Design Training ",
      description: "A simple Responsive Website Example",
      image: "/images/Projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/MoeBamba01/CSS-HTML-Workshop.git",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Express JS Test",
      description: "Authentication and CRUD operations",
      image: "/images/Projects/Express-test.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/MoeBamba01/Express-Master.git",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Todo List App",
      description: "A Simple Todo List app Built with ReactJs",
      image: "/images/Projects/Todo.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/MoeBamba01/Redux-Master.git",
      previewUrl: "/",
    },
  ];





  const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectsSection;