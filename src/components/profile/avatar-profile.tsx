'use client'
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Avatar from 'react-avatar'
import { ShowDetailsProfile } from "./more-details-profile";

export function AvatarProfileContent() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                
              <Avatar name="S" round  size="45" textSizeRatio={2} color="#77909a"/>
            </DropdownMenuTrigger>

            <ShowDetailsProfile/>   
        </DropdownMenu>
    )
}