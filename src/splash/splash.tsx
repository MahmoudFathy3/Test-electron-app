import { motion } from "framer-motion";

const Splash = () => {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <motion.div
        className="absolute h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-6xl shadow-2xl shadow-blue-500/40"
        >
          🧪
        </motion.div>

        {/* Title */}
        <motion.h1
          className="mt-8 text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
        >
          Laboratory System
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-3 text-lg text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
          }}
        >
          Initializing application...
        </motion.p>

        {/* Progress Bar */}
        <div className="mx-auto mt-10 h-2 w-72 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            className="h-full rounded-full bg-blue-500"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Loading Dots */}
        <motion.div
          className="mt-5 flex justify-center gap-2"
          initial="hidden"
          animate="show"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-3 w-3 rounded-full bg-blue-400"
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                delay: i * 0.2,
                duration: 0.6,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Splash;
