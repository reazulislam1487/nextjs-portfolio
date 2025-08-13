"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-dvh w-full bg-gradient-to-b from-[#0b1220] via-[#0c1726] to-[#0b1220] text-white">
      {/* Centered Loader */}
      <div className="mx-auto flex min-h-dvh max-w-6xl flex-col items-center justify-center gap-10 px-6">
        {/* Logo / Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
          aria-label="Loading Reazul Islam Reaz portfolio"
        >
          <motion.div
            className="grid h-24 w-24 place-items-center rounded-2xl bg-white/5 shadow-2xl ring-1 ring-white/10 backdrop-blur"
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="select-none text-2xl font-bold tracking-wide text-white/90">
              RIR
            </span>
          </motion.div>
          {/* Orbiting dots */}
          <motion.span
            className="absolute -right-2 -top-2 block h-3 w-3 rounded-full"
            style={{ background: "#F6C26B" }}
            animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute -left-2 -bottom-2 block h-3 w-3 rounded-full"
            style={{ background: "#2F855A" }}
            animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Title + subtitle */}
        <div className="text-center">
          <h1 className="text-balance text-2xl font-semibold text-white/95 md:text-3xl">
            Preparing your experience
          </h1>
          <p className="mt-2 text-white/60">
            Loading portfolio content…
            <span className="sr-only">Please wait</span>
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xl">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg,#2F855A,#A0DAB6,#F6C26B)",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "0%", "100%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-white/50">
            <span>Optimizing images</span>
            <span>Fetching data</span>
            <span>Starting UI</span>
          </div>
        </div>

        {/* Skeleton preview of the landing layout */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2"
            aria-hidden
          >
            {/* Hero skeleton */}
            <div className="col-span-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="h-8 w-3/4 animate-pulse rounded-md bg-white/10" />
              <div className="mt-3 h-4 w-1/2 animate-pulse rounded-md bg-white/10" />
              <div className="mt-6 h-10 w-40 animate-pulse rounded-lg bg-white/10" />
            </div>
            {/* Card skeletons */}
            <div className="col-span-1 grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-24 rounded-xl border border-white/10 bg-white/[0.03]"
                >
                  <div className="h-full w-full animate-pulse rounded-xl bg-gradient-to-br from-white/5 to-transparent" />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Accessibility helper: a focusable text for screen readers */}
        <p className="sr-only" role="status" aria-live="polite">
          Content is loading. This page will update automatically once ready.
        </p>
      </div>

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
      />
    </div>
  );
}
