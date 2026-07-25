import { FlaskConical, Lock, User } from "lucide-react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="flex min-h-screen w-full bg-slate-100">
      {/* Left Side */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white items-center justify-center p-16"
      >
        <div className="max-w-md">
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mb-8"
          >
            <FlaskConical size={90} />
          </motion.div>

          <h1 className="text-5xl font-bold leading-tight">
            Laboratory
            <br />
            Management
            <br />
            System
          </h1>

          <p className="mt-6 text-blue-100 text-lg leading-8">
            Manage patients, laboratory tests, reports and invoices from one
            place with a modern desktop experience.
          </p>
        </div>
      </motion.div>

      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center p-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-slate-800">Welcome Back 👋</h2>

          <p className="mt-2 text-slate-500">Sign in to continue.</p>

          <form className="mt-8 space-y-6">
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Username"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white"
            >
              Login
            </motion.button>

            {/* Back to Home */}
            <a href="/" className="mt-20">
              back home
            </a>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
