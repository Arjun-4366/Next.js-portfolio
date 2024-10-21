"use client"

import ContactForm from "@/components/ui/ContactForm";
import { transitions, variants } from "@/utils/framerVariants";
import { MotionDiv } from "@/utils/motionTags";
import React from "react";

const page = () => {
  return (
    <div className=" container grid place-items-center h-screen 2xl:pt-0 pt-20">
      <MotionDiv
        className="z-10"
        initial="initial"
        animate="animate"
        variants={variants.moveUp}
        transition={transitions.moveUp}>  

<div className="text-center">
  <h3>
   Let&apos;s<span> Build</span> Something Together
  </h3>
  <p className="text-gray-500 mt-5 w-auto mx-auto">
  Looking for a MERN stack developer? Leave a Message
  </p>
</div>
<ContactForm/>
        </MotionDiv>
    </div>
  );
};

export default page;
