import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="mb-3 pt-3 border-t pl-8 pr-8">
        <div className="flex flex-row justify-between pb-3">
            <div className="flex flex-row space-x-14 ">
                <div className="border border-grey rounded-md border-solid p-2 hover:bg-black hover:text-white">
                    <a className="flex items-center space-x-1" href="https://github.com/devprabhu18">
                        <FaGithub/> <p>Github</p>
                    </a>
                </div>
                <div className="border border-grey rounded-md border-solid p-2">
                    <a className="flex items-center space-x-1" href="https://github.com/devprabhu18">
                        <FaLinkedin/> <p>LinkedIn</p>
                    </a>
                </div>
            </div>   
        <div className="border border-grey rounded-md border-solid p-2">
            <Link href="/contact">Contact Me</Link>
        </div>
        </div>
        <div className="flex flex-col content-center justify-center">
            <p className="flex flex-row content-center justify-center">&copy;Devananda M Prabhu.&nbsp;&nbsp;
                <span className="font-bold underline underline-offset-4 hover:no-underline">
                    <Link href="https://github.com/devprabhu18/MyPortfolio" target="_blank">Crafted by yours truly</Link>
                </span></p>
        </div>
      </footer>
    </>
  );
}
