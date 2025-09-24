import AppLineChart from "@/components/AppLineChart";
import CardList from "@/components/CardList";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import {
    Sheet,
    SheetTrigger
} from "@/components/ui/sheet";

import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";


const SingleUsersPage = () => {
    return (
        <div className="">
            <Breadcrumb>
                <BreadcrumbList>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                            Dashboard
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">
                            Users
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbPage>Dip Akand</BreadcrumbPage>
                    </BreadcrumbItem>

                </BreadcrumbList>
            </Breadcrumb>

            {/* Container */}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* Left */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* User Badges Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">
                            User Badges
                        </h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck
                                        size={36}
                                        className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 cursor-pointer"
                                    />
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">
                                        Verified Users
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        The user has been verified by the admin.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield
                                        size={36} className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-2 cursor-pointer"
                                    />
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">
                                        Admin
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        Admin must have access to all  features and can manage users.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy
                                        size={36} className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2 cursor-pointer"
                                    />
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">
                                        Awarded
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        The user has been awaited for their contribution.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus
                                        size={36} className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2 cursor-pointer"
                                    />
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">
                                        Popular
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        The user has been popular in the Community.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>

                    {/* Information Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">

                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold">
                                User Information
                            </h1>

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button>Edit User</Button>
                                </SheetTrigger>

                                <EditUser />
                            </Sheet>
                        </div>

                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">
                                    Profile Completion
                                </p>
                                <Progress value={66} />
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold">
                                    Username:
                                </span>
                                <span>
                                    Dip Akand
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold">
                                    Email:
                                </span>
                                <span>
                                    dip.akand9899@gmail.com
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold">
                                    Phone:
                                </span>
                                <span>
                                    +880 1689 190142
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold">
                                    Location:
                                </span>
                                <span>
                                    Dhaka, Bd
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold">
                                    Role:
                                </span>
                                <Badge>
                                    Admin
                                </Badge>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground mt-4">
                            joined on 2025.01.01
                        </p>
                    </div>

                    {/* Card List Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transaction" />
                    </div>
                </div>

                {/* Right */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* User Card Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                        <div className="flex items-center gap-2">
                            <Avatar className="size-12">
                                <AvatarImage src="https://github.com/shadcn.png" alt='user-icon' />
                                <AvatarFallback>
                                    User
                                </AvatarFallback>
                            </Avatar>

                            <h1 className="text-xl font-semibold">Dip Akand</h1>
                        </div>

                        <p className="text-sm font-medium text-muted-foreground text-justify">
                            I’m Md. Sofian Hasan, a passionate software engineer focused on full-stack web development. Skilled in PHP, MySQL, JavaScript, React, Next.js, Node.js, and Tailwind CSS, I enjoy building scalable and user-friendly applications. Currently, I’m sharpening my expertise in the MERN stack and Vue.js while working on personal and professional projects.
                        </p>
                    </div>

                    {/* Chart Container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">
                            User Activity
                        </h1>
                        <AppLineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleUsersPage;