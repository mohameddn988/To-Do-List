"use client"

import React, { useState, useEffect, useContext, createContext } from "react"

const initialState = {
    theme: "system",
    setTheme: () => null,
}

const ThemeProviderContext = createContext(initialState)


export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "ui-theme",
    ...props
}) {
    const [theme, setThemeState] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem(storageKey) || defaultTheme
        }
        return defaultTheme
    })
    
    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
            root.classList.add(systemTheme)
            return
        }

        root.classList.add(theme)
    }, [theme])

    const setTheme = (theme) => {
        localStorage.setItem(storageKey, theme)
        setThemeState(theme)
    }

    const value = {
        theme,
        setTheme,
    }


    return (
        <ThemeProviderContext.Provider value={value} {...props}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
