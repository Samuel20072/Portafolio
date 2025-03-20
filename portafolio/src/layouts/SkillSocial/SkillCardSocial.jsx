import React from "react";
import { motion } from "framer-motion";

export const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="bg-zinc-800 p-6 rounded-2xl text-white shadow-lg flex flex-col items-center text-center"
      whileHover={{ scale: 1.1, backgroundColor: "#00D3F2", color: "#fff" }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <span className="text-5xl mb-3">{skill.icon}</span>
      <h3 className="text-xl font-semibold">{skill.title}</h3>
      <p className="text-sm mt-2">{skill.description}</p>
    </motion.div>
  );
};
