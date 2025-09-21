import { LogOut, Settings, SunMoon, User } from 'lucide-react';
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"


const Navbar = () => {
    return (
        <nav className="p-4 flex items-center justify-between">
            {/* Left */}
            collapseButton
            {/* Left */}

            {/* Right */}
            <div className="flex items-center gap-4">
                <Link href="/">Dashboard</Link>
                <SunMoon />

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>
                            My Account
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Profile
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem>
                            <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Settings
                        </DropdownMenuItem>

                        <DropdownMenuItem variant="destructive">
                            <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {/* Right */}
        </nav>
    )
}

export default Navbar