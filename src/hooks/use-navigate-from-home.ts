import { useAuth } from "@clerk/nextjs";
import { useRouter   } from "next/navigation";

export function useNavigateFromHome() {
    
    const {push} = useRouter()

    const {isSignedIn} = useAuth()


    const handleNavigate = () => {
        if(!isSignedIn) {
          return push('/auth/sign-in')
        }
        return push('/dashboard')
    }


    return { handleNavigate }
}