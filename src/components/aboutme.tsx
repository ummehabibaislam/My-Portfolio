"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeUp = {
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

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function About() {
  return (
    <section className="py-16 bg-[#0e1e42] text-white text-center">
      <motion.div
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Image*/}
        <motion.div
          className="sm:col-span-1 h-[300px] flex items-center justify-center sm:pb-4"
          variants={zoomIn}
        >
          <Image
            src="/img/tanni.png"
            alt="Tanni"
            width={200}
            height={200}
            unoptimized
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="sm:col-span-2 text-left space-y-6 pt-10"
          variants={fadeUp}
        >
          <h3 className="text-lg font-semibold text-gray-300 ">
            Let’s Get In Touch With Me!
          </h3>

          <p className="text-lg leading-relaxed text-gray-100">
            I’m <span className="font-bold text-white">Umme Habiba Islam</span>. I currently live in Linköping, Sweden. I enjoy reading books 📗 and listening music 🎙️. I love creating creative content, and you can find most of my works here.
            I enjoy working with modern technologies like <strong>React, Node.js, Next.js</strong>, and <strong>PostgreSQL</strong>.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            Apart from this I love to travel, cook, and in my free time, I enjoy reading 📚, exploring new tech, and contributing to creative content.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
