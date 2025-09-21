import { LogOut, Settings, SquareMenu, SunMoon, User } from 'lucide-react';
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
                            <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" alt='user-icon' />
                            <AvatarFallback>user</AvatarFallback>
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

/*  asChild And sr-only (tailwind class)

    => asChild → makes your custom element(like ShadCN Button) the trigger instead of Radix creating its own.
    => Without asChild, Radix would wrap your < Button > inside another<button> → causing invalid nested buttons.
    => With asChild, Radix uses your ShadCN<Button> as the actual trigger

    => sr - only → hides text visually but keeps it accessible for screen readers.

    < DropdownMenu >
        <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
                <SquareMenu />
                <span className="sr-only">Open Menu</span>
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
            <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
            <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
        </DropdownMenuContent>
    </ >
*/