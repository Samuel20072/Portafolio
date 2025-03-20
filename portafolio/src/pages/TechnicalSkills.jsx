import React from 'react'
import { CartsSkills } from '../layouts/Carts/CartsSkills.jsx'
import { RiJavascriptFill, RiReactjsLine, RiBootstrapFill, RiTailwindCssFill,RiHtml5Fill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { FaPython, FaCss3 } from "react-icons/fa6";
import { CartTechnicalSkills} from '../layouts/CartTechnicalSkills/CartTechnicalSkills.jsx'
export const TechnicalSkills = () => {
  return (
    <div className='flex flex-col h-300 bg-zinc-900'>
       
       <CartTechnicalSkills title="">
       <CartsSkills title='React' icon = {<RiReactjsLine className="text-6xl text-cyan-400"/>} description ="Desarrollo de interfaces dinámicas y componentes reutilizables con React y hooks." />
       <CartsSkills title='Javascript/Typescript' icon= {<RiJavascriptFill className="text-6xl text-cyan-400"/>} secondIcon = {<BiLogoTypescript className="text-6xl text-cyan-400"/>} description="Programación eficiente con JavaScript y tipado seguro con TypeScript." />
       <CartsSkills title='Python' icon = {<FaPython className="text-6xl text-cyan-400" />} description ="Desarrollo de aplicaciones y automatización con Python." /> 
       <CartsSkills title='C#' icon = {<TbBrandCSharp className="text-6xl text-cyan-400" />} description ="Creación de aplicaciones con C# en entornos .NET y Windows Forms." /> 
       </CartTechnicalSkills>  
  
       <CartTechnicalSkills title="">
       <CartsSkills title='CSS' icon = {<FaCss3 className="text-6xl text-cyan-400"/>} description ="Estilización avanzada para diseño web responsivo y atractivo." />
       <CartsSkills title='Bootstrap' icon= {<RiBootstrapFill className="text-6xl text-cyan-400"/>} description="Desarrollo rápido con Bootstrap para diseños modernos y adaptables." />
       <CartsSkills title='Tailwind CSS' icon = {<RiTailwindCssFill className="text-6xl text-cyan-400"/>} description ="Estilos optimizados con utilidades de Tailwind CSS." /> 
       <CartsSkills title='HTML' icon = {<RiHtml5Fill className="text-6xl text-cyan-400"/>} description ="Estructuración semántica de páginas web con HTML5." /> 
       </CartTechnicalSkills> 
    </div>
    
  )
}
