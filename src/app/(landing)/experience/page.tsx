import NavBar from '@/components/custom/layouts/navbar/navbar'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineGithub} from 'react-icons/ai'

const webDescription = 'This website is created as a playground for the new and developing tech stack. This app run with Bun 1.0'
export const metadata: Metadata = {
    title: 'Alfian Lensun - Experience',
    description: webDescription,
}
export default function Home() {
    return (
        <main className="w-full min-h-screen relative text-white bg-black ">
            <div className="w-full h-screen absolute flex justify-end overflow-x-hidden">
                <div className="xl:block lg:block sm:hidden md:hidden hidden xl:w-2/3 lg:w-2/3 md:w-full w-full sm:w-full -right-32 relative">
                    <Image
                        className='object-cover object-left opacity-50'
                        src="/images/experience2.png"
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                        alt="bg"
                    />
                    <div className="w-full h-full select-none absolute z-10 bg-black bg-opacity-70">

                    </div>
                    <div className="w-full h-full select-none absolute z-10 bg-gradient-to-r from-transparent to-black">

                    </div>
                </div>
            </div>
            <div className="w-full fixed top-0 left-0 h-screen flex flex-col z-20">
                <div className="w-full xl:pt-12 lg:pt-12 md:pt-10 sm:pt-10 pt-10">
                    <div className="xl:container lg:container mx-auto flex flex-wrap items-center">
                        {/* <div className="h-20 w-40 relative xl:-left-20 lg:-left-20 md:left-0 sm:left-0 left-0"> */}
                            {/* <Image
                                priority
                                className='object-contain'
                                src="/images/logo.png"
                                fill
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                alt="bg"
                            /> */}
                        {/* </div> */}
                        <div className='xl:flex-1 lg:flex-1 md:w-full sm:w-full w-full'>
                            <NavBar />
                        </div>
                    </div>
                </div>
                <div className="w-full flex-1 overflow-y-auto">
                    <div className="container mx-auto pt-20">
                        <div className="w-full flex justify-end">
                            <div className="xl:w-2/3 lg:w-2/3 md:w-full sm:w-full w-full">
                                <div className="w-full pt-[5%]">
                                    <div className="w-full">
                                        <div className="w-full font-bold text-orange-300 text-xl">
                                            <h2>Lead Programmer ;</h2>
                                        </div>
                                        <div className="w-full mt-2 text-[13px] leading-loose">
                                            RSUP Prof Dr R D Kandou Manado
                                        </div>
                                        <div className="w-full mt-2 text-[13px] text-neutral-400 leading-loose">
                                            As a Lead Programmer at RSUP Prof. Dr. R.D. Kandou Manado, I develop and maintain web and mobile applications for healthcare services, using HL7 standards and NextJS framework to deliver high-quality and user-friendly solutions for patients, doctors, and staff.
                                        </div>
                                    </div>
                                    <div className="w-full mt-10 xl:pl-[50px] lg:pl-[50px]">
                                        <div className="w-full font-bold text-orange-300 text-xl">
                                            <h2>HIS integration with SatuSehat Platform;</h2>
                                        </div>
                                        <div className="w-full mt-2 text-[13px] leading-loose">
                                            RSUP Prof Dr R D Kandou Manado - Digital Transformation Office (DTO) Kemenkes
                                        </div>
                                        <div className="w-full mt-2 text-[13px] text-neutral-400 leading-loose">
                                            Integrating medical record data at RSUP Prof Dr. R. D. Kandou with the Satu Sehat platform.
                                        </div>
                                    </div>
                                    <div className="w-full mt-10 xl:pl-[100px] lg:pl-[100px]">
                                        <div className="w-full font-bold text-orange-300 text-xl">
                                            <h2>A Freelancer ;</h2>
                                        </div>
                                        <div className="w-full mt-2 text-[13px] leading-loose">
                                            *************
                                        </div>
                                        <div className="w-full mt-2 text-[13px] text-neutral-400 leading-loose">
                                            Creating and developing web and mobile applications according to the requested needs.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
