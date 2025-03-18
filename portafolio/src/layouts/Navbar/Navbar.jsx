import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar.jsx'
export const Navbar = () =>{
    return (
        <>
          <nav>
            <ul className='flex space-x-4'>
            <ItemNavbar url = '/' content = 'Home' styles = 'hover:not-focus:bg-cyan-400'/>
            <ItemNavbar url = '/studies' content = 'Studies' styles = 'hover:not-focus:bg-cyan-400'/>
            <ItemNavbar url = '/TechnicalSkills' content = 'Technical Skills' styles = 'hover:not-focus:bg-cyan-400'/>
            <ItemNavbar url = '/SocialSkills' content = 'Social Skills' styles = 'hover:not-focus:bg-cyan-400'/>
            <ItemNavbar url = '/ProfessionalExperience' content = 'Professional Experience' styles = 'hover:not-focus:bg-cyan-400'/>
            </ul>
          </nav>
        </>
      )
}