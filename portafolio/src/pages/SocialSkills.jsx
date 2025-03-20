import React from "react";
import { skills } from "../layouts/SkillSocial/skillsSocial.js";
import { SkillCard } from "../layouts/SkillSocial/SkillCardSocial.jsx";
import { MdLanguage } from "react-icons/md";
import { CartsSkills } from '../layouts/Carts/CartsSkills.jsx'

export const SocialSkills = () => {
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col items-center justify-center p-10">
      <h2 className="text-3xl text-white font-bold mb-6">Habilidades Sociales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
      <CartsSkills title="Nivel de ingles A1" icon= {<MdLanguage />} styles="h-30 m-20 rounded-lg shadow-lg items-center text-center bg-white flex flex-col  justify-center p-10 "/>
    </div>
  );
};
