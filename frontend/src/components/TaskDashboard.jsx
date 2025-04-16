"use client";


import { use, useState } from "react"
import { Search, SunMoon, PlusCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner";
import { useTheme } from "@/components/ui/theme-provider"



export default function TaskDashboard() {
    const [searchQuery, setSearchQuery] = useState("")
    const { theme, setTheme } = useTheme()
    const [isAddingTask, setIsAddingTask] = useState(false)



    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        toast(`Theme changed to ${theme === "dark" ? "light" : "dark"} mode`)
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row jsutify-between gap-4">
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 " />
                    <Input 
                        placeholder="Search tasks..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="pl-8"
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={toggleTheme}>
                        <SunMoon className="h-4 w-4" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                    <Button onClick={() => setIsAddingTask(true)}>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Task
                    </Button>
                </div>
            </div>
        </div>
    )
}
