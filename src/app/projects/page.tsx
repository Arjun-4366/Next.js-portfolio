"use client";
import { useState } from "react";
import { PROJECTS } from "@/utils/data";
import { transitions, variants } from "@/utils/framerVariants";
import { MotionDiv, MotionImage } from "@/utils/motionTags";
import Image from "next/image";
import Link from "next/link";


function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = PROJECTS[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === PROJECTS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PROJECTS.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="grid place-items-center lg:pt-0 sm:pt-32 pt-20 min-h-screen px-4 w-full">
      <div className="mt-12 w-full">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transitions.moveUp}
          className="text-center mb-10 mt-2"
        >
          <h3>
            <span>Projects</span>
          </h3>
        </MotionDiv>
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveDown}
          transition={transitions.moveDown}
          className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 lg:pb-0 pb-7 items-center justify-between w-full"
        >
          <div className="flex-1 space-y-3 text-center lg:text-left">
            <h2 className="text-6xl font-semibold text-primary">
              {currentIndex + 1 > 9 ? currentIndex + 1 : "0" + (currentIndex + 1)}
            </h2>
            <h3 className="text-2xl">{project.name}</h3>
            <p className="w-full lg:w-10/12 text-primary font-semibold tracking-wider space-x-2 text-sm lg:text-base">
              {project.description}
            </p>
            <div className="flex gap-5 justify-center lg:justify-start">
              {project.stack.map((img, i) => (
                <MotionImage
                  key={`${project.name}-${i}`}
                  initial="initial"
                  animate="animate"
                  variants={variants.scale}
                  transition={transitions.scale}
                  src={img}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              ))}
            </div>
            <div className="flex gap-x-3 justify-center lg:justify-start">
              {project.git && (
                <Link href={project.git}>
                  <Image
                    src={"/github.png"}
                    alt="github"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </Link>
              )}
              {project.live && (
                <Link href={project.live}>
                  <Image
                    src={"/open.png"}
                    alt="live"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </Link>
              )}
            </div>
          </div>

       
          <div className="flex-1 flex items-center justify-center w-full flex-col">
            <div className="min-w-[250px] min-h-[250px] mx-auto">
              <MotionImage
                initial = "initial"
                animate = "animate"
                variants={variants.moveLeft}
                transition={transitions.moveLeft}
                src={project.img}
                alt={project.name}
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex mt-4 gap-x-4">
              <button onClick={prevSlide} disabled={currentIndex === 0}>
                <Image
                  src={"/previous.png"}
                  alt="prev"
                  width={55}
                  height={55}
                  className="cursor-pointer"
                />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex === PROJECTS.length - 1}
              >
                <Image
                  src={"/nextslide.png"}
                  alt="next"
                  width={55}
                  height={55}
                  className="cursor-pointer"
                />
              </button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}

export default Page;
