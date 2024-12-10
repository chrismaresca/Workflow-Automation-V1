"use client";

import * as React from "react";
import { Star, ChevronsRight, ChevronsLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/custom-sidebar";

export function WorkflowDashActions() {
  const [isFilled, setIsFilled] = React.useState(false);
  const { state, toggleSidebar } = useSidebar("workflowDashCanvasSidebar");

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="hidden font-medium text-muted-foreground md:inline-block">Edited on Oct 08</div>
      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsFilled(!isFilled)}>
        <Star fill={isFilled ? "currentColor" : "none"} />
      </Button>
      <Button variant="ghost" size="icon" className="h-7 w-7 hidden lg:inline-flex" onClick={() => toggleSidebar()}>
        {state === "expanded" ? <ChevronsRight className="h-5 w-5" /> : <ChevronsLeft className="h-5 w-5" />}
      </Button>
    </div>
  );
}
