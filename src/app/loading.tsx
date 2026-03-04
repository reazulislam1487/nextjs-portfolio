"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-dvh w-full bg-zinc-950 text-white">
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
            className="grid h-24 w-24 place-items-center rounded-2xl bg-zinc-900 shadow-2xl ring-1 ring-zinc-800 backdrop-blur"
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="select-none text-2xl font-bold tracking-wide text-emerald-500">
              RIR
            </span>
          </motion.div>
          {/* Orbiting dots */}
          <motion.span
            className="absolute -right-2 -top-2 block h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
            animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute -left-2 -bottom-2 block h-3 w-3 rounded-full bg-zinc-500"
            animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Title + subtitle */}
        <div className="text-center">
          <h2 className="text-balance text-2xl font-semibold text-zinc-100 md:text-3xl">
            Initializing Systems
          </h2>
          <p className="mt-2 text-zinc-500">
            Loading architectural components…
            <span className="sr-only">Please wait</span>
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-xl">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-900 border border-zinc-800">
            <motion.div
              className="h-full rounded-full bg-emerald-500"
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "0%", "100%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
            <span>Optimization</span>
            <span>Handshaking</span>
            <span>Ready</span>
          </div>
        </div>

        {/* Skeleton preview */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 opacity-20"
            aria-hidden
          >
            {/* Hero skeleton */}
            <div className="col-span-1 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
              <div className="h-10 w-3/4 animate-pulse rounded-md bg-zinc-800" />
              <div className="mt-4 h-4 w-1/2 animate-pulse rounded-md bg-zinc-800" />
              <div className="mt-10 h-12 w-48 animate-pulse rounded-xl bg-zinc-800" />
            </div>
            {/* Card skeletons */}
            <div className="col-span-1 grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-28 rounded-3xl border border-zinc-800 bg-zinc-900/40"
                >
                  <div className="h-full w-full animate-pulse rounded-3xl bg-zinc-800/50" />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"
      />
    </div>
  );
}
