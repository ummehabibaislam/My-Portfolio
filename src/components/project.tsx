"use client";

import { motion } from "framer-motion";

// Animation variant generator
const getFadeInUp = (i:number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  }
});

export default function ProjectsSection() {
  const projects = [
    {
      title: "Movie Bazar",
      description: "MovieShop is a full-featured e-commerce web application designed for purchasing and managing movies. The platform offers a clean, responsive user interface and a robust backend to deliver a seamless shopping experience for digital movie products.It provides a seamless experience for both customers and admins with real-time interactions, authentication, and persistent cart functionality via cookies.",
      tech: ["React","shadcn/ui", "Tailwind", "PostgreSQL","Next.js","Better Auth","Zod Validation"]
    },
    {
      title: "Library Management",
      description: "A full-stack web application designed to manage a simple library system with complete CRUD (Create, Read, Update, Delete) functionality for books. The project integrates both frontend and backend components to enable efficient data management and a smooth user experience.",
      tech: ["Next.js", "Prisma", "PostgreSQL"]
    },
    {
      title: "Bus Ticket Reservation System",
      description: "A web-based application designed to streamline the process of booking and managing bus tickets online. Developed as a part of a Bachelor’s 3rd-year project, the system enables users to search, reserve, and manage bus tickets through an intuitive user interface, while also offering administrative functionalities for trip and seat management.",
      tech: ["HTML", "CSS","php","JavaScript"]
    },
    {
      title: "Bus GPS Tracking System",
      description: "Bus GPS Tracking System is a real-time vehicle monitoring solution that integrates a web application and an Android mobile application. The Android app functions as a GPS tracker, capturing the live location of the bus and transmitting the data to a centralized web server. The web application retrieves this data and visually displays the bus’s current position on an interactive map. The system ensures seamless real-time tracking by enabling smooth communication between the mobile and web platforms, utilizing technologies such as Android (Java), PHP, MySQL, and web mapping APIs.",
      tech: ["HTML", "CSS", "JavaScript","Android"]
    },
    {
      title: "Portfolio",
      description: "A modern, responsive portfolio built with Next.js, Tailwind CSS, and Framer Motion to showcase my full-stack projects, skills, and experience.This is my personal developer portfolio, built to showcase my projects, technical skills, and design sensibilities in a clean, responsive, and user-friendly format. ",
      tech: ["React", "Tailwind","Next.js"]
    },
    {
      title: "News Site Web Application",
      description: "A full-featured news platform with dynamic content, secure authentication, and admin tools. Users can browse categorized news (Local, World, Weather, etc.), register with email confirmation, manage subscriptions, and receive personalized newsletters.Admins can publish articles, assign editor’s picks, and view subscription stats. Integrated external APIs for weather and News. Built with modern architecture and clean, responsive design.",
      tech: ["React", "Tailwind", "PostgreSQL","Next.js 15 (App Router)","Better Auth","Zod Validation"]
    }
  ];

  return (
    <section className="w-full bg-[#040d5c] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={getFadeInUp(i)}
              className="group bg-[#1e293b] hover:bg-[#2e3b6e] rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:drop-shadow-sm transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-base mb-4 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-900 text-white text-sm font-medium px-2 py-1 rounded-full group-hover:bg-blue-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
