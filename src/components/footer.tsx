import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="self-end mb-0 flex flex-shrink-0 flex-col h-auto flex-grow-0 ">
        <footer className="mb-0 sm:mb-3 pt-4 bg-white/5 border-opacity-5 border-t border-bordercol px-5 sm:px-10 flex flex-col flex-shrink-0">
          <div className="flex flex-col sm:flex-row justify-between pb-3">
            <div className="flex flex-col sm:flex-row sm:space-x-14 space-y-3 sm:space-y-0">
              <div className="border-[1px] rounded-md border-none bg-white/10 shadow-md hover:shadow-blue-800 hover:-translate-y-0.5 transition-all ease-out flex flex-row content-center justify-center">
                <a className="flex items-center p-2 space-x-1" href="https://github.com/devprabhu18" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> <p>Github</p>
                </a>
              </div>
              <div className="border-[1px] rounded-md border-none bg-white/10 shadow-md hover:shadow-blue-800 hover:-translate-y-0.5 transition-all ease-out flex flex-row content-center justify-center">
                <a className="flex p-2 items-center space-x-1" href="https://www.linkedin.com/in/devanandamprabhu/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> <p>LinkedIn</p>
                </a>
              </div>
            </div>
            <div className="mt-3 sm:mt-0">
              <Link href="/contact">
                <div className="border-[1px] rounded-md border-none bg-white/10 p-2 shadow-md hover:shadow-blue-800 hover:-translate-y-0.5 transition-all ease-out flex flex-row content-center justify-center">
                  Contact Me
                </div>
              </Link>
            </div>
          </div>
          <div className="flex text-xs sm:text-base justify-center pb-2 text-center">
            <p className="flex  content-center justify-center">&copy; 2024 Devananda Prabhu.&nbsp;&nbsp;
              <span className="font-bold underline underline-offset-4 hover:no-underline">
                <Link href="https://github.com/devprabhu18/MyPortfolio" target="_blank" rel="noopener noreferrer">
                  Crafted by yours truly
                </Link>
              </span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
