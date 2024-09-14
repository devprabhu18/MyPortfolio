import React from "react";
import { IconType } from "react-icons";
import { TechStackCard } from "@/ui/techstackcard";

interface technologies {
    title: string;
    Icon: IconType;
    href: string;
}

interface TechCard {
    techstack: technologies[];
}

export const TechStack=({techstack}:TechCard)=>{
    return(
        <>
        <section className="mt-2 px-4 ">
            <div className="mt-2 sm:mt-4  grid grid-cols-3 gap-4 sm:gap-6 sm:grid-cols-5">
                {techstack.map((tech, index) => (
            <TechStackCard key={index} {...tech} />
            ))}
            </div>
        </section>
        </>
    )
}