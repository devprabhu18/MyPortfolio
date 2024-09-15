import { projects } from "@/data/projects";
import { LuExternalLink } from "react-icons/lu";
import { VscGithub } from "react-icons/vsc";
import NextLink from "next/link";
import Image from "next/image";

type ProjectCardProps = (typeof projects)[0];

export const ProjectCard = ({
  title,
  description,
  gitLink,
  prodLink,
  techStack,
  thumb,
}: ProjectCardProps) => {
  const isExternal = prodLink.startsWith("http");

  return (
    <div className="border rounded-xl border-none shadow-lg bg-white/5 sm:ml-1 sm:mr-1 ml-3 mr-3 flex flex-col sm:mt-8 mt-4 pt-2 pb-0 sm:h-[300px]">
      <div className="flex flex-col sm:flex-row sm:grid sm:grid-cols-6 gap-4 sm:w-[600px] sm:mx-auto lg:w-[1000px] lg:mx-auto items-center h-full">
        <div className="w-full sm:col-span-2 sm:h-full">
          <div className="relative w-full h-64 sm:h-full">
            <Image
              src={thumb}
              alt={`${title} logo`}
              fill
              className=" sm:rounded-l-xl object-cover"
              style={{ margin: 0, padding: 0 }}
            />
          </div>
        </div>

        <div className="w-full sm:col-span-4 flex flex-col space-y-3 pl-4 h-full pt-2 sm:pt-0">
          <div className="flex flex-row justify-between items-center sm:mt-3 pr-3">
            <a
              href={prodLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row space-x-2 items-center"
            >
              <h2 className="text-left font-semibold text-xl">{title}</h2>
              <LuExternalLink className="size-6" />
            </a>
            <NextLink
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-0 sm:mt-0"
            >
              <VscGithub
                size={28}
                className="fill-current group-hover:text-blue-600 transition-all duration-300 ease-in-out"
              />
            </NextLink>
          </div>

          <p className="text-base sm:text-left text-justify sm:pt-4 pr-4 pt-2">
            {description}
          </p>

          <div className="flex flex-wrap items-center sm:pt-4 pt-2 sm:pb-0 pb-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="mr-2 mt-2 inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
