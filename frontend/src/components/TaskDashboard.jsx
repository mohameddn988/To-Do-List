"use client";


import { use, useState } from "react"
import { Search, SunMoon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner";
import { useTheme } from "@/components/ui/theme-provider"



export default function TaskDashboard() {
    const [searchQuery, setSearchQuery] = useState("")
    const { theme, setTheme } = useTheme()



    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        toast(`Theme changed to ${theme === "dark" ? "light" : "dark"} mode`)
    }

    return (
        <div className="space-y-6">
        <div className="">
            <div>
                <Search />
                <Input 
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </div>
            <div>
                <Button variant="outline" size="icon" onClick={toggleTheme}>
                    <SunMoon className="h-4 w-4" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </div>
        </div>
    )
}
