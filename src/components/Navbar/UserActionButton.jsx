import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs";
const UserActionButton = async() => {
    const user = await authUserSession()
    console.log(user);

    const actionLabel = user ? "Sign out" : "Sign in"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2">
            {
                user ? <Link href={"/users/dashboard"} className="py-1">Dashboard</Link> : null 
                
            }
            <Link href={actionURL} className="bg-palete-dark text-palete-accent py-1 px-12 inline-block rounded">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton