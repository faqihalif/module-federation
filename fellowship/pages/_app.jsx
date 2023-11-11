import React, { lazy } from 'react'
import '@/styles/globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// sharing components
const BreadCrumb = lazy(() => import('host/BreadCrumb'))

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>This is Fellowship</title>
                <script src="https://cdn.tailwindcss.com" />
            </Head>

            <div className={`${inter.className}`}>
                <BreadCrumb title="Components" pageTitle="Host" />

                {/* Main Page */}
                <div className='container h-screen px-4 pt-20 mx-auto'>
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    )
}
