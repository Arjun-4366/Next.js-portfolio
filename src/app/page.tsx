"use client";

import { cn } from "@/lib/utils";

import { transitions, variants } from "@/utils/framerVariants";
import { MotionDiv } from "@/utils/motionTags";
import React from "react";

function page() {
  return (
   
    <div className="h-dvh flex overflow-hidden md:flex-row flex-col items-center justify-between pt-5 w-full">
      {/* parent div starts*/}
      <div className="flex flex-col h-full justify-center space-y-6 md:items-end items-center relative max-w-xl md:ml-auto flex-1">
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
          <h4 className="text-2xl">Developer</h4>
        </MotionDiv>

       <MotionDiv className={cn("md:text-right text-center relative md:-mt-8")} style={{top:"-20px"}}>
       <h1>Arjun T V</h1>
       </MotionDiv>
      
      </div>
      {/* parent div ends */}
      <div className="bg-red-500"></div>
    </div>
   
  );
}

export default page;
