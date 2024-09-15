import { ProjectCard } from "@/components/projectcard"
import { projects } from "@/data/projects"

export default function Page(){
    return(
        <>
        <div className=" pt-4 sm:pt-2 grid grid-cols-1 pb-4 sm:pb-8  sm:mt-6 mt-0 ml-2 mr-2">
          <div className="flex flex-col  items-center">
            
            <h1 className="font-medium text-2xl sm:text-3xl mt-1 sm:mt-2">Projects</h1>
            
            <div className="mt-5 sm:mt-3 grid grid-cols-1 gap-3">
                {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
        </div>
        </>
    )
}