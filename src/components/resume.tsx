"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Resume() {
  return (
    <section className="py-16 bg-[#0e1e42] text-white text-center">
      <motion.div
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}

      >
        {/* Left text section */}
        <motion.div variants={fadeInUp} className="col-span-2 text-left">
          <h1 className="text-2xl p-5">My resume</h1>
          <p className="font-bold text-5xl p-4">
            All over my personal details find here
          </p>
        </motion.div>

        {/* Right button section */}
        <motion.div
          variants={fadeInUp}
          className="col-span-1 flex justify-center items-start"
        >
          <a
            href="/HABIBA.pdf" 
            download
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-bold text-xl transition duration-300 shadow-md mt-20"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              Download Resume
            </motion.span>
          </a>
        </motion.div>
        </motion.div>
      
    </section>
  );
}
