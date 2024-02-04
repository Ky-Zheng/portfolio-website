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
    previewUrl: "kaiyuezheng.com",
  },
  {
    id: 2,
    title: "Digital Shopping Assistant",
    description:
      "This is a company-wise prize-winning project: a prototype of AI powered digital shopping assitant.",
    imgUrl: "/images/projects/mav.png",
    tag: ["All", "PM"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Enterprise Web Application",
    description:
      "This web application is designed for enterprise purposes, allowing users(marketers, stylists, operations, and etc) to access customer and product information.",
    imgUrl: "/images/projects/3.png",
    tag: ["All", "Web", "PM"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Painting Project no.1",
    description: "Acrylic on canvas, 11x14 inches",
    imgUrl: "/images/projects/paint1.png",
    tag: ["All", "Art", "Painting"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Painting Project no.2",
    description: "Acrylic on canvas, 11x14 inches",
    imgUrl: "/images/projects/paint2.png",
    tag: ["All", "Art", "Painting"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Painting Project no.3",
    description: "Acrylic on canvas, 11x14 inches",
    imgUrl: "/images/projects/paint3.png",
    tag: ["All", "Art", "Painting"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Photography Project no.1",
    description: "Manhattan, New York",
    imgUrl: "/images/projects/photo1.png",
    tag: ["All", "Art", "Photography"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Photography Project no.2",
    description: "Dia, Beacon",
    imgUrl: "/images/projects/photo2.png",
    tag: ["All", "Art", "Photography"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Photography Project no.3",
    description: "Whiteney Museum",
    imgUrl: "/images/projects/photo3.png",
    tag: ["All", "Art", "Photography"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Coming Soon...",
    description: "My bread and butter project",
    imgUrl: "/",
    tag: ["All", "DS"],
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
      <h2
        id="projects"
        className="text-center text-4xl font-bold text-white mt-20 mb-6"
      >
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
          name="Art"
          isSelected={tag === "Art"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DS"
          isSelected={tag === "DS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="PM"
          isSelected={tag === "PM"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
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
