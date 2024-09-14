import {
    TbBrandGit,
    TbBrandDocker,
    TbBrandVscode,
    TbBrandFigma, 
  } from 'react-icons/tb';
  import { SiLatex } from "react-icons/si";
  
  export const tools = [
    {
      title: 'Git',
      Icon: TbBrandGit,
      href: 'https://git-scm.com/',
    },
    {
        title: 'VS Code',
        Icon: TbBrandVscode,
        href: 'https://code.visualstudio.com/',
      },
    {
      title: 'Docker',
      Icon: TbBrandDocker,
      href: 'https://www.docker.com/',
    },
    {
        title: 'LaTeX',
        Icon: SiLatex,
        href: 'https://www.latex-project.org/',
      },
    {
      title: 'Figma',
      Icon: TbBrandFigma,
      href: 'https://www.figma.com/',
    },
    
  ];