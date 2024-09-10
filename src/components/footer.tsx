import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ButtonLink } from "@/ui/button";

export default function Footer() {
  return (
    <>
      <footer className="mb-3 pt-3 border-t pl-8 pr-8">
        <div className="flex flex-row justify-between">
            <div className="flex flex-row space-x-4 ">
                <div>
                    <a className="flex items-center" href="https://github.com/devprabhu18">
                        <FaGithub/> <p>Github</p>
                    </a>
                </div>
                <div className="">
                    <a className="flex items-center" href="https://github.com/devprabhu18">
                        <FaLinkedin/> <p>LinkedIn</p>
                    </a>
                </div>
            </div>   
        <div >
            <ButtonLink title="Contact me" href="/contact"></ButtonLink>
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
