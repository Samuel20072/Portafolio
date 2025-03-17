import React from 'react'
import { ItemIconRed } from '../../components/ItemNavbar/ItemIconRed.jsx';
import { RiWhatsappFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";

export const IconsRedes = () => {
  return (
    <div className='flex flex-row justify-between w-20'>
    <ItemIconRed styles = '' ruta = '#' icon = <RiWhatsappFill/>/>
    <ItemIconRed styles = '' ruta = '#' icon = <RiInstagramLine/>/>
    <ItemIconRed styles = '' ruta = '#' icon = <RiFacebookCircleFill/>/>
    <ItemIconRed styles = '' ruta = '#' icon = <RiTwitterXLine/>/>
    </div>
    
   
   
  )
}
