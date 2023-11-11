import { useRouter } from "next/router"

export default function show() {
    const router = useRouter()

    return (
        <div>inhouse training id :{router.query.id}</div>
    )
}