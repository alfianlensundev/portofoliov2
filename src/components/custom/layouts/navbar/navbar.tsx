import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

export default function NavBar(){
    return (
        <div className="w-full flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap xl:justify-end lg:justify-end md:justify-center sm:justify-center justify-center items-center">
            <Link href={'/'}>
                <div className="xl:w-fit lg:w-fit md:w-1/5 sm:w-1/5 w-1/5 px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    Home
                </div>
            </Link>
            <Link href={'/experience'}>
                <div className="xl:w-fit lg:w-fit md:w-1/5 sm:w-1/5 w-1/5 px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    Experience
                </div>
            </Link>
            <Link href={'/skills'}>
                <div className="xl:w-fit lg:w-fit md:w-1/5 sm:w-1/5 w-1/5 px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    Skills
                </div>
            </Link>
            <Link href={'/contact'}>
                <div className="xl:w-fit lg:w-fit md:w-1/5 sm:w-1/5 w-1/5 px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    Contact
                </div>
            </Link>
            <Link href={'https://github.com/alfianlensundev'}>
                <div className="xl:w-fit pb-1 lg:w-fit md:w-1/5 sm:w-1/5 w-1/5 px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    <AiOutlineGithub size={20}/>
                </div>
            </Link>
        </div>
    )
}