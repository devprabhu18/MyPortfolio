"use client";
import Link from "next/link";

const navItems={
    '/':{name:'Home'},
    '/projects':{name:'Projects'},
    '/experience':{name:'Experience'},
    '/contact':{name:'Contact'}
}


export default function Navbar(){
    return(
        <>  
        <div className="pl-10 sticky top-0 border-b-2 pr-10">
            <nav className="flex flex-row space-x-10 justify-between pb-3 pt-3" id="nav">
                <div>
                    <Link href="/"><h2 className="font-sans text-2xl">&lt;Devananda Prabhu/&gt;</h2></Link>
                </div>
                <div className="flex flex-row space-x-10">
                    {Object.entries(navItems).map(([path,{name}])=>(
                        <Link href={path} key={path}>
                            {name}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
        </>
    )
}
