"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AICardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accent?: "blue" | "purple" | "emerald";
  delay?: number;
}

const accentBorder = {
  blue: "hover:border-blue-400/40 dark:hover:border-blue-500/30",
  purple: "hover:border-purple-400/40 dark:hover:border-purple-500/30",
  emerald: "hover:border-emerald-400/40 dark:hover:border-emerald-500/30",
};

const accentGlow = {
  blue: "dark:hover:shadow-blue-500/10",
  purple: "dark:hover:shadow-purple-500/10",
  emerald: "dark:hover:shadow-emerald-500/10",
};

export function AICard({
  children,
  className,
  hover = false,
  accent = "blue",
  delay = 0,
}: AICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "relative group rounded-xl overflow-hidden border border-border bg-card",
        "transition-all duration-300 ease-out",
        hover && [
          "hover:shadow-lg hover:shadow-primary/5",
          "hover:-translate-y-1",
          accentBorder[accent],
          accentGlow[accent],
          "dark:hover:shadow-xl dark:hover:shadow-primary/10",
        ],
        className
      )}
    >
      <div className="relative z-10 p-6">{children}</div>
      {hover && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        </div>
      )}
    </motion.div>
  );
}
