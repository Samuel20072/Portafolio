import { NavLink } from  'react-router-dom'
export const ItemNavbar = ({url='#' ,content = 'vavcio', styles = ''}) => {
  return (
    <>
     <li className={styles}><NavLink to={url}>{content}</NavLink></li>
    
    
    
    </>
  ) 
}