import { useRouter } from "next/router"

export default function show() {
    const router = useRouter()

    return (
        <div>external training id : {router.query.id}</div>
    )
}