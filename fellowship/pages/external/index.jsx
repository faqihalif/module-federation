import { useRouter } from "next/router"
import Link from "next/link"

export default function index() {
    return (
        <>
            <p className="text-2xl font-semibold text-gray-700">fellowship external page | localhost:3002{useRouter().route}</p>
            <br />
            <Link href={`external/123123`} className="px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded">
                fellowship external show page
            </Link>
        </>
    )
}
