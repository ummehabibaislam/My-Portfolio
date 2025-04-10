"use client";
import { motion } from "framer-motion";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function HeroSection() {
    const title = "Fullstack Developer";
    return (
      <section className="h-[800px] bg-[url('/img/bg.jpg')] bg-cover bg-center bg-no-repeat text-white relative flex pt-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Text Content */}
          <div>
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
              href="mailto:your.email@example.com"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 10}}
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
  
          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/img/tanni.png" // make sure this image is inside /public/images folder
              alt="Hero Image"
              className=" max-w-md md:max-w-full object-contain"
            />
          </div>
        </div>
      </section>
    );
  }
  