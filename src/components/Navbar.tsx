"use client"

import { LogOut, Moon, Settings, Sun, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from './ui/button';

import Link from "next/link"
import { useTheme } from 'next-themes';
import { SidebarTrigger, useSidebar } from './ui/sidebar';

const Navbar = () => {
    const { setTheme } = useTheme()
    const { toggleSidebar } = useSidebar()

    return (
        <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
            {/* Left */}
            <SidebarTrigger />

            {/*  <Button variant="outline" onClick={toggleSidebar} >Custom Button</Button> */}
            {/* Left */}

            {/* Right */}
            <div className="flex items-center gap-4">
                <Link href="/">Dashboard</Link>

                {/* Theme Menu = Dark/Light */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />

                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />

                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                {/* Theme Menu = Dark/Light */}

                {/* User Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt='user-icon' />
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
                {/* User Menu */}
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