import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar.jsx'
export const Navbar = () =>{
    return (
        <>
          <nav>
            <ul className='flex space-x-4'>
            <ItemNavbar url = '/' content = 'Home' styles = ''/>
            <ItemNavbar url = '/studies' content = 'Studies' styles = ''/>
            <ItemNavbar url = '/TechnicalSkills' content = 'Technical Skills' styles = ''/>
            <ItemNavbar url = '/SocialSkills' content = 'Social Skills' styles = ''/>
            <ItemNavbar url = '/ProfessionalExperience' content = 'Professional Experience' styles = ''/>
            </ul>
          </nav>
        </>
      )
}