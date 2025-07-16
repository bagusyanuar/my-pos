import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem
} from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { Calendar, List, ChevronRight, Store, Box, ShoppingBag, Inbox, Search, Settings, LayoutDashboard, UserCog, FolderArchive, NotebookText } from "lucide-react"
import Image from 'next/image'

const items = [
    {
        title: "Home",
        url: "#",
        icon: LayoutDashboard,
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
]
export default function DashboardPage() {
    return (<div>
        <Sidebar>
            <SidebarHeader>
                <div className=' rounded-md px-2 py-2.5 flex items-center gap-2'>
                    <Image src="static/images/logo.svg" height={24} width={24} alt='brand-image' />
                    <span className='text-sm font-bold text-neutral-900'>MyInventory</span>
                </div>
            </SidebarHeader>
            <Separator />
            {/* <div className="border-t border-gray-200 dark:border-gray-700 my-2" /> */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/dashboard">
                                        <LayoutDashboard />
                                        <span>Dashboard</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarGroupLabel className='font-semibold'>Master Data</SidebarGroupLabel>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/categories">
                                        <FolderArchive />
                                        <span>Category</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/products">
                                        <Box />
                                        <span>Product</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/products">
                                        <Store />
                                        <span>Outlet</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        {/* <SidebarGroupLabel className='font-semibold'>Sales & Purchase</SidebarGroupLabel>
                        <SidebarMenu>
                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem key={1} title='Master'>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton
                                            size="lg"
                                            className="cursor-pointer"
                                            isActive={true}
                                        >
                                            <Box />
                                            <span>Product</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem title='a'>
                                                <SidebarMenuButton className="cursor-pointer" size="lg">
                                                    <span>Product List</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                        <SidebarMenu>
                            <Collapsible className="group/collapsible">
                                <SidebarMenuItem key={1} title='User'>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton
                                            size="lg"
                                            className="cursor-pointer"
                                        >
                                            <UserCog />
                                            <span>Pengguna</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem title=''>
                                                <SidebarMenuButton className="cursor-pointer" size="default">
                                                    <span>Akun Pengguna</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem title=''>
                                                <SidebarMenuButton className="cursor-pointer" size="default">
                                                    <span>Hak Akses & Perizinan</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu> */}
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Sales & Purchase</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/products">
                                        <NotebookText />
                                        <span>Purchase</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/products">
                                        <ShoppingBag />
                                        <span>Sale</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

        </Sidebar>
    </div >);
}