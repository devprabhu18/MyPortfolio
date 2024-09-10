import Link from "next/link"

type ButtonProps={
    title:string;
    href:string;
}

export const ButtonLink=({title,href}:ButtonProps)=>{
    return(
        <>
        <Link className="border-spacing-3" href={href}>
        {title}
        </Link>
        </>
    )
}