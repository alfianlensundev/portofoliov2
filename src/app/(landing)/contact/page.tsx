import NavBar from '@/components/layouts/navbar/navbar'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineGithub} from 'react-icons/ai'

export default function Home() {
    return (
        <main className="w-full min-h-screen relative text-white bg-neutral-900 ">
            <div className="w-full h-screen absolute flex justify-end overflow-x-hidden">
                <div className="w-2/3 -right-32 relative">
                    <Image
                        priority
                        className='object-cover object-right opacity-50'
                        src="/images/contact.jpg"
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                        alt="bg"
                    />
                    {/* <div className="w-full h-full select-none absolute z-10 bg-neutral-900 bg-opacity-70">

                    </div> */}
                    <div className="w-full h-full select-none absolute z-10 bg-gradient-to-r from-neutral-900 to-transparent">

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
                        <div className="w-full flex">
                            <div className="w-1/2">
                                <div className="w-full pt-[20%]">
                                    <div className="w-full mt-4 text-sm">
                                        <div className="flex">
                                            <div className="w-full">
                                                <div className="w-full">
                                                    <div className="w-full font-bold text-orange-300 text-3xl">
                                                        Contact;
                                                    </div>
                                                    <div className="w-full mt-4 text-[13px] flex">
                                                        <div className="w-[100px] ">
                                                            E-Mail 
                                                        </div>
                                                        <div className="flex-1">
                                                            <Link href={'mailto:alfianlensundev@gmail.com'}>
                                                                <div className="w-fit hover:underline">
                                                                    alfianlensundev@gmail.com
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="w-full mt-2 text-[13px] flex">
                                                        <div className="w-[100px] ">
                                                            LinkedIn
                                                        </div>
                                                        <div className="flex-1">
                                                            <Link href={'https://www.linkedin.com/in/alfian-ricky-lensun-260407174/'}>
                                                                <div className="w-fit text-left hover:underline">
                                                                    Alfian Ricky Lensun
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
