"use client";

import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import ErrorBoundary from "@/utils/ErrorBoundary";
import { transitions, variants } from "@/utils/framerVariants";
import {
  MotionButton,
  MotionDiv,
  MotionImage,
  MotionTabs,
} from "@/utils/motionTags";

import React from "react";

function page() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen pt-32 2xl:pt-60 pb-4">
      <div className="flex md:flex-row flex-col items-center justify-between gap-5 md:gap-0 w-full">
        <div className="flex md:flex-row flex-col md:gap-0 gap-X-5 items-center">
          <MotionImage
            initial="initial"
            animate="animate"
            variants={variants.scale}
            transition={transitions.scale}
            src={"/resumelogo.png"}
            width={155}
            height={155}
            alt="profile"
            className="md:w-36 w-28 rounded-full"
          />
          <MotionDiv
            initial="initial"
            animate="animate"
            variants={variants.moveDown}
            transition={transitions.moveDown}
            className="sm:text-left text-center ml-3 mt-2 ">
            <h3 className="text-primary mb-2">Arjun T V</h3>
            <h5>Bangalore,India</h5>
          </MotionDiv>
        </div>
        <MotionButton
          className=""
          initial="initial"
          animate="animate"
          variants={variants.moveDown}
          transition={transitions.moveDown}
          variant="outline">
          MERN Stack Developer
        </MotionButton>
      </div>
      <MotionTabs
        initial="initial"
        animate="animate"
        variants={variants.moveUp}
        transition={transitions.moveUp}
        className="leading-7 mt-10"
        defaultValue="about">
        <TabsList className="bg-background">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="p-3">
          <h6 className="text-primary">This is Me</h6>
          <p className="text-accent mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            eveniet similique eaque ex excepturi repudiandae, vitae quia
            adipisci ad, quaerat incidunt consectetur voluptates repellendus
            voluptatum laboriosam exercitationem quos quam pariatur tenetur nemo
            quo possimus.
          </p>
        </TabsContent>
        <TabsContent value="skills" className="p-3">
          <h6 className="text-primary">My strengths</h6>
          <p className="text-accent mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            eveniet similique eaque ex excepturi repudiandae, vitae quia
            adipisci ad, quaerat incidunt consectetur voluptates repellendus
            voluptatum laboriosam exercitationem quos quam pariatur tenetur nemo
            quo possimus.
          </p>
        </TabsContent>
        <TabsContent value="experience" className="p-3">
          <h6 className="text-primary">My professional output</h6>
          <p className="text-accent mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            eveniet similique eaque ex excepturi repudiandae, vitae quia
            adipisci ad, quaerat incidunt consectetur voluptates repellendus
            voluptatum laboriosam exercitationem quos quam pariatur tenetur nemo
            quo possimus.
          </p>
        </TabsContent>
      </MotionTabs>
    </div>
  );
}

export default page;
