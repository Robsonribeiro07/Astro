 "use client"
import {SignIn} from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

 function SignInPage() {
    const searchParams = useSearchParams()

    const fromProtected = searchParams.get('from')

    const redirectUrl = searchParams.get('redirectUrl')

    useEffect(() => {
        if(fromProtected === 'protected') {
            toast.error('Voce esta acessando uma rota protegida, por favor faça login')
        }
    },[fromProtected])

    const afterUrl = fromProtected === 'protected' ? redirectUrl : '/dashboard'
    return (
        <div className='w-screen flex items-center justify-center h-screen'>
            <SignIn forceRedirectUrl={afterUrl}/>
        </div>
    )
}

export default SignInPage