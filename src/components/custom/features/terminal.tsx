'use client'

import { JetBrains_Mono } from "next/font/google"
import moment from 'moment'
import { useState } from "react"
import { cn } from "@/lib/utils"
const jetbrains = JetBrains_Mono({ 
    weight: ['100','200','300','400','500','600','700','800'],
    subsets: ['latin'] 
})
export default function Terminal(){
    const [showTerminal, setShowTerminal] = useState(false)
    return (
        <div className={`relative`}>
            <div className={cn('w-[400px] cursor-pointer hover:bg-neutral-800 transition-all duration-300 text-[13px] shadow rounded-b-xl mb-2 flex flex-col items-center justify-center z-[999] rounded-t-xl bg-neutral-900', showTerminal ? 'h-fit' : 'hover:h-10 h-9')}>
                Terminal
                {showTerminal && 
                    <div className={`${jetbrains.className} w-full border-t border-white border-opacity-10`}>
                        {`[${moment().format('HH:mm')}]`}
                    </div>
                }
            </div>
        </div>
    )
}