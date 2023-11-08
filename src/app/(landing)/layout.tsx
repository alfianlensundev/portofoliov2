import '../globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const popp = Poppins({ 
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin'] 
})
const webDescription = 'This website is created as a playground for the new and developing tech stack. This app run with Bun 1.0'
export const metadata: Metadata = {
    metadataBase: new URL('https://acme.com'),
    title: 'Alfian Lensun',
    description: webDescription,
    openGraph: {
        title: 'Alfian Lensun',
        description: webDescription,
        siteName: 'Portofolio - Alfian Lensun',
        images: '/images/og-image.png',
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${popp.className} antialiased`}>{children}</body>
    </html>
  )
}
