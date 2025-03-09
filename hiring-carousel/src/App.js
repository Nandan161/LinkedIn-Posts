import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Filter, Users, Lightbulb, CheckCircle, MessageCircle } from "lucide-react";

export default function HiringParadoxCarousel() {
  const slides = [
    {
      title: "Easy Apply or Easy Reject?",
      content: "The Easy Apply button is flooding recruiters with applications, but is it helping or hurting deserving candidates?",
      icon: <Briefcase size={32} />
    },
    {
      title: "The Problem",
      content: "✅ Thousands of applications per job.\n✅ Over-reliance on ATS (Applicant Tracking Systems).\n✅ Deserving candidates get rejected due to low ATS scores.",
      icon: <Filter size={32} />
    },
    {
      title: "The Real Cost",
      content: "Hiring the wrong candidate costs companies heavily — productivity loss, cultural damage, and high turnover.",
      icon: <Users size={32} />
    },
    {
      title: "What Can Change?",
      content: "💡 Companies should assess cultural fit, learning aptitude, and problem-solving abilities, not just technical skills.",
      icon: <Lightbulb size={32} />
    },
    {
      title: "The Solution",
      content: "✅ Add behavioral questions during the application.\n✅ Shift from Easy Apply → Easy Reject to Quick Apply → Cultural Fit.",
      icon: <CheckCircle size={32} />
    },
    {
      title: "Your Thoughts?",
      content: "Should companies revamp their hiring process to focus more on cultural fit and learning aptitude over ATS scores? Share your thoughts!",
      icon: <MessageCircle size={32} />
    }
  ];

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-100 min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Rethink Hiring Process</h1>
        <p className="text-gray-500">Is Easy Apply turning into Easy Reject?</p>
      </div>
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {slide.icon}
          <div>
            <h2 className="text-xl font-semibold mb-2">{slide.title}</h2>
            <p className="text-gray-600 whitespace-pre-line">{slide.content}</p>
          </div>
        </motion.div>
      ))}
      <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg">Share Your Thoughts</button>
      <p className="text-gray-500 mt-4">Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/nandanchoudhary1/" className="text-blue-500 underline">Nandan's LinkedIn</a></p>
    </div>
  );
}