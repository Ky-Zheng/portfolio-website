import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I'm always looking for new opportunities, and my inbox is open 24/7.
          Whether you have a questions or just want to say hi, shoot me an
          email!{" "}
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com/">
            <Image src={LinkedInIcon} alt="LinkedIn Icon" />
          </Link>
          <Link href="instagram.com/">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className=" text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#3f333f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="amazing.human@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className=" text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#3f333f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just Saying Hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className=" text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="bg-[#18191E] border border-[#3f333f] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hi Kaiyue, I'd like to connect with you!"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-2.5 rounded-lg w-full "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
