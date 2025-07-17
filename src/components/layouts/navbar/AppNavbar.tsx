'use client'

import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'

const AppNavbar = () => {
    return (
        <nav className="h-16 w-full border-b border-neutral-300 flex items-center px-3">
            <SidebarTrigger
                className="cursor-pointer"
            />
        </nav>
    )
}

export default AppNavbar