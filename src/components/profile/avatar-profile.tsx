'use client'
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import AvatarProfile from "./avatar";
import { ShowDetailsProfile } from "./more-details-profile";

export function AvatarProfileContent() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                
              <AvatarProfile image_profile='https://res.cloudinary.com/ddrbxo7pj/image/upload/v1738187204/user_images/lq1hofpdmrwhzrzxmgtu.jpg'/>
            </DropdownMenuTrigger>

            <ShowDetailsProfile/>   
        </DropdownMenu>
    )
}