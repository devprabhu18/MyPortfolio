import Image from "next/image";

export default function ProfileImage(){
    return(
        <>
        <div className=" rounded-full border-spacing-2 ring-2 ring-bordercol shadow-md m-6 ">
        <Image
          src="https://github.com/devprabhu18.png"
          alt="Next.js logo"
          width={180}
          height={38}
          className="rounded-full"
          priority
        />
        </div>
        </>
    )
}