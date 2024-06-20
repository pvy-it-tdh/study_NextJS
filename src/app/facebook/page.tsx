'use client'
import { useRouter } from "next/navigation";

const Facebook=()=>{
    const router= useRouter();
    const handleClick=()=>{
        router.push('/')
    }
    return (
        <div>
            Facebook
            <button onClick={handleClick}>Back</button>
        </div>
    )
}
export default Facebook;