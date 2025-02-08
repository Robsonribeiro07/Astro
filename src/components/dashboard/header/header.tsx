import Image from 'next/image'

import LogoTwo from '../../../../public/image.png'
import { NewTransctionButton } from './newTransction/new-transction-button'
import { AvatarProfileContent } from '@/components/profile/avatar-profile'
import { useGetLogoSvg } from '@/hooks/use-get-logo'
import Link from 'next/link'
export function Header() {

    const {LogoSvg} = useGetLogoSvg()

    return (
        <header className='w-full flex justify-between'>
            <div className='flex relative items-center w-[30rem] '>
            <Image src={LogoSvg} alt='logo' width={30} height={30}/>
            <Image src={LogoTwo} alt='logoName' width={100} height={100} className=' w-[150px] absolute' />
            </div>

            <div className='flex items-center gap-3'>
            <NewTransctionButton/>
            <AvatarProfileContent/>
            <Link href={'/1-qr-code'}>
            Abrir modal
            </Link>
            </div>
        </header>
    )
}