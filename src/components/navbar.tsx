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
        <div className=" border-b-4">
            <div className="ml-10 sticky top-1 mt-2 mb-2">
                <nav className="flex flex-row space-x-10" id="nav">
                    <div className="flex flex-row space-x-10">
                        {Object.entries(navItems).map(([path,{name}])=>(
                            <Link href={path} key={path}>
                                {name}
                            </Link>
                        )
                        )}
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}
