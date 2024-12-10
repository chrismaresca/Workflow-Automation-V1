import React from "react";
// Layout Components
import { WorkflowDashFooter } from "@/components/workflow-dashboard-layout/WorkflowDashFooter";

// Input Components
import { WorkflowTagline } from "@/components/workflow-dashboard-input/WorkflowTagline";
import { SuggestedJobs } from "@/components/workflow-dashboard-input/SuggestedJobs";
import { WorkflowInput } from "@/components/workflow-dashboard-input/WorkflowInput";

export default function Workflow() {
  return (
    <div className="flex min-h-full">
      <div className="flex-1 flex flex-col">
        {/* Start of Main Workflow Section */}

        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">
          {/* Title */}
          {/* <h1 data-testid="app-title" className="font-heading text-pretty text-center text-[29px] font-semibold tracking-tighter text-white sm:text-[32px] md:text-[46px]">
            {MAIN_QUESTION}
          </h1> */}
          <WorkflowTagline />
          {/* Workflow Input */}
          <WorkflowInput />

          {/* Suggested Jobs */}
          <SuggestedJobs />
        </div>

        {/* Footer */}
        <WorkflowDashFooter />
      </div>
    </div>
  );
}
