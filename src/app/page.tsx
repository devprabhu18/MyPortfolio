
import ProfileImage from "@/components/profileimage";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main className="pl-6 pr-6">
        <div className="sm:pt-8 pt-4 pb-4 sm:pb-8 mt-3 sm:mt-8 border-none rounded-xl shadow-lg bg-white/5 ml-4 mr-4 lg:ml-60 lg:mr-60">
          <div className="grid grid-cols-1 sm:grid-cols-4">
            <div className="sm:col-span-2 flex">
              <div className="flex content-center justify-center items-center h-full w-full">
                <ProfileImage />
              </div>
            </div>
            <div className="sm:col-span-2 flex">
              <div className="flex flex-col content-center justify-center sm:pt-6 items-center pb-6 pt-4 sm:mt-0 sm:mb-0 h-full w-full">
                <h1 className="font-normal text-2xl mb-4 sm:tracking-normal tracking-tighter">
                  Hey there!, I&apos;m
                </h1>
                <h1 className="font-medium sm:text-4xl text-3xl mb-4 sm:tracking-normal tracking-tighter">
                  Devananda Prabhu
                </h1>
                <h1 className="font-normal text-xl mb-4 sm:tracking-normal tracking-tighter">
                  Full-Stack Developer.
                </h1>
                <div className="flex flex-row space-x-6 sm:mt-2">
                  <Link
                    href="/pdf/DevanandaPrabhuResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="border-[1px] rounded-md border-none bg-white/10 p-2 shadow-md hover:shadow-blue-800 hover:-translate-y-0.5 transition-all ease-out">
                    Resume
                    </div>
                  </Link>
                  <Link href="/contact">
                  <div className="border-[1px] rounded-md border-none bg-white/10 p-2 shadow-md hover:shadow-blue-800 hover:-translate-y-0.5 transition-all ease-out">
                    Contact Me
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className=" pt-4 sm:pt-2 grid grid-cols-1 pb-4 sm:pb-8 mt-3 sm:mt-10">
          <div className="flex flex-col  items-center">
            
            <h1 className="font-medium text-2xl sm:text-3xl">About Me</h1>
            <div className="border rounded-xl border-none shadow-lg bg-white/5 ml-4 mr-4 flex flex-col items-center justify-center text-center mt-3 pt-2 sm:mt-6 sm:ml-60 sm:mr-60">
              <p className="p-2 sm:pl-8 sm:pr-8 sm:pt-4 sm:mt-3  text-justify sm:leading-7">
              I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering at SJEC in India. My academic journey is fueled by a deep passion for developing full-stack web applications and cross-platform solutions. Whether it’s crafting seamless web experiences or building versatile mobile apps, I thrive on bringing innovative digital ideas to life. Alongside my coursework, I immerse myself in solving programming challenges, often spending hours engrossed in code. This relentless curiosity and dedication to problem-solving are at the heart of my approach to technology.</p>

              <p className="p-2 mt-2 sm:pl-8 sm:pb-4 sm:pr-8 sm:mb-4 sm-mt-4 sm:leading-7 text-justify">My enthusiasm for technology extends beyond just development; I am constantly exploring new tools and trends. I pride myself on my ability to quickly learn and adapt to new technologies, which enables me to stay on the cutting edge of the tech world. This agility in learning and my love for tackling complex problems drive me to continually evolve and refine my skills, making me excited about every new project and challenge that comes my way.
              </p>
              
            </div>
          </div>
        </div>



        <div className=" pt-4 sm:pt-2 grid grid-cols-1 pb-4 sm:pb-8 border-red-500 border mt-2">
          <div className="flex flex-col  items-center">
            
            <h1 className="font-medium text-2xl sm:text-3xl">Tech Stack</h1>
            <div className="border rounded-xl border-none shadow-lg bg-white/5 ml-4 mr-4 flex flex-col items-center justify-center text-center mt-3 pt-2 sm:ml-60 sm:mr-60">
              <p className="p-2 sm:pl-8 sm:pr-8 sm:pt-4 text-justify">
              I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering at SJEC in India. My academic journey is fueled by a deep passion for developing full-stack web applications and cross-platform solutions. Whether it’s crafting seamless web experiences or building versatile mobile apps, I thrive on bringing innovative digital ideas to life. Alongside my coursework, I immerse myself in solving programming challenges, often spending hours engrossed in code. This relentless curiosity and dedication to problem-solving are at the heart of my approach to technology.</p>

              <p className="p-2 mt-2 sm:pl-8 sm:pb-4 sm:pr-8 text-justify">My enthusiasm for technology extends beyond just development; I am constantly exploring new tools and trends. I pride myself on my ability to quickly learn and adapt to new technologies, which enables me to stay on the cutting edge of the tech world. This agility in learning and my love for tackling complex problems drive me to continually evolve and refine my skills, making me excited about every new project and challenge that comes my way.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
  
}
