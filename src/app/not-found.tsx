import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata={
  title:'Oh! No',
  description:'Error page'
}

export default function NotFound() {
  return (
    <div className="pt-4 sm:pt-2 min-h-screen sm:mt-6 mt-16 flex items-start justify-center">
      <div className="border rounded-xl border-none shadow-lg bg-white/5 flex flex-col items-center justify-center text-center sm:mt-20 mt-4 pt-2 sm:w-[600px] lg:w-[1000px] pb-3 sm:pb-7">
        <p className="text-lg sm:text-3xl sm:mt-6 mt-3 sm:ml-0 sm:mr-0 ml-3 mr-3 pl-3 pr-3 pt-1 sm:pt-3 tracking-tight">
          Oh no! This page is in a parallel universe. Let&apos;s bring you back to
          reality.
        </p>
        <h1 className="font-semibold text-2xl sm:text-6xl mb-2 mt-3 sm:mt-10 tracking-widest ">
          4<span className="text-blue-800">0</span>4
        </h1>

        <div className="w-full flex justify-center mt-3 sm:mt-7">
          <Link href="/">
            <div className="border-[1px] rounded-md border-none bg-white/10 p-2 shadow-md hover:shadow-blue-800 hover:-translate-y-0.5 transition-all ease-out">
              Return Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
