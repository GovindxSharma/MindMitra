import {Home, UserCircle2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { IoMdHappy } from "react-icons/io"

const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "MoodoMeter",
    url: "/home/moodometer",
    icon: IoMdHappy,
  },
  {
    title: "Profile",
    url: "/home/profile",
    icon: UserCircle2,
  },
]

const AppSidebar = () => {
  return (
    <SidebarProvider >
      <SidebarTrigger title="Toggle sidebar" className="fixed bottom-8 cursor-pointer left-[92px] text-black z-50 bg-white p-2 rounded shadow" />
      <Sidebar variant="floating"  collapsible="icon" className=" ml-18 h-[88vh] rounded-lg mt-20">
        <SidebarContent className="">
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm font-bold">Actions</SidebarGroupLabel>
            <SidebarGroupContent >
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <div className="text-sm"> {/* <-- might override icon size */}
                          <item.icon size={18} />
                        </div>
                        <span className="text-lg">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>

          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

export default AppSidebar