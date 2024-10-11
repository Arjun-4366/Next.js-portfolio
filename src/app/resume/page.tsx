"use client"

import ErrorBoundary from "@/utils/ErrorBoundary";
import { transitions, variants } from "@/utils/framerVariants";
import { MotionImage } from "@/utils/motionTags";
import React from "react";

function page() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen pt-32 2xl:pt-60 pb-4">
      <div className="flex md:flex-row flex-col md:gap-0 gap-7 items-center justify-center w-full">
        
        <MotionImage
          initial="initial"
          animate="animate"
          variants={variants.scale}
          transition={transitions.scale}
          src={"/logo1.jpg"}
          width={155}
          height={155}
          alt="profile"
          className="md:w-36 w-28 rounded-full"
        />
       
        
      </div>
    </div>
  );
}

export default page;
