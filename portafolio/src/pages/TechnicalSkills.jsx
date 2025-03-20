import React from 'react'
import { CartsSkills } from '../layouts/Carts/CartsSkills.jsx'
import { RiJavascriptFill, RiReactjsLine, RiBootstrapFill, RiTailwindCssFill, RiHtml5Fill, RiGithubFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { FaPython, FaCss3 } from "react-icons/fa6";
import { BsGit } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { CartTechnicalSkills } from '../layouts/CartTechnicalSkills/CartTechnicalSkills.jsx'

export const TechnicalSkills = () => {
  return (
    <div className='flex flex-col h-300 bg-zinc-900'>
       
       <CartTechnicalSkills title="Lenguajes de Programación">
       <CartsSkills title='React' icon={<RiReactjsLine className="text-6xl text-cyan-400"/>} description="Desarrollo de interfaces dinámicas y componentes reutilizables con React y hooks." />
       <CartsSkills title='Javascript/Typescript' 
         icon={<RiJavascriptFill className="text-6xl text-yellow-500"/>} 
         secondIcon={<BiLogoTypescript className="text-6xl text-blue-600"/>} 
         description="Programación eficiente con JavaScript y tipado seguro con TypeScript." 
       />
       <CartsSkills 
         title='Python' 
         icon={
           <span className="flex items-center">
             <FaPython className="text-6xl text-blue-600" /> {/* Azul */}
             <FaPython className="text-6xl text-yellow-400 -ml-5 opacity-80" /> {/* Amarillo encima */}
           </span>
         } 
         description="Desarrollo de aplicaciones y automatización con Python." 
       /> 
       <CartsSkills title='C#' icon={<TbBrandCSharp className="text-6xl text-cyan-400" />} description="Creación de aplicaciones con C# en entornos .NET y Windows Forms." /> 
       </CartTechnicalSkills>  
  
       <CartTechnicalSkills title="Frameworks y Herramientas de Desarrollo">
       <CartsSkills title='HTML' icon={<RiHtml5Fill className="text-6xl text-orange-500"/>} description="Estructuración semántica de páginas web con HTML5." /> 
       <CartsSkills title='CSS' icon={<FaCss3 className="text-6xl text-blue-500"/>} description="Estilización avanzada para diseño web responsivo y atractivo." />
       <CartsSkills title='Bootstrap' icon={<RiBootstrapFill className="text-6xl text-purple-600"/>} description="Desarrollo rápido con Bootstrap para diseños modernos y adaptables." />
       <CartsSkills title='Tailwind CSS' icon={<RiTailwindCssFill className="text-6xl text-cyan-400"/>} description="Estilos optimizados con utilidades de Tailwind CSS." /> 
       </CartTechnicalSkills> 

       <CartTechnicalSkills title="Otras herramientas">
       <CartsSkills title='GitHub' icon={<RiGithubFill className="text-6xl text-black"/>} description="Control de versiones y colaboración en proyectos con GitHub." />
       <CartsSkills title='Git' icon={<BsGit className="text-6xl text-red-500"/>} description="Gestión de versiones eficiente con Git y flujos de trabajo." />
       <CartsSkills title='Azure' icon={<VscAzure className="text-6xl text-blue-500"/>} description="Implementación y gestión de aplicaciones en la nube con Azure." /> 
       <CartsSkills title='Figma' icon={<FaFigma className="text-6xl text-purple-500"/>} description="Diseño de interfaces de usuario y prototipos interactivos en Figma." /> 
       </CartTechnicalSkills> 
    </div>
  )
}
