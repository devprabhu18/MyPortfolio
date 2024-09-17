import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata={
  title:'Thank You',
  description:'This is the Thank you page'
}

export default function Page() {
  return (
    <>
      <div className="pt-4 sm:pt-2 min-h-screen sm:mt-6 mt-0 flex items-start justify-center">
        <div className="border rounded-xl border-none shadow-lg bg-white/5 flex flex-col items-center justify-center text-center sm:mt-20 mt-16 pt-2 sm:w-[600px] lg:w-[1000px] pb-3 sm:pb-7">
          <h1 className="font-bold text-xl sm:text-3xl mb-2 mt-3 sm:mt-10">
            Thank you for reaching out
          </h1>
          <p className="text-lg sm:text-xl sm:mt-4 mt-3 ml-3 mr-3">
            You will be getting a reply in 24 hours.
          </p>

          <div className="w-full flex justify-center pt-3 mt-3 ">
          <Link href="/">
                <div className="border-[1px] rounded-md border-none bg-white/10 p-2 shadow-md hover:shadow-blue-800 hover:-translate-y-0.5 transition-all ease-out">
                  Go Back
                </div>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}
