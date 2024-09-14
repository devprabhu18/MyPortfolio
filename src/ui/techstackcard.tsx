import React from "react";
import { IconType } from "react-icons";

type TechStackProps={
    title:string,
    Icon:IconType,
    href:string
}

export const TechStackCard = ({ title, Icon, href }: TechStackProps) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center rounded-full justify-center space-y-2 font-semibold bg-white/5 p-4 text-sm shadow-md hover:shadow-md hover:shadow-blue-600 active:translate-y-[2px] transition-all duration-300 ease-out">
          <Icon size={20} />
          <div className="whitespace-nowrap">{title}</div>
        </div>
      </a>
    );
  };
  