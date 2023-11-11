import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Layout(props) {
    return (
        <>
            <Head>
                <title>This is Training</title>
                <script src="https://cdn.tailwindcss.com" />
            </Head>

            <div className={`${inter.className}`}>
                <div className="fixed w-full py-4 bg-white shadow">
                    <div className="container flex items-center justify-between px-4 mx-auto">
                        <div>
                            <Image src={`https://jec.co.id/assets/img/jec-logo.png`} width="96" height="24" />
                        </div>

                        <div className="flex items-center space-x-8">
                            <Link href={`/`} className="text-sm font-semibold text-gray-700">
                                Home
                            </Link>
                            <Link href="/external" className="text-sm font-semibold text-gray-700">
                                External Training
                            </Link>
                            <Link href={`/inhouse`} className="text-sm font-semibold text-gray-700">
                                In House Training
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Page */}
                <div className='container h-screen px-4 pt-24 mx-auto'>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Layout
