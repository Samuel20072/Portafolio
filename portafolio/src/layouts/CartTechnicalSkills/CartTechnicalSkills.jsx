export const CartTechnicalSkills = ({ title = "Sin título", styleTitle = "text-cyan-400 font-bold text-2xl w-20", children }) => {
  return (
    <div className='flex flex-wrap w-auto m-10 h-80 items-center justify-between flex-row'>
       <h2 className={styleTitle}>{title}</h2>
       {children}
    </div>
  )
}
