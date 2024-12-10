import { Metadata } from "next";

// Sidebar Provider
import { SidebarInset, SidebarProvider } from "@/components/ui/custom-sidebar";

// Workflow Dashboard Components
import { WorkflowDashCanvasSidebar } from "@/components/WorkflowDashCanvasSidebar";
import { WorkflowDashHistorySidebar } from "@/components/WorkflowDashHistorySidebar";
import { WorkflowDashboardHeader } from "@/components/workflow-dashboard-layout/WorkflowDashboardHeader";
import { WorkflowTagline } from "@/components/workflow-dashboard-input/WorkflowTagline";

export const metadata: Metadata = {
  title: "AI Workflow Dashboard",
  description: "Build and manage AI workflows effectively and efficiently through natural language.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="fixed">
      {/* Main Content */}

      {/* Sidebars */}
      <WorkflowDashHistorySidebar variant="inset" side="left" sidebarKey="workflowDashHistorySidebar" />

      {/* Start of Sidebar Inset */}
      <SidebarInset>
        {/* Start of Header */}
        <WorkflowDashboardHeader />
        {/* <WorkflowTagline /> */}
        {/* End of Header */}

        {/* Start of Main Content */}
        <main className="flex-1">{children}</main>
        {/* End of Main Content */}
      </SidebarInset>
      {/* End of Sidebar Inset */}

      {/* Start of App Sidebar*/}
      <WorkflowDashCanvasSidebar
        variant="inset"
        side="right"
        sidebarKey="workflowDashCanvasSidebar"
        className="hidden lg:block"
        styles={{
          width: "40rem", // Custom width for WorkflowDashHistorySidebar sidebar
          widthIcon: "3.5rem", // Custom collapsed width
        }}
      />
      {/* End of App Sidebar*/}
    </SidebarProvider>
  );
}
