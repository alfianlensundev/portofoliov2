import NavBar from '@/components/layouts/navbar/navbar'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineGithub} from 'react-icons/ai'

export default function Home() {
    return (
        <main className="w-full min-h-screen relative text-white bg-neutral-900 ">
            <div className="w-full h-screen absolute flex justify-start overflow-x-hidden">
                <div className="w-2/3 relative">
                    <Image
                        priority
                        className='object-cover object-left opacity-50'
                        src="/images/experience2.png"
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                        alt="bg"
                    />
                    <div className="w-full h-full select-none absolute z-10 bg-neutral-900 bg-opacity-70">

                    </div>
                    <div className="w-full h-full select-none absolute z-10 bg-gradient-to-r from-transparent to-neutral-900">

                    </div>
                </div>
            </div>
            <div className="relative h-screen flex flex-col z-20">
                <div className="w-full pt-12">
                    <div className="container mx-auto flex items-center">
                        <div className="h-20 w-40 relative -left-20">
                            {/* <Image
                                priority
                                className='object-contain'
                                src="/images/logo.png"
                                fill
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                alt="bg"
                            /> */}
                        </div>
                        <div
                            style={{
                                flex: 1      
                            }}
                        >
                            <NavBar />
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <div className="container mx-auto pt-20">
                        <div className="w-full flex justify-end">
                            <div className="w-2/3">
                                <div className="w-full pt-[5%]">
                                    <div className="w-full">
                                        <div className="w-full font-bold text-orange-300 text-xl">
                                            Lead Programmer ;
                                        </div>
                                        <div className="w-full mt-2 text-[13px] leading-loose">
                                            RSUP Prof Dr R D Kandou Manado
                                        </div>
                                        <div className="w-full mt-2 text-[13px] text-neutral-400 leading-loose">
                                            As a Lead Programmer at RSUP Prof. Dr. R.D. Kandou Manado, I develop and maintain web and mobile applications for healthcare services, using HL7 standards and NextJS framework to deliver high-quality and user-friendly solutions for patients, doctors, and staff.
                                        </div>
                                    </div>
                                    <div className="w-full mt-10 pl-[50px]">
                                        <div className="w-full font-bold text-orange-300 text-xl">
                                            HIS integration with SatuSehat Platform;
                                        </div>
                                        <div className="w-full mt-2 text-[13px] leading-loose">
                                            RSUP Prof Dr R D Kandou Manado - Digital Transformation Office (DTO) Kemenkes
                                        </div>
                                        <div className="w-full mt-2 text-[13px] text-neutral-400 leading-loose">
                                            Integrating medical record data at RSUP Prof Dr. R. D. Kandou with the Satu Sehat platform.
                                        </div>
                                    </div>
                                    <div className="w-full mt-10 pl-[100px]">
                                        <div className="w-full font-bold text-orange-300 text-xl">
                                            A Freelancer ;
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
