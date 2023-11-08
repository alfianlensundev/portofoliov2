import NavBar from '@/components/custom/layouts/navbar/navbar'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineGithub} from 'react-icons/ai'

const webDescription = 'This website is created as a playground for the new and developing tech stack. This app run with Bun 1.0'
export const metadata: Metadata = {
    metadataBase: new URL('https://acme.com'),
    title: 'Alfian Lensun ',
    description: webDescription,
    openGraph: {
        title: 'Alfian Lensun',
        description: webDescription,
        siteName: 'Welcome - Alfian Lensun',
        images: '/images/bg.jpg',
    },
}
export default function Home() {
    return (
        <main className="w-full group h-screen  overflow-hidden relative text-white bg-neutral-900 ">
            <div className="w-full h-screen top-0 absolute flex justify-end overflow-x-hidden">
                <div className="w-2/3 overflow-hidden xl:-right-32 lg:-right-32 md:right-0 sm:right-0 right-0 relative">
                    <Image
                        priority
                        className='object-cover xl:group-hover:scale-110 lg:group-hover:scale-110 md:group-hover:scale-100 sm:group-hover:scale-100 group-hover:scale-100 transition-all duration-1000 xl:object-right lg:object-right md:object-left sm:object-left object-left opacity-50'
                        src="/images/bg.jpg"
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                        alt="bg"
                    />  
                    <div className="w-full h-full select-none absolute z-10 bg-gradient-to-r from-neutral-900 to-transparent">

                    </div>
                </div>
                <div className="w-full h-full select-none absolute z-10 bg-neutral-900 bg-opacity-70">

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
                                    <div className="w-full font-bold text-orange-300 xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl">
                                        {`Hi, I'm Alfian Lensun </>`}
                                    </div>
                                    <div className="w-full mt-4 text-sm">
                                        A Software Developer From Manado
                                    </div>
                                    <div className="w-full mt-4 text-xs leading-loose">
                                        {`I started my career in 2018. Since then i've made many`} <b>Android</b>, <b>IOS</b>. <b>Web</b>, and <b></b> Application. 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-2 right-10 text-[10px]">
                        <div className="container mx-auto">
                            Pipeline - {process.env.BUILD_NUMBER} {process.env.BUILD_TIMESTAMP} 
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
