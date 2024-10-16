"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/utils/data";
import { transitions, variants } from "@/utils/framerVariants";
import { MotionDiv, MotionImage } from "@/utils/motionTags";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

function page() {
  const [project, setProject] = useState(PROJECTS[0]);
  const [swiper, setSwiper] = useState(null);
  const onSlideChange = (item: any): void => {
    setProject(PROJECTS[item?.activeIndex]);
  };

  const index = PROJECTS.findIndex((pro) => pro.name === project.name) + 1;

  const nextPro = () => {
    swiper.nextSlide();
  };

  const prevPro = () => [swiper.prevSlide()];

  return (
    <div className="grid place-items-center lg:pt-0 sm:pt-32 pt-20 min-h-screen px-10">
      <div className="mt-12">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transitions.moveUp}
          className="text-center mb-10">
          <h3>
            My<span> Project page</span>
          </h3>
        </MotionDiv>
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveDown}
          transition={transitions.moveDown}
          className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 lg:pb-0 pb-7 items-center justify-between w-full">
          <div className="flex-1 space-y-3">
            <h2 className="text-6xl font-semibold text-primary">
              {index > 10 ? index : "0" + index}
            </h2>
            <h3>{project.name}</h3>
            <p className="w-10/12 text-primary">{project.description}</p>
            <div className="flex gap-5">
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
                />
              ))}
            </div>
            <div className="flex gap-x-3">
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="bg-black p-2.5 rounded-full">
                      {project.git && (
                        <Link href={project.git}>
                          <Image
                            src={"/github.png"}
                            alt="github"
                            width={40}
                            height={40}
                          />
                        </Link>
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-white">Github</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="bg-black p-2.5 rounded-full">
                    {project.live && (
                        <Link href={project.live}>
                          <Image
                            src={"/github.png"}
                            alt="github"
                            width={40}
                            height={40}
                          />
                        </Link>
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-white">Live Demo</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="flex-1 flex items-center flex-col ">
            <Swiper
              breakpoints={{
                499: {
                  slidesPerView: 1,
                },
                999: {
                  slidesPerView: 1.4,
                },
              }}
              className="w-full md:max-w-lg mx-w-[250px]"
              spaceBetween={20}
              onSlideChange={onSlideChange}
              onSwiper={(s) => setSwiper(s)}>
              {PROJECTS.map((pro) => (
                <SwiperSlide
                  key={pro.id}
                  className={cn(index - 1 !== index && "opacity-45", "")}>
                  <Image
                    src={pro.img}
                    alt={pro.name}
                    width={300}
                    height={300}
                    // layout="responsive"
                    className="object-contain  rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}

export default page;
