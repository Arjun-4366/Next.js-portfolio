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
            Passionate Full Stack MERN Developer with extensive experience in
            designing and developing scalable web applications. Proficient in
            <span> MongoDB</span>, <span>Express.js</span>,{" "}
            <span>React.js</span> and<span> Node.js</span>. Skilled in
            delivering high-quality maintainable code while staying up to date
            with the latest technologies and industry best practises. Committed
            to continuous learning and improvement, with strong focus on
            performance and user experience.
          </p>
        </TabsContent>
        <TabsContent value="skills" className="p-3">
          <h6 className="text-primary">My strengths</h6>
          <p className="text-accent mt-1">
            My strengths spans both frontend and backend development, with a
            focus on delivering intuitive user interfaces and efficient, secure
            server-side solutions. With a solid foundation in modern web
            technologies, I continuously aim to refine my skills and stay
            updated with the latest industry trends.
          </p>

          {/* Nested Tabs */}
          <MotionTabs
            initial="initial"
            animate="animate"
            variants={variants.moveUp}
            transition={transitions.moveUp}
            className="mt-4"
            defaultValue="frontend">
            <TabsList className="bg-background">
              <TabsTrigger value="frontend">FrontEnd</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Development Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="p-3">
              <div className="flex gap-7">
                <div className="inline-flex flex-col items-center">
                  <MotionImage
                    initial="initial"
                    animate="animate"
                    variants={variants.scale}
                    transition={transitions.scale}
                    src={"/resumelogo.png"}
                    width={50}
                    height={50}
                    alt="profile"
                    className=" rounded-full"
                    
                  />
                  <p>React</p>
                </div>
                <div className="inline-flex flex-col items-center">
                  <MotionImage
                    initial="initial"
                    animate="animate"
                    variants={variants.scale}
                    transition={transitions.scale}
                    src={"/resumelogo.png"}
                    width={50}
                    height={50}
                    alt="profile"
                    className=" rounded-full"
                  />
                  <p>React</p>
                </div>
                <div className="inline-flex flex-col items-center">
                  <MotionImage
                    initial="initial"
                    animate="animate"
                    variants={variants.scale}
                    transition={transitions.scale}
                    src={"/resumelogo.png"}
                    width={50}
                    height={50}
                    alt="profile"
                    className=" rounded-full"
                  />
                  <p>React</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="backend" className="p-3">
              <h3>Node.js</h3>
              <h3>Express.js</h3>
              <h3>MongoDB</h3>
            </TabsContent>
            <TabsContent value="tools" className="p-3">
              <h3>Git</h3>
              <h3>Figma</h3>
              <h3>Postman</h3>
              <h3>GitHub</h3>
            </TabsContent>
          </MotionTabs>
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
