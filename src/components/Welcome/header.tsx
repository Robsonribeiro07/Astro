"use client"
import Image from 'next/image'

import LogoTwo from '../../../public/image.png'
import { AvatarProfileContent } from '@/components/profile/avatar-profile'
import { ModeToggle } from '../toggle-theme'
import { useGetLogoSvg } from '@/hooks/use-get-logo'
export function Header() {
    
    
    const {LogoSvg} = useGetLogoSvg()


    return (
        <header className='w-full flex justify-between mt-5'>
            <div className='flex relative items-center w-[30rem] '>
            <Image src={LogoSvg} alt='logo' width={30} height={30}/>
            <Image src={LogoTwo} alt='logoName' width={100} height={100} className=' w-[150px] absolute' />
            </div>

            <div className='flex items-center gap-3'>
            <ModeToggle/>
            <AvatarProfileContent/>
            </div>
        </header>
    )
}