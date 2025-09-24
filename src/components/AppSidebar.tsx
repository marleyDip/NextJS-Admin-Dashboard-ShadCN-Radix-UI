import { Home, Inbox, Calendar, Search, Settings, User2, ChevronUp, Plus, Projector, ChevronDown, ChevronRight, WalletCards, User } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarSeparator,
} from "./ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "./ui/collapsible";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"

import Link from "next/link"
import Image from "next/image"


const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Payments",
        url: "/payments",
        icon: WalletCards,
    },
    {
        title: "Account",
        url: "/users/dip",
        icon: User,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    }
]

const AppSidebar = () => {
    return (
        <Sidebar collapsible="icon" variant="sidebar">

            {/* Header */}
            <SidebarHeader className="py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <Image src="/logo.jpg" alt="logo" width={20} height={20} className="rounded-full" />
                                <span className="font-bold">Sofian</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            {/* Header */}

            <SidebarSeparator />

            {/* Content */}
            <SidebarContent>

                {/* Sidebar Group & Menu Badge*/}
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>
                                                {item.title}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>

                                    {item.title === "Payments" && (
                                        <SidebarMenuBadge>
                                            33
                                        </SidebarMenuBadge>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* Sidebar Group & Menu Badge*/}

                {/* Sidebar Group Action */}
                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>

                    <SidebarGroupAction className="cursor-pointer">
                        <Plus />
                        <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                        <Plus />
                                        Add Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                        <Projector />
                                        See All Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* Sidebar Group Action */}

                {/* Collapsible Sidebar Group */}
                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>

                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Collapsable Group
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 cursor-pointer" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>

                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href="/#">
                                            <Plus />
                                            Add Projects
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                                <SidebarMenuItem>
                                    <SidebarMenuButton asChild>
                                        <Link href="/#">
                                            <Projector />
                                            See All Projects
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
                {/* Collapsible Sidebar Group */}

                {/* Collapsible Sidebar Menu */}
                <SidebarGroup>
                    <SidebarGroupLabel>Nested Items</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton className="cursor-pointer">
                                            <Projector />
                                            <span>See All Projects</span>
                                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild>
                                                    <Link href="/#">
                                                        <Plus />
                                                        <span>Add Projects</span>
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>

                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild>
                                                    <Link href="/#">
                                                        <Plus />
                                                        <span>Add Category</span>
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* Collapsible Sidebar Menu */}

                {/* Nested */}
                <SidebarGroup>
                    <SidebarGroupLabel>Nested Items</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {/* Sidebar Menu Sub */}
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                        <Projector />
                                        See All Projects
                                    </Link>
                                </SidebarMenuButton>

                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link href="/#">
                                                <Plus />
                                                Add Projects
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>

                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link href="/#">
                                                <Plus />
                                                Add Category
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                            {/* Sidebar Menu Sub */}

                            {/* Collapsible Sidebar Menu */}
                            <Collapsible className="group/collapsible">
                                <SidebarMenuItem>

                                    {/* <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            <Link href="/#" className="flex items-center gap-2 w-full">
                                                <Projector className="w-4 h-4" />
                                                See All Projects
                                            </Link>
                                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger> */}

                                    <div className="flex items-center w-full">
                                        <SidebarMenuButton>
                                            <Link href="/#" className="flex items-center gap-2 flex-1">
                                                <Projector className="h-4 w-4" />
                                                <span>See All Projects</span>
                                            </Link>
                                        </SidebarMenuButton>

                                        <CollapsibleTrigger asChild>
                                            <button aria-label="Toggle projects" className="p-2 rounded-md hover:bg-muted ">
                                                <ChevronRight className="w-4 h-4 cursor-pointer transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                            </button>
                                        </CollapsibleTrigger>
                                    </div>

                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild>
                                                    <Link href="/#">
                                                        <Plus />
                                                        Add Projects
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>

                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton asChild>
                                                    <Link href="/#">
                                                        <Plus />
                                                        Add Category
                                                    </Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                            {/* Collapsible Sidebar Menu */}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* Nested */}
            </SidebarContent>
            {/* Content */}

            {/* Footer */}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 />
                                    <span>Username</span>
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                align="end" side="top" className="w-full"
                            >
                                <DropdownMenuItem asChild>
                                    <Link href="/users/dip">
                                        Account
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    Billing
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    Sign out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            {/* Footer */}
        </Sidebar>
    )
}

export default AppSidebar;


/*  <SidebarGroupLabel asChild>
        <CollapsibleTrigger>
            Collapsable
            
            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />

        </CollapsibleTrigger>
    </SidebarGroupLabel>

    => In Next.js, paths like src="/logo.svg" resolve to public/logo.svg. 
*/