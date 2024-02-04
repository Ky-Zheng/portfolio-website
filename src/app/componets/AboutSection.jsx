"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TABDATA = [
  {
    title: "Donation",
    id: "donation",
    content: (
      <ul className="list-disc pl-2">
        <p className=" text-gray-400 mb-5">
          Please join me to support human rights and animals in need.{" "}
        </p>
        <li className="mb-2">
          {" "}
          <p className="text-gray-400">
            <Link
              className="text-lg font-semibold text-purple-300 hover:text-blue-300"
              href="https://www.plannedparenthood.org/get-involved"
            >
              Planned Parenthood
            </Link>
            <br></br>
            Planned Parenthood, founded in 1916, is a renowned advocate and
            provider of sexual health care, education, and resources. Their
            mission is to ensure everyone has informed choices about their
            bodies and futures. With nearly 600 health centers across the U.S.,
            they offer preventive care, birth control, STI testing, and cancer
            screenings. Their commitment extends to inclusive, science-backed
            sex education, reaching millions in classrooms and online. With 18
            million supporters, they fight for reproductive rights nationwide.
            Globally, they collaborate with over 100 organizations to improve
            health care access, fund family planning, and advocate for global
            improvements. I am a donor to Planned Parenthood.{" "}
            <span className="text-white font-bold">
              I believe the access to quality health care is a HUMAN RIGHT and
              the access to abortion is a WOMEN&apos;S HUMAN RIGHT.
            </span>
          </p>
        </li>
        <li>
          {" "}
          <p className="text-gray-400">
            <Link
              className="text-lg font-semibold text-purple-300 hover:text-blue-300"
              href="https://www.homewardtrails.org/about/"
            >
              Homeward Trails Animal Rescue
            </Link>
            <br></br>
            Homeward Trails Animal Rescue, a 501(c)(3) non-profit founded in
            2002, dedicates itself to{" "}
            <span className="text-white font-bold">
              finding homes for dogs and cats from underprivileged communities,
              shelters, and owners unable to care for them.
            </span>{" "}
            They also have international partners, conduct spay/neuter campaigns
            in Puerto Rico, and initiated the Trails UP program in 2020 to
            combat animal homelessness in Virginia. I am a regular donor to
            Homeward Trails, where I adopted my cat Twizzler in 2016 when she
            was only 3 months old. They took care everything of her including
            vaccines and spay/neuter. I&apos;m grateful for their AMAZING work!!
          </p>
        </li>
      </ul>
    ),
  },
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
        <li>AWS tech stack</li>
        <li>Machine Learning</li>
        <li>Ecommerce Personalization</li>
        <li>Marketing Analytics</li>
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
          and Technology, 2023
        </li>
        <li>M.S, in Statistics, George Washington University, 2018</li>
        <li>B.S. in Mathematics, University of Michigan, 2015</li>
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
            className="hover:text-yellow-500"
            href="https://coursera.org/share/ae239cfe86b3df8ff2c605430c842a8a"
          >
            Applied Data Science with Python
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-yellow-500"
            href="https://www.youracclaim.com/badges/cdb4a69d-038b-4ccd-b85c-24d85cc70f9c/linked_in_profile"
          >
            SAS Certified Base Programmer for SAS 9
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-500" href="/images/padi.png">
            PADI Open Water Diver
          </Link>
        </li>
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
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4  xl:gap-16 sm:py-10 xl:px-16">
        <div className="md:grid justify-start">
          <Image
            src="/images/about-image.jpg"
            alt="about-image"
            width={500}
            height={500}
          />
          <p className="text-xs text-gray-400 pt-2">
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
            I&apos;m a versatile professional based in New York City. I&apos;m
            deeply passionate about data science, product management, design,
            and frontend development. I thrive on transforming complex data into
            actionable insights and excel in guiding projects from concept to
            success.
          </p>
          <br></br>
          <p>
            As a dedicated data scientist, I uncover meaningful patterns from
            data, while my product management expertise empowers me to lead
            cross-functional teams. Beyond my technical pursuits, I&apos;m an
            avid artist and aspiring personal trainer. My love for painting
            fuels my creativity, and I am committed to lifelong learning as I
            work towards becoming a certified personal trainer. What sets me
            apart is not just my technical skills but also my ability to
            communicate effectively, foster positive team dynamics, and unite
            diverse talents in any organization.
          </p>
          <br></br>
          <p>
            Welcome to my digital space that I build from scratch, where
            innovation, design, data, and positive energy converge to bring
            ideas to life!
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("donation")}
              active={tab === "donation"}
            >
              {" "}
              DONATION{" "}
            </TabButton>
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
