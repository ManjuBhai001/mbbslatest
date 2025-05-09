"use client";

import React from "react";
import { Heart, FileText, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const DiplomaInMedicalLayout = () => {
  return (
    <>
      {/* Main Intro Section */}
      <section className="bg-white py-12 px-4 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#8A05FF] mb-6"
          >
            Pursue a Diploma in Medical Fields in India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-lg text-center mb-10"
          >
            Medical diplomas in India offer specialized training in various
            medical fields, giving you a path to start a successful career in
            healthcare. Explore multiple options like DMLT, Nursing, and more.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-[#8A05FF]">
                <Heart className="w-6 h-6 mr-2 text-[#00E5FF]" />
                Diploma Course Highlights
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>1-2 years duration</li>
                <li>Specializations like DMLT, Nursing, Radiology, and more</li>
                <li>Affordable and flexible learning options</li>
                <li>Industry-relevant skills for immediate employment</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <h3 className="flex items-center text-xl font-semibold mb-2 text-[#8A05FF]">
                <FileText className="w-6 h-6 mr-2 text-[#00E5FF]" />
                Admission Process
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Minimum 12th grade qualification (Science stream)</li>
                <li>Application based on eligibility criteria</li>
                <li>Entrance exams may be required for specific diplomas</li>
                <li>Selection based on merit and availability of seats</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center bg-[#00E5FF] p-6 rounded-xl shadow"
          >
            <h4 className="text-xl font-semibold text-[#8A05FF] mb-2">
              Important Timelines
            </h4>
            <p className="text-gray-700">
              Applications open: <strong>June – July</strong> <br />
              Classes commence: <strong>August – September</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#00E5FF] to-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#8A05FF]">
            Build Your Medical Career with Diplomas in India
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Fast-track your career in the medical field by gaining expertise
            through specialized diploma programs in nursing, radiology, lab
            technology, and more.
          </p>
          <button className="bg-[#8A05FF] hover:bg-[#6601D5] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
            Explore Diploma Courses
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Diverse Specializations",
              desc: "Choose from various specializations such as DMLT, Radiology, Nursing, and more.",
              icon: "🩺",
            },
            {
              title: "Affordable Courses",
              desc: "Diploma courses are budget-friendly and provide the same core knowledge as a degree program.",
              icon: "💸",
            },
            {
              title: "Immediate Employment",
              desc: "Get industry-ready skills and start your career as a healthcare professional with quick employment opportunities.",
              icon: "👩‍⚕️",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#00E5FF] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#8A05FF]">
            Admission Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here’s how you can secure a spot in medical diploma programs in
            India.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "01",
              title: "Choose Your Specialization",
              desc: "Explore different medical diplomas and decide which one suits your interests and career goals.",
            },
            {
              step: "02",
              title: "Meet Eligibility Criteria",
              desc: "Ensure you meet the educational and age requirements for your selected diploma program.",
            },
            {
              step: "03",
              title: "Submit Application",
              desc: "Fill out the application form, provide documents, and appear for any required entrance exams.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#8A05FF] mb-2">
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Experienced Faculty",
              desc: "Learn from industry experts and experienced professionals in the healthcare field.",
              icon: "👩‍🏫",
            },
            {
              title: "Practical Experience",
              desc: "Gain hands-on experience through clinical training and internships in top medical institutions.",
              icon: "🩺",
            },
            {
              title: "Industry Connections",
              desc: "Develop a network in the healthcare industry and improve your employment opportunities.",
              icon: "🌐",
            },
            {
              title: "High Employability",
              desc: "Medical diploma holders are in high demand across various healthcare sectors.",
              icon: "💼",
            },
            {
              title: "Continuous Learning",
              desc: "Stay updated with new medical advancements through regular workshops and training.",
              icon: "📚",
            },
            {
              title: "Global Recognition",
              desc: "Diploma programs are recognized worldwide, offering you global career opportunities.",
              icon: "🌍",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="border p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-gradient-to-r from-[#8A05FF] to-[#00E5FF] py-16 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your Medical Diploma Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Take the first step towards a fulfilling career in the medical
            field. Enroll in a diploma program today!
          </p>
          <button className="bg-white text-[#8A05FF] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition">
            Apply Now
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default DiplomaInMedicalLayout;
