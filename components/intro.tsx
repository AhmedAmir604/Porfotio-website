"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useHooks } from "@/lib/hook";
import { useActiveSectionContext } from "@/context-provider/active-section";

export default function Intro() {
  const customRef = useHooks(0.75, "Home");
  const { setActiveSelection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={customRef}
      id="home"
      className="mb-28 max-w-[50rem] text-center
    sm:mb-0 scroll-mt-[100rem]"
      onClick={() => (
        setActiveSelection("Contact"), setTimeOfLastClick(Date.now())
      )}
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.2,
              type: "tween",
            }}
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              height={120}
              width={120}
              quality={100}
              priority={true}
              alt="Profile Picture"
              className=" h-24 w-24 rounded-full border-white border-[0.35rem] shadow-xl"
            ></Image>
          </motion.div>

          <motion.span
            className="absolute right-0 bottom-0 text-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.1,
              duration: 0.7,
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className=" text-2xl font-medium mt-4 !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center font-medium text-lg gap-2 px-4 mt-5 justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex item-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active-scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="mt-1 opacity-70 group-hover:translate-x-1 transition " />
        </Link>
        <a
          href="/CV.pdf"
          className="group bg-white px-7 py-3 flex item-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 active-scale-105 transition
          cursor-pointer borderBlack dark:bg-white/10"
          download
        >
          Download CV{" "}
          <HiDownload className="mt-1 opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active-scale-105 transition
          cursor-pointer border border-black/20 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active-scale-105 transition
          cursor-pointer border border-black/20 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
