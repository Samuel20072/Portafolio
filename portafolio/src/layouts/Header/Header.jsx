import { Navbar} from '../Navbar/Navbar.jsx'
export const Header = () => {
    return (
      <>
       <header className='bg-zinc-900 text-white p-4 shadow-md'>
       <div className="container mx-auto flex justify-between items-center p-4">
        <span className='font-semibold text-5xl'><span className='text-cyan-400' >Samuel</span>Portafolio</span>
       <Navbar/>
       </div>
       </header>
     
    
    
      </>
    )
  }
  