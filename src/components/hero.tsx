"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  const title = "Fullstack Developer";
  const codeLines = [
    "const user = {",
    "  name: 'Habiba',",
    "  role: 'Fullstack Developer',",
    "  stack: ['React', 'Node.js', 'Next.js']",
    "};",
    "",
    "console.log('Welcome to my portfolio!');",
  ];

  return (
    <section className="sm:min-h-fit lg:min-h-screen bg-[url('/img/bg.jpg')] bg-cover bg-center bg-no-repeat text-white relative md:flex sm:justify-between pt-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
        {/* Left Text Content */}
        <div className="w-full" >
          <p className="text-lg mb-2">Hello Everyone! 👋</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            I Am <span className="text-white">Habiba</span>
          </h1>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 flex flex-wrap gap-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={wordAnimation}
                className="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 inline-block text-transparent bg-clip-text"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <p className="text-lg mb-6 text-gray-300 max-w-md">
            I build clean, fast, and functional web apps.
          </p>
          <motion.a
            href="mailto:tanni.bsmrstu@gmail.com"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: 0.3,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            HIRE ME!
          </motion.a>
        </div>

        {/* Right: Responsive Laptop + Animated Code */}
        <div className="w-full flex justify-center">

        <motion.div
          className="relative w-[280px] md:w-[420px] lg:w-[460px] xl:w-[500px] max-w-full overflow-hidden  md:mt-0 sm:pb-20 lg:pb-0 "
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src="/img/lp.svg" alt="Laptop" className="w-full h-auto" />

          {/* Code Overlay */}
          <div className="absolute top-[4%] left-[16.5%] w-[68%] h-[55%] overflow-hidden rounded-md bg-[#cedef7] text-[#062451] font-mono ">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "-100%" }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="space-y-1 p-2"
            >
              {codeLines.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        </div>

      </div>
    </section>
  );
}
