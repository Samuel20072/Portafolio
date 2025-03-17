import { IconsRedes } from "../IconsRedes/IconsRedes.jsx";
import { Navbar } from "../Navbar/Navbar.jsx";
export const Footer = () => {
    return (
      <>
      <footer className="bg-cyan-400 w-full text-white p-4 h-50 flex flex-col items-center justify-between ">
        <div className=' flex justify-between items-center w-270'>
        <span className="font-bold text-4xl">Samuel</span>
        <Navbar/>
        </div>
      <hr className="border-t-2 w-290 border-white my-4 " />
       <IconsRedes/>
       <span>©Copyright Copyright</span>
      </footer>
     
    
    
      </>
    )
  }
  