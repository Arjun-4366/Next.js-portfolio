"use client";

import { cn } from "@/lib/utils";
import { Luckiest_Guy } from "next/font/google";
import { transitions, variants } from "@/utils/framerVariants";
import { MotionButton, MotionDiv, MotionImage } from "@/utils/motionTags";
import React from "react";
import { DownloadIcon } from "lucide-react";
import { SOCIAL_MEDIA } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

const luck = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
});

function page() {
  return (
    <div className="h-dvh flex overflow-hidden md:flex-row flex-col items-center justify-between pt-5 w-full px-3">
      {/* parent div starts*/}
      <div className="flex flex-col h-full justify-center space-y-6 md:items-end items-center relative max-w-xl md:ml-auto flex-1 gap-5 mt-8">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.rise}
          transition={transitions.rise}
          className="absolute flex items-center gap-x-4 -rotate-90 md:-left-4 -left-28 md:top-auto top-auto text-white">
          <MotionDiv
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            variants={variants.rise}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            className="border-4 size-14 rounded-full grid place-items-center">
            <div className="size-3 rounded-full bg-white"></div>
          </MotionDiv>
          <h4 className={cn("text-2xl", luck.className)}>
            <span className="text-primary">MERN</span>
            <br />
            <span>Developer</span>
          </h4>
        </MotionDiv>

        <MotionDiv
          initial={"initial"}
          variants={variants.moveRight}
          transition={transitions.moveRight}
          animate={"animate"}
          className={cn(
            "md:text-right text-center  md:-mt-8 mx-8",
            luck.className
          )}
          style={{ top: "-20px" }}>
          <h1 className="text-primary">
            Arjun T V <br />
            <MotionButton
              className="font-mono flex items-center justify-center mt-2 ml-3"
              whileHover={{ scale: 0.95 }}
              initial="initial"
              animate="animate"
              variants={variants.moveUp}
              transition={transitions.moveUp}>
              <DownloadIcon className="mr-2" />
              Download CV
            </MotionButton>
            <MotionDiv
              className="flex items-center justify-evenly gap-x-3 md:absolute mx-8 mt-3"
              initial="initial"
              animate="animate"
              variants={variants.moveDown}
              transition={{
                ...transitions.moveDown,
                delay: 1,
              }}>
              {SOCIAL_MEDIA.map((item, i) => (
                <Link href={item.link}>
                  <Image
                    key={i}
                    src={item.icon}
                    alt={item.name}
                    width={25}
                    height={25}
                    className="object-cover cursor-pointer max-h-full hover:scale-110"
                  />
                </Link>
              ))}
            </MotionDiv>
          </h1>
        </MotionDiv>
      </div>
      {/* parent div ends */}
      <div className=" flex md:max-w-[50%] max-w-lg  items-end self-end">
        <MotionImage
          src={"/her01.png"}
          alt="hero"
          width={480}
          height={480}
          className="rounded-full object-cover max-h-full mb-3"
          initial="initial"
          animate="animate"
          variants={variants.moveLeft}
          transition={{
            ...transitions.moveLeft,
            delay:1.5
          }}
        />
      </div>
    </div>
  );
}

export default page;
