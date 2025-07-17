'use client'

import React from 'react'
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
import {
    ChevronRight,
    Store,
    Box,
    ShoppingBag,
    LayoutDashboard,
    UserCog,
    FolderArchive,
    NotebookText,
    Blocks,
    Truck,
    Tag,
    Repeat,
    Wallet,
    CircleDollarSign
} from "lucide-react"
import Image from 'next/image'

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className=' rounded-md px-2 py-2.5 flex items-center gap-2'>
                    <Image src="static/images/logo.svg" height={24} width={24} alt='brand-image' />
                    <span className='text-sm font-bold text-neutral-900'>MyInventory</span>
                </div>
            </SidebarHeader>
            <Separator />
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
                        <SidebarGroupLabel>Master Data</SidebarGroupLabel>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/unit">
                                        <Blocks />
                                        <span>Satuan</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarMenu>
                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton
                                            size="lg"
                                            className="cursor-pointer"
                                            isActive={true}
                                        >
                                            <FolderArchive />
                                            <span>Bahan Baku</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton
                                                    className="cursor-pointer"
                                                    size="default"
                                                >
                                                    <a href="/material-category">
                                                        <span>Kategori</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton className="cursor-pointer" size="default">
                                                    <a href="/material-category">
                                                        <span>Bahan Baku</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton className="cursor-pointer" size="default">
                                                    <span>Inventory</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                        <SidebarMenu>
                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton
                                            size="lg"
                                            className="cursor-pointer"
                                        >
                                            <Store />
                                            <span>Outlet</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton
                                                    className="cursor-pointer"
                                                    size="default"
                                                >
                                                    <a href="/material-category">
                                                        <span>Outlet</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton className="cursor-pointer" size="default">
                                                    <a href="/material-category">
                                                        <span>Karyawan</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/unit">
                                        <Truck />
                                        <span>Supplier</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        {/* <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/products">
                                        <Box />
                                        <span>Produk</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu> */}
                        <SidebarGroupLabel>Transaksi</SidebarGroupLabel>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/products">
                                        <NotebookText />
                                        <span>Pembelian</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/products">
                                        <ShoppingBag />
                                        <span>Penjualan</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarGroupLabel>Finance</SidebarGroupLabel>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/products">
                                        <CircleDollarSign />
                                        <span>Pemasukan (Omset)</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarMenu>
                            <Collapsible className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton
                                            size="lg"
                                            className="cursor-pointer"
                                        >
                                            <Wallet />
                                            <span>Pengeluaran</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton
                                                    className="cursor-pointer"
                                                    size="default"
                                                >
                                                    <a href="/material-category">
                                                        <span>Jenis</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton className="cursor-pointer" size="default">
                                                    <a href="/material-category">
                                                        <span>Pengeluaran</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                        
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild size="lg">
                                    <a href="/products">
                                        <Repeat />
                                        <span>Cash Flow</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarGroupLabel>General</SidebarGroupLabel>
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
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton className="cursor-pointer" size="default">
                                                    <span>Akun Pengguna</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuButton className="cursor-pointer" size="default">
                                                    <span>Hak Akses & Perizinan</span>
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
    )
}

export default AppSidebar