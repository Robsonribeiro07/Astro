""
import { LogOut } from "lucide-react";
// import { Separator } from "../separator";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from "../ui/dropdown-menu";
import { useClerk, useUser} from '@clerk/nextjs'
import { useRouter } from "next/navigation";
// import { Sheet, SheetTrigger } from "../ui/sheet";
// import { EditProfile } from "./edit-profile";

export function ShowDetailsProfile() {

    const {signOut} = useClerk()

    const {replace} = useRouter()

    const {user} = useUser()

    if(!user) return <p> loading </p>

    const {emailAddresses, username} = user

    const handleSignout = () => {
         signOut()

        replace('/') // replace the current page with the home page

        // or use the router.push('/') to navigate to the home page
        // router.push('/')

    }

    return (
        <DropdownMenuContent className="text-TextColorPrimary flex flex-col p-1 w-[13rem] bg-background ">
            <DropdownMenuLabel className="py-0" >
               <p className="font-[500]">{username}</p>
            </DropdownMenuLabel>


            <DropdownMenuLabel className="py-0 " >
               <p className="text-[0.750rem] font-[500] text-[#767676]">
                {emailAddresses[0].emailAddress}
               </p>
            </DropdownMenuLabel>





            <DropdownMenuItem className="flex justify-between cursor-pointer" onClick={handleSignout}>
               <div className="flex gap-2 items-center  " >
                <LogOut size={18} />
                <p>Sair</p>
               </div>

                <p className="tracking-wide text-[#7f7f7f] font-[500]">Ctrl + Q</p>
            </DropdownMenuItem>

            {/* <Sheet >
                <SheetTrigger className="hover:bg-white rounded-sm hover:text-black">
                    <div className="flex gap-2 px-2 items-center py-2">
                    <EditIcon size={18}/>

                    <p className="text-sm">Editar</p>
                    </div>
                </SheetTrigger>

                <EditProfile/>
                
            </Sheet>  */}
        </DropdownMenuContent>
    )

}