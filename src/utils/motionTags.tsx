
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import Image from "next/image";



export const MotionImage = dynamic(()=>import('framer-motion').then(mod=>mod.motion(Image)),{ssr:false})
export const MotionDiv = dynamic(()=>import('framer-motion').then(mod=>mod.motion.div),{ssr:false})
export const MotionList = dynamic(()=>import('framer-motion').then(mod=>mod.motion.li),{ssr:false})
export const MotionButton = dynamic(()=>import('framer-motion').then(mod=>mod.motion(Button)),{ssr:false})
export const MotionTabs = dynamic(()=>import('framer-motion').then(mod=>mod.motion(Tabs)),{ssr:false})
