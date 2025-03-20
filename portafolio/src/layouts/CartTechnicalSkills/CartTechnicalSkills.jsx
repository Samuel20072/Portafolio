import React from 'react'

export const CartTechnicalSkills = ({Title = "sin titulo",styleTitle = "", children}) => {
  return (
    <div className='flex flex-wrap w-250 m-10 h-80 items-center justify-between flex-row'>
       <h2 className={styleTitle}>{Title}</h2>
       {children}
    </div>
  )
}

