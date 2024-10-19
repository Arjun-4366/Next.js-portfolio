"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PROJECTS } from "@/utils/data";
import { transitions, variants } from "@/utils/framerVariants";
import { MotionDiv, MotionImage } from "@/utils/motionTags";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper as SwiperMain, SwiperSlide } from "swiper/react";
import Swiper from "swiper";

import "swiper/css";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Page() {
  const [project, setProject] = useState(PROJECTS[0]);
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  const onSlideChange = (item: any): void => {
    setProject(PROJECTS[item?.activeIndex]);
  };

  const index = PROJECTS.findIndex((pro) => pro.name === project.name) + 1;

  const nextPro = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const prevPro = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="grid place-items-center lg:pt-0 sm:pt-32 pt-20 min-h-screen px-4 w-full">
      <div className="mt-12 w-full">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transitions.moveUp}
          className="text-center mb-10"
        >
          <h3>
            My<span> Project page</span>
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
              {index > 10 ? index : "0" + index}
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
                            src={"/open.png"}
                            alt="live"
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

          <div className="flex-1 flex items-center justify-center w-full flex-col ">
            <SwiperMain
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1.3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1.4,
                  spaceBetween: 30,
                },
              }}
              className="w-full max-w-xs sm:max-w-md md:max-w-lg flex items-center justify-center place-items-center"
              spaceBetween={20}
              onSlideChange={onSlideChange}
              onSwiper={(s) => setSwiper(s)}
            >
              {PROJECTS.map((pro,i) => (
                <SwiperSlide key={pro.id} className={cn(index - 1 !== i && "opacity-45", "")}>
                  <div className="min-w-[250px] min-h-[250px] mx-auto">
                    <Image
                      src={pro.img}
                      alt={pro.name}
                      width={300}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </SwiperMain>

            <div className="flex mt-4 gap-x-4">
              <button onClick={prevPro} disabled={index === 1}>
                <Image
                  src={"/previous.png"}
                  alt="prev"
                  width={55}
                  height={55}
                  className="cursor-pointer"
                />
              </button>
              <button onClick={nextPro} disabled={index === PROJECTS.length}>
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
