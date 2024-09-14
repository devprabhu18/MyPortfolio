
import ProfileImage from "@/components/profileimage";
import Link from "next/link";
import { TechStack } from "@/components/techstack";
import { languages } from "@/data/languages";
import { libraries } from "@/data/libraries";
import { tools } from "@/data/tools";

export default function Home() {
  return (
    <>
      <main className="pl-6 pr-6">
        <div className="sm:pt-8 pt-4 pb-4 sm:pb-8 mt-3 sm:mt-8 border-none rounded-xl shadow-lg bg-white/5 ml-1 mr-1 sm:w-[600px] sm:mx-auto lg:w-[1000px] lg:mx-auto">
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
            <div className="border rounded-xl border-none shadow-lg bg-white/5 ml-1 mr-1 flex flex-col items-center justify-center text-center mt-3 pt-2 sm:mt-2 sm:w-[600px] sm:mx-auto lg:w-[1000px] lg:mx-auto">
              <p className="p-2 sm:pl-8 sm:pr-8 sm:pt-4 sm:mt-1 sm:mb-2 sm:pb-2 text-justify sm:leading-7">
              I am pursuing a Bachelor of Engineering in Computer Science and Engineering at SJEC in India, driven by a deep passion for developing full-stack web applications and cross-platform solutions. I excel at creating seamless web experiences and versatile mobile apps, often immersing myself in complex programming challenges. My enthusiasm for technology extends to constantly exploring new tools and trends, and my ability to rapidly learn and adapt to new technologies keeps me at the forefront of the tech world. This curiosity and dedication fuel my continuous growth and excitement for every new project and challenge.</p>
            </div>
          </div>
        </div>



        <div className=" pt-4 sm:pt-2 grid grid-cols-1 pb-4 sm:pb-8 border-red-500 border mt-2">
          <div className="flex flex-col  items-center">
            
            <h1 className="font-medium text-2xl sm:text-3xl">Tech Stack</h1>
            <div className="border rounded-xl border-none shadow-lg bg-white/5 ml-1 mr-1 flex flex-col items-center justify-center text-center sm:mt-6 mt-3 pt-2 sm:w-[600px] sm:mx-auto lg:w-[1000px] lg:mx-auto pb-4 sm:pb-6">
              <div className="p-2 sm:pl-8 sm:pr-8 sm:pt-6 w-full flex justify-between">
                <h1 className="text-left text-lg sm:text-xl font-medium ml-2">Programming Languages:</h1>
                <div></div> 
              </div>
              <TechStack techstack={languages} />

              <div className="p-2 sm:pl-8 sm:pr-8 sm:pt-6 w-full flex justify-between mt-3">
                <h1 className="text-left text-lg sm:text-xl font-medium ml-2">Frameworks/Libraries:</h1>
                <div></div> 
              </div>
              <TechStack techstack={libraries} />

              <div className="p-2 sm:pl-8 sm:pr-8 sm:pt-6 w-full flex justify-between mt-3">
                <h1 className="text-left text-lg sm:text-xl font-medium ml-2">Tools:</h1>
                <div></div> 
              </div>
              <TechStack techstack={tools} />
            </div>
          </div>
        </div>


        <div className=" pt-4 sm:pt-2 grid grid-cols-1 pb-4 sm:pb-8 border-red-500 border sm:mt-5 mt-2">
          <div className="flex flex-col  items-center">
            
            <h1 className="font-medium text-2xl sm:text-3xl">Accomplishments</h1>
            <div className="border rounded-xl border-none shadow-lg bg-white/5 ml-1 mr-1 flex flex-col items-center justify-center text-center sm:mt-6 mt-3 pt-2 sm:w-[600px] sm:mx-auto lg:w-[1000px] lg:mx-auto pb-4 sm:pb-6">
              <div className="p-2 sm:pl-8 sm:pr-8 sm:pt-6 w-full flex justify-between">
                <h1 className="text-left text-lg sm:text-xl font-medium ml-2">Achievements:</h1>
                <div></div> 
              </div>
              <div className="px-4 sm:px-8 mt-1 mb-2">
                <ul className="list-disc list-inside text-left space-y-2">
                  <li className="text-sm sm:text-base text-justify sm:mt-4">Secured 2nd runner-up in the Agriculture category at the SJEC Premier Hackathon 2022.</li>
                  <li className="text-sm sm:text-base text-justify sm:mt-4">Participated in the Smart Nitte Hackathon in the Blockchain category and secured an internship opportunity at Karpine Limited, where they develop various products using blockchain technology.</li>
                  <li className="text-sm sm:text-base text-justify sm:mt-4">Secured 27th rank in the district for the National Means-cum-Merit Scholarship (NMMS) exam 2016-17.</li>         
                </ul>
              </div>

              <div className="p-2 sm:pl-8 sm:pr-8 sm:pt-6 w-full flex justify-between mt-3">
                <h1 className="text-left text-lg sm:text-xl font-medium ml-2">Certifications:</h1>
                <div></div> 
              </div>
              <div className="px-4 sm:px-8 mt-1 mb-2">
                <ul className="list-disc list-inside text-left space-y-2">
                  <li className="text-sm sm:text-base text-justify sm:mt-4">The Web Developer Bootcamp 2024 by Colt Steele - Completed an intensive, comprehensive course on Udemy covering advanced web development skills, modern technologies, and practical applications.</li>
                  <li className="text-sm sm:text-base text-justify sm:mt-4">Relational Database and SQL - Completed a hands-on course from Coursera Project Network, focusing on relational database management and advanced SQL techniques to efficiently manage and query data.</li>
                  <li className="text-sm sm:text-base text-justify sm:mt-4">Introduction to Blockchain and Ethereum - Completed a course on Infosys Springboard covering blockchain basics and Ethereum development.</li>         
                </ul>
              </div>
              
            </div>
          </div>
        </div>


      </main>
    </>
  );
  
}
