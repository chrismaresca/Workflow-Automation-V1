"use client";

import * as React from "react";

// Main
import { WorkspaceDashMainNav } from "@/components/workflow-dashboard-layout/WorkspaceDashMainNav";

// Favorites
import { WorkflowDashFavorites } from "@/components/workflow-dashboard-layout/WorkflowDashFavorites";

// Secondary
import { WorkflowDashSecondaryNav } from "@/components/workflow-dashboard-layout/WorkflowDashSecondaryNav";

// Workspaces
import { WorkflowDashWorkspaces } from "@/components/workflow-dashboard-layout/WorkflowDashWorkspaces";

// Team Switcher
import { WorkspaceDashTeamSwitcher } from "@/components/workflow-dashboard-layout/WorkspaceDashTeamSwitcher";

// User
import { WorkflowDashUser } from "@/components/workflow-dashboard-layout/WorkflowDashUser";

// Sidebar
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenuButton, SidebarMenuItem, SidebarMenu } from "@/components/ui/custom-sidebar";
import { DUMMY_SIDEBAR_MENU } from "@/lib/constants";
import { Command } from "lucide-react";

// TODO: Add real data

export function WorkflowDashHistorySidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="" {...props}>
      <SidebarHeader>
        {/* <WorkspaceDashTeamSwitcher teams={DUMMY_SIDEBAR_MENU.teams} />
        <WorkspaceDashMainNav items={DUMMY_SIDEBAR_MENU.navMain} /> */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton sidebarKey="workflowDashHistorySidebar" size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <WorkflowDashFavorites favorites={DUMMY_SIDEBAR_MENU.favorites} />
        <WorkflowDashWorkspaces workspaces={DUMMY_SIDEBAR_MENU.workspaces} />
        <WorkflowDashSecondaryNav items={DUMMY_SIDEBAR_MENU.WorkflowDashSecondaryNav} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <WorkflowDashUser user={DUMMY_SIDEBAR_MENU.user} />
      </SidebarFooter>
      {/* <SidebarRail sidebarKey="workflowDashHistorySidebar"/> */}
    </Sidebar>
  );
}
