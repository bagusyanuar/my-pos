'use client'

import React from 'react'

const AppContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="w-full p-6">{children}</div>
    )
}

export default AppContent