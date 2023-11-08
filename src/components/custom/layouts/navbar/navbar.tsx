import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

export default function NavBar(){
    return (
        <div className="w-full flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap xl:justify-end lg:justify-end md:justify-center sm:justify-center justify-center items-center">
            <Link href={'https://github.com/alfianlensundev'}>
                <div className="xl:px-4 lg:px-4 md:px-12 sm:px-12 px-12 xl:mb-0 lg:mb-0 sm:mb-8 md:mb-8 mb-8 xl:w-fit lg:w-fit md:w-screen sm:w-screen w-screen uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    <AiOutlineGithub size={28}/>
                </div>
            </Link>
            <Link href={'/'}>
                <div className="xl:w-fit lg:w-fit md:w-1/4 sm:w-1/4 w-1/4 px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    Home
                </div>
            </Link>
            <Link href={'/experience'}>
                <div className="xl:w-fit lg:w-fit md:w-1/4 sm:w-1/4 w-1/4 px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    Experience
                </div>
            </Link>
            <Link href={'/skills'}>
                <div className="xl:w-fit lg:w-fit md:w-1/4 sm:w-1/4 w-1/4 px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    Skills
                </div>
            </Link>
            <Link href={'/contact'}>
                <div className="xl:w-fit lg:w-fit md:w-1/4 sm:w-1/4 w-1/4 px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    Contact
                </div>
            </Link>
        </div>
    )
}