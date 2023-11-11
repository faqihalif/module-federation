import { useRouter } from "next/router"

export default function show() {
    const router = useRouter()

    return (
        <div>External Fellowship id : {router.query.id}</div>
    )
}