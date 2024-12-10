"use client";

import { MAIN_QUESTION } from "@/lib/constants";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const CursorBlinker = ({ isTypingDone }: { isTypingDone: boolean }) => {
  const cursorVariants = {
    blinking: {
      // TODO: Edit this if we want to reimplement the blinking cursor
      opacity: [0, 0, 0, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cursorVariants}
      animate={isTypingDone ? "hidden" : "blinking"}
      className="inline-block align-middle h-[16px] w-[16px] rounded-full bg-white md:h-[30px] md:w-[30px]"
    />
  );
};

export function WorkflowTagline() {
  const baseText = MAIN_QUESTION;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 2,
      ease: "linear",
      delay: 0.5,
      onComplete: () => {
        setTimeout(() => {
          setIsTypingDone(true);
        }, 1600);
      }
    });

    return controls.stop;
  }, []);

  return (
    <div className="flex justify-center">
      <h1 
        data-testid="app-title" 
        className="font-heading text-pretty text-center text-[29px] font-semibold tracking-tighter text-white sm:text-[32px] md:text-[46px]"
      >
        <motion.span>{displayText}</motion.span>
        <CursorBlinker isTypingDone={isTypingDone} />
      </h1>
    </div>
  );
}