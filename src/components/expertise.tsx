"use client";

import { motion } from "framer-motion";

export default function ExpertiseSection() {
  const expertise = [
    { title: "Website Design", icon: "💻", desc: "Building clean and responsive websites." },
    { title: "Frontend Development", icon: "🧩", desc: "Building fast and interactive UIs with React and Tailwind CSS." },
    { title: "Auth Systems", icon: "🔐", desc: "Implementing secure login systems with Better Auth and role-based access." },
    { title: "Backend Development", icon: "🖥️", desc: "Crafting scalable backend architectures." },
    { title: "Database Management", icon: "📊", desc: "Efficiently managing PostgreSQL & NoSQL databases." },
    { title: "Full Stack Development", icon: "⚡", desc: "Bringing frontend and backend together smoothly." },
  ];

  return (
    <section className="py-16 bg-[#040d5c] text-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-4">My Expertise Area</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          I’m a Full Stack Developer, passionate about building clean, fast, and functional web applications. I specialize in modern web technologies like React, Next.js, and PostgreSQL.
        </p>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
  key={index}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.97 }}
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="bg-[#252f5b] hover:bg-[#2e3b6e] p-6 rounded-lg shadow-md hover:shadow-lg 
             transition-all duration-300 border border-gray-700 
             will-change-transform transform-gpu"
>
  <div className="text-5xl mb-4">{item.icon}</div>
  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
  <p className="text-gray-400">{item.desc}</p>
</motion.div>


          ))}
        </div>
      </div>
    </section>
  );
}
