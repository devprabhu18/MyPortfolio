import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className="self-end mb-0">
      <footer className="mb-3 pt-4 bg-white/5 border-opacity-5 border-t border-bordercol pl-10 pr-10">
        <div className="flex flex-row justify-between pb-3">
            <div className="flex flex-row space-x-14 ">
                <div className="border-[1px] rounded-md border-none bg-white/10  shadow-md hover:shadow-blue-800 hover:-translate-y-0.5 transition-all ease-out">
                    <a className="flex items-center p-2 space-x-1" href="https://github.com/devprabhu18">
                        <FaGithub/> <p>Github</p>
                    </a>
                </div>
                <div className="border-[1px] rounded-md border-none bg-white/10 shadow-md hover:shadow-blue-800 hover:-translate-y-0.5 transition-all ease-out">
                    <a className="flex p-2 items-center space-x-1" href="https://github.com/devprabhu18">
                        <FaLinkedin/> <p>LinkedIn</p>
                    </a>
                </div>
            </div>
        <div>   
            <Link href="/contact">
            <div className="border-[1px] rounded-md border-none bg-white/10 p-2 shadow-md hover:shadow-blue-800 hover:-translate-y-0.5 transition-all ease-out">Contact Me</div>
            </Link>
        </div>
        </div>
        <div className="flex flex-col content-center justify-center pb-2">
            <p className="flex flex-row content-center justify-center">&copy;Devananda M Prabhu.&nbsp;&nbsp;
                <span className="font-bold underline underline-offset-4 hover:no-underline">
                    <Link href="https://github.com/devprabhu18/MyPortfolio" target="_blank">Crafted by yours truly</Link>
                </span></p>
        </div>
      </footer>
    </div>
    </>
  );
}
