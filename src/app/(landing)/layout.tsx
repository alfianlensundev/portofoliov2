import FirebaseProvider from '@/components/custom/providers/FirebaseProvider'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const popp = Poppins({ 
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin'] 
})
const webDescription = 'This website is created as a playground for the new and developing tech stack. This app run with Bun 1.0'
export const metadata: Metadata = {
    metadataBase: new URL('https://alfianlensun.tech'),
    title: 'Alfian Lensun',
    description: webDescription,
    openGraph: {
        title: 'Alfian Lensun',
        description: webDescription,
        siteName: 'Portofolio - Alfian Lensun',
        images: '/images/og-image.png',
    },
    keywords: ['software', 'developer', 'manado', 'freelancer'],
    manifest: "/manifest.json",
    viewport: {
        initialScale: 1,
        maximumScale: 5,
        minimumScale: 1,
        width: 'device-width',
        height: "device-height"
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${popp.className} antialiased`}>
            <FirebaseProvider/>
            {children}
        </body>
    </html>
  )
}
