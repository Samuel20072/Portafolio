import React from 'react'
export const ItemIconRed = ({icon = 'sin icono', ruta = '#', styles = ''}) => {
  return (
     <a className={styles} href={ruta}>{icon}</a>
   
  
    
   
   
  )
}
