import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";

export default function NavBar(){
    return (
        <div className="w-full flex justify-end items-center">
            <Link href={'https://github.com/alfianlensundev'}>
                <div className="w-fit px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    <AiOutlineGithub size={28}/>
                </div>
            </Link>
            <Link href={'/'}>
                <div className="w-fit px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    Home
                </div>
            </Link>
            <Link href={'/experience'}>
                <div className="w-fit px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    Experience
                </div>
            </Link>
            <Link href={'/skills'}>
                <div className="w-fit px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    Skills
                </div>
            </Link>
            <Link href={'/contact'}>
                <div className="w-fit px-4 uppercase text-xs font-medium hover:text-orange-300 transition-colors duration-200">
                    Contact
                </div>
            </Link>
        </div>
    )
}