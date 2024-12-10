import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { SidebarTrigger } from "../ui/custom-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "../ui/breadcrumb";
import { WorkflowDashActions } from "./WorkflowDashActions";
import { DASHBOARD_TITLE } from "@/lib/constants";

export function WorkflowDashboardHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <div className="flex flex-1 items-center gap-2">
        <SidebarTrigger sidebarKey="workflowDashHistorySidebar" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">{DASHBOARD_TITLE}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-auto px-3">
        <WorkflowDashActions />
      </div>
    </header>
  );
}
