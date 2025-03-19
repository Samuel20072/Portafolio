import React from 'react'
import { CartsSkills } from '../layouts/Carts/CartsSkills.jsx'
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
export const TechnicalSkills = () => {
  return (
      <div className='flex flex-wrap w-350 m-10 h-80 items-center justify-between'>
       <CartsSkills title='React' icon= <RiReactjsLine/> description ="Desarrollo de interfaces dinámicas y componentes reutilizables con React y hooks." />
       <CartsSkills title='Javascript' icon= <RiJavascriptFill/> secondIcon = <BiLogoTypescript/> description="Programación eficiente con JavaScript y tipado seguro con TypeScript." />
       <CartsSkills title='Javascript' icon= <RiJavascriptFill/> secondIcon = <BiLogoTypescript/> description="Programación eficiente con JavaScript y tipado seguro con TypeScript." />
       <CartsSkills title='Javascript' icon= <RiJavascriptFill/> secondIcon = <BiLogoTypescript/> description="Programación eficiente con JavaScript y tipado seguro con TypeScript." />
       <CartsSkills title='Javascript' icon= <RiJavascriptFill/> secondIcon = <BiLogoTypescript/> description="Programación eficiente con JavaScript y tipado seguro con TypeScript." />
    </div>
  )
}
