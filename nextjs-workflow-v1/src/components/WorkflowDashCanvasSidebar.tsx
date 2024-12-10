"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/custom-sidebar";
import { useChat } from "ai/react";

// Menu items.
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
];

export function WorkflowDashCanvasSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { messages } = useChat({
    id: "chris",
  });

  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center gap-2">
            <SidebarGroupLabel>Workflow History</SidebarGroupLabel>
          </div>

          <SidebarGroupContent>
            <SidebarMenu>
              {/* 
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild sidebarKey="default">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))} */}

              {messages.map((message) => (
                <div key={message.id} className="flex flex-row gap-2">
                  <div className="flex-shrink-0 w-24 text-zinc-500">{`${message.role}: `}</div>
                  <div className="flex flex-col gap-2">{message.content && <div>{message.content}</div>}</div>
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
