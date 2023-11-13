import { serverClient } from '@/app/_trpc/server-client'
import NavBar from '@/components/custom/layouts/navbar/navbar'
import FormContact from '@/components/custom/partials/form-contact'
import TRPCProvider from '@/components/custom/providers/trpc-provider'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import {MdChevronRight} from 'react-icons/md'

const webDescription = 'This website is created as a playground for the new and developing tech stack. This app run with Bun 1.0'
export const metadata: Metadata = {
    title: 'Alfian Lensun - Contact',
    description: webDescription,
}
export default async function Contact() {
    return (
        <main className="w-full min-h-screen relative text-white bg-black ">
            <div className="w-full h-screen absolute flex justify-end overflow-x-hidden">
                <div className="xl:block lg:block sm:hidden md:hidden hidden xl:w-2/3 lg:w-2/3 md:w-full w-full sm:w-full -right-32 relative">
                    <Image
                        className='object-cover object-right opacity-50'
                        src="/images/contact.jpg"
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                        alt="bg"
                    />
                    <div className="w-full h-full select-none absolute z-10 bg-black bg-opacity-70">

                    </div>
                    <div className="w-full h-full select-none absolute z-10 bg-gradient-to-r from-black to-transparent">

                    </div>
                </div>
            </div>
            <div className="relative h-screen flex flex-col z-20">
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
                <div className="w-full h-full">
                    <div className="container mx-auto pt-20">
                        <div className="w-full flex">
                            <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full">
                                <div className="w-full pt-[20%]">
                                    <div className="w-full mt-4 text-sm">
                                        <div className="flex">
                                            <div className="w-full">
                                                <div className="w-full">
                                                    <div className="w-full font-bold text-orange-300 text-3xl">
                                                        Contact;
                                                    </div>
                                                    <div className="w-fit mt-4 text-[13px] flex">
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
                                                    <div className="w-fit mt-2 text-[13px] flex">
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
                                                <div className="w-2/4">
                                                    <TRPCProvider>
                                                        <FormContact /> 
                                                    </TRPCProvider>
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
