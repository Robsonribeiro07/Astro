 import {SignIn} from '@clerk/nextjs'
 function SignInPage() {
    return (
        <div className='w-screen flex items-center justify-center h-screen'>
            <SignIn forceRedirectUrl={'/dashboard'} afterSignOutUrl={'/dashboard'}/>
        </div>
    )
}
export default SignInPage