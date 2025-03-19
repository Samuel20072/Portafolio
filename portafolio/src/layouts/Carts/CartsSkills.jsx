import React from "react";

export const CartsSkills = ({title = "Sin título", icon = "Sin icono", secondIcon = "Sin icono",description = "", styles = "flex flex-col w-50  h-auto justify-between p-10 rounded-lg shadow-lg items-center text-center"
}) => {
  return (
    <div className={styles}>
      <h2>{title}</h2>
      <i className="text-2xl">{icon}</i>
      {secondIcon !== "Sin icono" && <i className="text-2xl">{secondIcon}</i>} 
      <p>{description}</p>
    </div>
  );
};

