"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function Services() {
  return (
    <>

<div className="flex my-12 mb-22 flex-col items-center justify-start px-32 mt-20 pb-22 pt-22 ">
  <h2 className="text-3xl md:text-9xl font-bold mb-4">
    Our <span className="text-purple-500">Services</span>
  </h2>
  <p className="text-gray-400 text-xl max-w-2xl">
    We follow a systematic approach to deliver exceptional results for our clients.
  </p>
</div>

<div className="py-3 mt-14 flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-4 mx-auto px-8">

  <Card title="SHIPPING SERVICES" name="SHIPPING SERVICES" >
    <CanvasRevealEffect
      animationSpeed={5.1}
      containerClassName="bg-emerald-900"
    />
    <p className="text-gray-400 mt-4">
    Streamline Logistics offers a wide range of services to meet your shipping needs to and from over 220 countries and territories worldwide.
    </p>
  </Card>
  
  <Card title="CUSTOMS MADE EASIER"  name="CUSTOMS MADE EASIER" >
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="bg-black"
      colors={[
        [236, 72, 153],
        [232, 121, 249],
      ]}
      dotSize={2}
    />
    <p className="text-gray-400 mt-4">
    Learn about all the tools Streamline Logistics has to offer for shipping across borders. Prepare and find international documents, estimate duties and taxes, search country profiles and much more.
    </p>
    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
  </Card>
  
  <Card title="REDEFINING BULK LIQUID LOGISTICS"  name="REDEFINING BULK LIQUID LOGISTICS" >
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="bg-sky-600"
      colors={[[125, 211, 252]]}
    />
    <p className="text-gray-400 mt-4">
    Here&apos;s how Streamline is moving these products efficiently, safely, and sustainably  redefining bulk liquid shipping worldwide.
    </p>
  </Card>
</div>
    </>
  );
}

const Card = ({
  title,
  name,
  children,
}: {
  title: string;
  name: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[32] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center text-white text-4xl group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {name}
        </div>
        <h2 className="text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

// const AceternityIcon = () => {
//   return (
//     <svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
//     >
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="15"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//         style={{ mixBlendMode: "darken" }}
//       />
//     </svg>
//   );
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};