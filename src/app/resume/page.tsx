"use client";

import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BACK_END_SKILLS, FRONT_END_SKILLS, TOOLS } from "@/utils/data";
// import ErrorBoundary from "@/utils/ErrorBoundary";
import { transitions, variants } from "@/utils/framerVariants";
import {

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
        <MotionDiv
          className="text-2xl text-primary"
          initial="initial"
          animate="animate"
          variants={variants.moveDown}
          transition={transitions.moveDown}>
          Full Stack Developer
        </MotionDiv>
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
          <p className="text-white mt-1">
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
          <p className="text-white mt-1">
            My strengths spans both frontend and backend development, with a
            focus on delivering intuitive user interfaces and efficient, secure
            server-side solutions. With a solid foundation in modern web
            technologies, I continuously aim to refine my skills and stay
            updated with the latest industry trends.
          </p>

     
          <MotionTabs
            initial="initial"
            animate="animate"
            variants={variants.moveUp}
            transition={{ ...transitions.moveUp, delay: 0.5 }}
            className="mt-4"
            defaultValue="frontend">
            <TabsList className="bg-background">
              <TabsTrigger value="frontend">FrontEnd</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Development Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend" className="p-3">
              <div className="flex flex-wrap justify-start gap-7">
                {FRONT_END_SKILLS.map((skills) => (
                  <div className="inline-flex flex-col items-center cursor-pointer group" key={skills.id}>
                    <MotionImage
                      key={skills.id}
                      initial="initial"
                      animate="animate"
                      variants={variants.scale}
                      transition={transitions.scale}
                      src={skills.path}
                      width={50}
                      height={50}
                      alt="profile"
                      className=" "
                    />
                    <p className="invisible group-hover:visible ">
                      {skills.name}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="backend" className="p-3">
              <div className="flex flex-wrap justify-start gap-7">
                {BACK_END_SKILLS.map((skills) => (
                  <div className="inline-flex flex-col items-center cursor-pointer group" key={skills.id}>
                    <MotionImage
                      key={skills.id}
                      initial="initial"
                      animate="animate"
                      variants={variants.scale}
                      transition={transitions.scale}
                      src={skills.path}
                      width={50}
                      height={50}
                      alt="profile"
                      className=""
                    />
                    <p className="invisible group-hover:visible ">
                      {skills.name}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tools" className="p-3">
              <div className="flex flex-wrap justify-start gap-7">
                {TOOLS.map((skills) => (
                  <div className="inline-flex flex-col items-center cursor-pointer group" key={skills.id}>
                    <MotionImage
                      key={skills.id}
                      initial="initial"
                      animate="animate"
                      variants={variants.scale}
                      transition={transitions.scale}
                      src={skills.path}
                      width={50}
                      height={50}
                      alt="profile"
                      className=" "
                    />
                    <p className="invisible group-hover:visible ">
                      {skills.name}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </MotionTabs>
        </TabsContent>
        <TabsContent value="experience" className="p-3">
          <h6 className="text-primary">My professional output</h6>
          <p className="text-white mt-1">
            With an year of developmental experience, primarily focusing on the
            MERN stack (MongoDB, Express, React, Node.js). Over this time, I
            have completed several real-world projects that demonstrate my
            ability to build full-stack applications, solve complex problems,
            and implement scalable solutions.
          </p>
          <MotionDiv
            initial="initial"
            animate="animate"
            variants={variants.moveDown}
            transition={{
              ...transitions.moveDown,
              delay: 0.5,
            }}>
            <h6 className="text-primary">Throughout this year, I have:</h6>
            <ul className="list-disc">
              <li>
                Developed and deployed multiple web applications using MongoDB,
                Express, React, and Node.js.
              </li>
              <li>
                Worked on diverse projects such as an e-commerce platform, a
                travel and tourism app, and a real-time chat application.
              </li>
              <li>
                Gained hands-on experience with industry-standard tools and
                technologies, including Git, AWS, and Vercel for deployment and
                version control.
              </li>
              <li>
                Continuously refined my skills by following best practices in
                coding, system design, and project management, under the
                guidance of a mentor.
              </li>
            </ul>
          </MotionDiv>

          <MotionDiv
            initial="initial"
            animate="animate"
            variants={variants.moveDown}
            transition={{
              ...transitions.moveDown,
              delay: 1,
            }}>
            <h6 className="text-primary">Other Experiences:</h6>
            <h4>Network Engineer : Microsense Private Ltd (1 Year)</h4>
            <h4>Quality Control Engineer : MAS Constructions (1 Year)</h4>
          </MotionDiv>
        </TabsContent>
      </MotionTabs>
    </div>
  );
}

export default page;
