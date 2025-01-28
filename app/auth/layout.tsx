import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

export default function Back({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="shadow-md">
        <nav className="w-[90%] mx-auto relative">
          <div className="flex  justify-between py-4 items-center">
            <div>
              <h1 className="animate__animated animate__slideInLeft  text-[1.5rem] border rounded-full p-4 shadow-lg text-[#ffffff] bg-[#00D084] font-bold">
                <Link href={"/"}>HandyHub</Link>
              </h1>
            </div>

            <div className="hidden lg:flex gap-6 items-center animate__animated animate__slideInRight">
              <Link
                href={"/"}
                className="flex gap-2 border px-4 py-3 rounded-lg font-bold bg-[#ffffff] border-[#00D084] hover:bg-[#00D084] text-[#00D084] hover:text-[#ffffff] transition-all duration-500 ease-in"
              >
                <IoArrowBackOutline className="text-2xl" /> Back
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
}
