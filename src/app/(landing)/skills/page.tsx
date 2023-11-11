import NavBar from '@/components/custom/layouts/navbar/navbar'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineGithub} from 'react-icons/ai'

const webDescription = 'This website is created as a playground for the new and developing tech stack. This app run with Bun 1.0'
export const metadata: Metadata = {
    title: 'Alfian Lensun - Skills',
    description: webDescription,
}
export default function Skills() {
    return (
        <main className="w-full min-h-screen relative text-white bg-black ">
            <div className="w-full h-screen fixed flex justify-start overflow-x-hidden">
                <div className="w-full relative">
                    <Image
                        className='object-cover object-left opacity-50'
                        src="/images/experience3.png"
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                        alt="bg"
                    />
                    <div className="w-full h-full select-none fixed top-0 z-10 bg-black bg-opacity-80">

                    </div>
                    {/* <div className="w-full h-full select-none absolute z-10 bg-gradient-to-r from-transparent to-neutral-900">

                    </div> */}
                </div>
            </div>
            <div className="fixed top-0 w-full h-screen flex flex-col z-20">
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
                <div className="w-full h-full overflow-y-auto">
                    <div className="container mx-auto pt-20">
                        <div className="w-full">
                            <div className="w-full flex items-center">
                                <div className="w-full text-sm flex text-neutral-300">
                                    <div className="w-fit uppercase text-[12px]">
                                        Programming Language
                                    </div>
                                    <div className="flex-1 flex pl-4 items-center">
                                        <div className="h-[1px] w-full border-b border-white border-dashed border-opacity-10">
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-10">
                                <div className="w-full gap-y-10 flex flex-wrap gap-x-20">
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/ts.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Typescript
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/js.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Javascript
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/go.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Golang
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/php.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            PHP
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 bg-white rounded-xl relative">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/rust.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Rust
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-[50px]">
                            <div className="w-full flex items-center">
                                <div className="w-full text-sm flex text-neutral-300">
                                    <div className="w-fit uppercase text-[12px]">
                                        Database
                                    </div>
                                    <div className="flex-1 flex pl-4 items-center">
                                        <div className="h-[1px] w-full border-b border-white border-dashed border-opacity-10">
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-10">
                                <div className="w-full flex gap-y-10 flex-wrap gap-x-20">
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/mongodb.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            MongoDB
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative bg-white rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/mariadb.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            MariaDB
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/elastic.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Elastic
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/redis.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Redis
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-[50px]">
                            <div className="w-full flex items-center">
                                <div className="w-full text-sm flex text-neutral-300">
                                    <div className="w-fit uppercase text-[12px]">
                                        Frameworks & Library
                                    </div>
                                    <div className="flex-1 flex pl-4 items-center">
                                        <div className="h-[1px] w-full border-b border-white border-dashed border-opacity-10">
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-10">
                                <div className="w-full gap-y-10 flex flex-wrap gap-x-20">
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/nextjs.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            NextJS 13
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/nest.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            NestJS
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/fastify.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Fastify
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/tailwind.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            TailwindCSS
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/prisma.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Prisma
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/trpc.svg"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            tRPC
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-[50px]">
                            <div className="w-full flex items-center">
                                <div className="w-full text-sm flex text-neutral-300">
                                    <div className="w-fit uppercase text-[12px]">
                                        DevOps
                                    </div>
                                    <div className="flex-1 flex pl-4 items-center">
                                        <div className="h-[1px] w-full border-b border-white border-dashed border-opacity-10">
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-10 pb-4">
                                <div className="w-full gap-y-10 flex flex-wrap gap-x-20">
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/docker.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Docker
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/nginx.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Nginx
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/jenkins.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Jenkins
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/git.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Git
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/gitlab.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Gitlab
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/sentry.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Sentry
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="h-20 w-20 relative rounded-xl">
                                            <Image
                                                className='object-contain'
                                                src="/images/tech/kibana.png"
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                                                alt="bg"
                                            />
                                        </div>
                                        <div className="text-center text-xs mt-4">
                                            Kibana
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
