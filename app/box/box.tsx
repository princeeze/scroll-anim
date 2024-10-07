"use client";

import { useTransitionState } from "next-transition-router";
import { motion } from "framer-motion";

export function Box({ color }: { color: string }) {
  const { stage } = useTransitionState();

  const variants = {
    leaving: { scale: 0 },
    entering: { scale: 1 },
  };

  return (
    <motion.div
      className={`h-32 w-32 ${color}`}
      initial={{ scale: 0 }}
      animate={stage === "leaving" ? variants.leaving : variants.entering}
      transition={{ duration: 0.5 }}
    />
  );
}
