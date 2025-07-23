"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitBy?: "character" | "word";
  variant?: "fade" | "slide" | "scale";
  stagger?: number;
  renderWord?: (word: string, index: number) => React.ReactNode;
}

const AnimatedSplitText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  splitBy = "character",
  variant = "slide",
  stagger = 0.05,
  renderWord,
}: AnimatedSplitTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getVariants = () => {
    switch (variant) {
      case "fade":
        return {
          from: { opacity: 0 },
          to: { opacity: 1 }
        };
      case "scale":
        return {
          from: { opacity: 0, scale: 0.8 },
          to: { opacity: 1, scale: 1 }
        };
      default: // slide
        return {
          from: { opacity: 0, y: 20 },
          to: { opacity: 1, y: 0 }
        };
    }
  };

  const { from, to } = getVariants();

  const splitText = () => {
    if (splitBy === "word") {
      return text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={from}
          animate={isInView ? to : from}
          transition={{
            duration,
            delay: delay + index * stagger,
            ease: "easeOut",
          }}
          className="inline-block mr-[0.25em]"
        >
          {renderWord ? renderWord(word, index) : word}
        </motion.span>
      ));
    } else {
      // Split by characters
      return text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={from}
          animate={isInView ? to : from}
          transition={{
            duration,
            delay: delay + index * stagger,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ));
    }
  };

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {splitText()}
    </div>
  );
};

export default AnimatedSplitText;
