"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TABDATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>SQL</li>
        <li>Next.js</li>
        <li>React</li>
        <li>Figma</li>
        <li>JIRA</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          M.S. in Computer Information Science, Harrisburg University of Science
          and Technology
        </li>
        <li>M.S. in Statistics, George Washington University</li>
        <li>B.S. in Mathematics, University of Michigan</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <Link
            className="hover:text-orange-500"
            href="https://coursera.org/share/ae239cfe86b3df8ff2c605430c842a8a"
          >
            Applied Data Science with Python
          </Link>
        </li>
        <li>SAS Certified Base Programmer for SAS 9</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="md:grid md:grid-rows-2">
          <Image
            src="/images/about-image.jpg"
            alt="about-image"
            width={500}
            height={500}
          />
          <p className="text-xs text-gray-400 row-start-2 pt-2">
            Photo by
            <Link
              className="hover:text-orange-500"
              href="https://unsplash.com/@wasdrew"
            >
              {" "}
              Andras Vas
            </Link>
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 mt-8">About Me</h2>
          <p className="text-base md:text-lg">
            I'm a versatile professional based in New York City. I'm deeply
            passionate about data science, product management, design, and
            frontend development. I thrive on transforming complex data into
            actionable insights and excel in guiding projects from concept to
            success.
          </p>
          <br></br>
          <p>
            As a dedicated data scientist, I uncover meaningful patterns from
            data, while my product management expertise empowers me to lead
            cross-functional teams. Beyond my technical pursuits, I'm an avid
            artist and aspiring personal trainer. My love for painting fuels my
            creativity, and I'm committed to lifelong learning as I work towards
            becoming a certified personal trainer. What sets me apart is not
            just my technical skills but also my ability to communicate
            effectively, foster positive team dynamics, and unite diverse
            talents in any organization.
          </p>
          <br></br>
          <p>
            Welcome to my digital space that I build from scratch, where
            innovation, design, data, and positive energy converge to bring
            ideas to life!
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TABDATA.find((t) => t.id == tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
