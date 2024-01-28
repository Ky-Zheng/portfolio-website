"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "Next.js Portfolio",
    description:
      "This is my portfolio website built with Next.js and Tailwind CSS.",
    imgUrl: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kaiyue-zheng/kaiyue-website",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Digital Shopping Assistant",
    description:
      "This is a hackathon project to build a chatbot as a digital assistant.",
    imgUrl: "/images/projects/mav.png",
    tag: ["All", "PM"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Some project to be added",
    description: "This is a placeholder.",
    imgUrl: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Some project to be added",
    description: "This is a placeholder.",
    imgUrl: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6">
        My Projects
      </h2>
      <div className="text-white flex felx-row justify-center items-center gap-2 py-6">
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
          name="PM"
          isSelected={tag === "PM"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
