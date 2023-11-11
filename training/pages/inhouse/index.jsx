import React from 'react'

// layout
import Layout from '@/layout/Layout'

// nextjs
import { useRouter } from "next/router"
import Link from 'next/link'

function index() {
    return (
        <>
            <p className="text-2xl font-semibold text-gray-700">inhouse training page | localhost:3001{useRouter().route}</p>
            <br />
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus ullam numquam reprehenderit sequi expedita? Repellendus ipsam debitis perspiciatis vero rem odit, dolor reiciendis nam expedita quis voluptas veniam voluptates.</p>
            <p className='text-2xl font-semibold text-gray-700'>Inhouse Training page</p>
            <Link href={`inhouse/123123`} className="px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded">
                inhouse training show page
            </Link>
        </>
    )
}

export default index
