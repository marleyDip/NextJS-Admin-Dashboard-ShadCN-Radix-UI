"use client";

import {
  Home,
  Inbox,
  Search,
  Settings,
  Plus,
  Calendar,
  Shirt,
  EllipsisVertical,
  LogOut,
  CircleUserRound,
  BellPlus,
  CreditCard,
  User,
  ShoppingBasket,
} from "lucide-react";

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
  SidebarSeparator,
  useSidebar,
} from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import Link from "next/link";
import Image from "next/image";

import EditUser from "./EditUser";
import AddOrder from "./AddOrder";
import AddUser from "./AddUser";
import AddCategory from "./AddCategory";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
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
  },
];

const user = {
  name: "Marley Dip",
  email: "dip.akand9899@gmail.com",
  avatar: "https://github.com/shadcn.png",
};

const AppSidebar = () => {
  const { isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      {/* Header */}
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image
                  src="/logo.jpg"
                  alt="logo"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
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
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>

                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Sidebar Group & Menu Badge*/}

        {/* Sidebar Group Action - Product */}
        <SidebarGroup>
          <SidebarGroupLabel>Products</SidebarGroupLabel>

          <SidebarGroupAction className="cursor-pointer">
            <Plus />
            <span className="sr-only">Add Product</span>
          </SidebarGroupAction>

          <SidebarGroupContent>
            <SidebarMenu>
              {/* All Products */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/products">
                    <Shirt />
                    See All Products
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* All Products */}

              {/* Add Product */}
              <SidebarMenuItem>
                <Sheet>
                  <SheetTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link href="#">
                        <Plus />
                        Add Product
                      </Link>
                    </SidebarMenuButton>
                  </SheetTrigger>

                  <EditUser />
                </Sheet>
              </SidebarMenuItem>
              {/* Add Product */}

              {/* Add Category */}
              <SidebarMenuItem>
                <Sheet>
                  <SheetTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link href="#">
                        <Plus />
                        Add Category
                      </Link>
                    </SidebarMenuButton>
                  </SheetTrigger>

                  <AddCategory />
                </Sheet>
              </SidebarMenuItem>
              {/* Add Category */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Sidebar Group Action - Product */}

        {/* Sidebar Group Action - User */}
        <SidebarGroup>
          <SidebarGroupLabel>Users</SidebarGroupLabel>

          <SidebarGroupAction className="cursor-pointer">
            <Plus />
            <span className="sr-only">Add User</span>
          </SidebarGroupAction>

          <SidebarGroupContent>
            <SidebarMenu>
              {/* All Users */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/users">
                    <User />
                    See All Users
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* All Users */}

              {/* Add User */}
              <SidebarMenuItem>
                <Sheet>
                  <SheetTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link href="#">
                        <Plus />
                        Add User
                      </Link>
                    </SidebarMenuButton>
                  </SheetTrigger>

                  <AddUser />
                </Sheet>
              </SidebarMenuItem>
              {/* Add User */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Sidebar Group Action - User */}

        {/* Sidebar Group Action - Orders & Payments */}
        <SidebarGroup>
          <SidebarGroupLabel>Orders / Payments</SidebarGroupLabel>

          <SidebarGroupAction className="cursor-pointer">
            <Plus />
            <span className="sr-only">Add Order</span>
          </SidebarGroupAction>

          <SidebarGroupContent>
            <SidebarMenu>
              {/* All Transactions */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/payments">
                    <ShoppingBasket />
                    See All Transactions
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* All Transactions */}

              {/* Add Order */}
              <SidebarMenuItem>
                <Sheet>
                  <SheetTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link href="#">
                        <Plus />
                        Add Order
                      </Link>
                    </SidebarMenuButton>
                  </SheetTrigger>

                  <AddOrder />
                </Sheet>
              </SidebarMenuItem>
              {/* Add Order */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Sidebar Group Action - Orders & Payments */}
      </SidebarContent>
      {/* Content */}

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg grayscale">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="rounded-lg">user</AvatarFallback>
                  </Avatar>

                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user?.name}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {user?.email}
                    </span>
                  </div>

                  <EllipsisVertical className="ml-auto size-4 cursor-pointer" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">
                        user
                      </AvatarFallback>
                    </Avatar>

                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">{user.name}</span>
                      <span className="text-muted-foreground truncate text-xs">
                        {user.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <CircleUserRound />
                    Account
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <BellPlus />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      {/* Footer */}
    </Sidebar>
  );
};

export default AppSidebar;

/* <SidebarMenuButton>
      <User2 />
      <span>Username</span>
      <ChevronUp className="ml-auto" />
    </SidebarMenuButton>

    <DropdownMenuContent align="end" side="top" className="w-full">
        <DropdownMenuItem asChild>
          <Link href="/users/dip">Account</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>Billing</DropdownMenuItem>

        <DropdownMenuItem>Sign out</DropdownMenuItem>
    </DropdownMenuContent>
*/

/*  <SidebarGroupLabel asChild>
        <CollapsibleTrigger>
            Collapsable

            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />

        </CollapsibleTrigger>
    </SidebarGroupLabel>

    => In Next.js, paths like src="/logo.svg" resolve to public/logo.svg.
*/
