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
import { Calendar, ChevronDown, ChevronRight, Home, Inbox, Search, Settings } from "lucide-react"
import Image from 'next/image'

const items = [
    {
        title: "Home",
        url: "#",
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
]
export default function DashboardPage() {
    return (<div>
        <Sidebar>
            <SidebarHeader>
                <div className=' rounded-md px-2 py-2.5 flex items-center gap-2'>
                    <Image src="static/images/logo.svg" height={20} width={20} alt='brand-image' />
                    <span className='text-xs font-bold text-neutral-900'>MyInventory</span>
                </div>
            </SidebarHeader>
            <Separator />
            {/* <div className="border-t border-gray-200 dark:border-gray-700 my-2" /> */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        <SidebarMenu>
                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem key={1} title='Master'>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton
                                            size="lg"
                                            className="cursor-pointer"
                                            isActive={true}
                                        >
                                            <span>Master</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem title='a'>
                                                <SidebarMenuButton>
                                                    <span>Master</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>

        </Sidebar>
    </div>);
}