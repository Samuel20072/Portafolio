import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar.jsx'
export const Navbar = () =>{
    return (
        <>
          <nav>
            <ul className='flex space-x-4'>
            <ItemNavbar url = '/' content = 'Inicio' styles = 'hover:not-focus:bg-cyan-400'/>
            <ItemNavbar url = '/studies' content = 'Estudios' styles = 'hover:not-focus:bg-cyan-400'/>
            <ItemNavbar url = '/TechnicalSkills' content = 'Habilidades Tecnicas' styles = 'hover:not-focus:bg-cyan-400'/>
            <ItemNavbar url = '/SocialSkills' content = 'Habilidades Sociales' styles = 'hover:not-focus:bg-cyan-400'/>
            </ul>
          </nav>
        </>
      )
}