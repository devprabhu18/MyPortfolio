import { MdDateRange } from "react-icons/md";
import { Metadata } from "next";

export const metadata: Metadata={
    title:'Experience | Devananda Prabhu',
    description:'This is the Work Experience page'
}

export default function Page(){    
    return(
        <>
        <div className=" pt-4 sm:pt-2 grid grid-cols-1 pb-4 sm:pb-8  sm:mt-6 mt-0 ml-2 mr-2">
          <div className="flex flex-col  items-center">
            
            <h1 className="font-medium text-2xl sm:text-3xl mt-1 sm:mt-2">Experience</h1>
            
            
            <div className="border rounded-xl border-none shadow-lg bg-white/5 sm:ml-1 sm:mr-1 ml-3 mr-3 flex flex-col items-center justify-center text-center sm:mt-8 mt-4 pt-2 sm:w-[600px] sm:mx-auto lg:w-[1000px] lg:mx-auto pb-4 sm:pb-6">
                <div className="p-2 sm:pl-8 sm:mt-0 mt-1 sm:pr-8 sm:pt-6 w-full flex justify-between">
                    <h1 className="text-left text-lg sm:text-xl font-medium  ">Karpine Limited</h1>
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm flex flex-row space-x-2 mt-1">
                        <MdDateRange size={18}/>
                        <p>Jan 2024 - Mar 2024</p>
                    </div> 
                </div>
                
                <div className="p-2 sm:pl-8 sm:pr-8 sm:pt-3 w-full flex justify-between sm:mt-0 mt-1">
                    <div>
                        <p className="text-neutral-600  dark:text-neutral-400  text-sm text-left">
                            Blockchain Intern (Remote)
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm text-left">
                        <b>Technologies used:</b> Node.js, React.js, Express.js, Moralis, Git
                        </p>
                    </div>
                    <div></div> 
                </div>    

                <div className="px-4 sm:px-8 mt-3 sm:mt:4 mb-2">
                    <ul className="list-disc list-inside text-left space-y-2 text-sm sm:text-base">
                        <p className="sm:mb-6 mb-3">At Karpine, I contributed to innovative projects leveraging blockchain technology:</p>
                        <li className="text-sm sm:text-base text-justify sm:mt-4">Developed a real-time coin staking app using the MERN stack and Web3.js, enabling users to track Ethereum staking transactions and receive timely updates on important staking events.</li>
                        <li className="text-sm sm:text-base text-justify sm:mt-4">Built a real-time transaction monitoring bot with Node.js and the Etherscan explorer API, designed to track Ethereum transactions and deliver timely updates on important events.</li>
                        <li className="text-sm sm:text-base text-justify sm:mt-4">During my internship, I collaborated closely with team members and followed the instructions provided by the Karpine team accurately. I also used Git for version control, ensuring smooth project management and contributing to the successful completion of tasks.</li>         
                    </ul>
                </div>



                <div className="p-2 sm:mt-4 mt-4 sm:pl-8 sm:pr-8 sm:pt-6 w-full flex justify-between">
                    <h1 className="text-left text-lg sm:text-xl font-medium  ">MotionCut</h1>
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm flex flex-row space-x-2 mt-1">
                        <MdDateRange size={18}/>
                        <p>Oct 2023 - Nov 2023</p>
                    </div> 
                </div>
                
                <div className="p-2 sm:pl-8 sm:pr-8 sm:pt-3 w-full flex justify-between sm:mt-0 mt-1">
                    <div>
                        <p className="text-neutral-600  dark:text-neutral-400  text-sm text-left">
                            Web Developer Intern (Remote)
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm text-left">
                        <b>Technologies used:</b> React.js, HTML, CSS, JavaScript, Git
                        </p>
                    </div>
                    <div></div> 
                </div>    

                <div className="px-4 sm:px-8 mt-3 sm:mt:4 mb-2">
                    <ul className="list-disc list-inside text-left space-y-2 text-sm sm:text-base">
                        <p className="sm:mb-6 mb-3">At MotionCut, I developed and designed interactive web applications:</p>
                        <li className="text-sm sm:text-base text-justify sm:mt-4">Designed a landing page for a business, focusing on UI/UX design to ensure responsiveness and an appealing visual experience.</li>
                        <li className="text-sm sm:text-base text-justify sm:mt-4">Designed a product catalog for an e-commerce website, incorporating features such as &quot;Add to Cart&quot; to enhance user functionality and streamline the shopping experience.</li>
                        <li className="text-sm sm:text-base text-justify sm:mt-4">Designed a task monitoring web app that allows users to add, create, delete, and check tasks, and integrated a database to ensure seamless data management and persistence.</li>         
                    </ul>
                </div>

            </div>
        </div>
        </div>
        </>
    )
}