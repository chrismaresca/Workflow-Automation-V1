import { ArrowUpRight } from "lucide-react";
import { SUGGESTED_JOBS } from "@/lib/constants";

export function SuggestedJobs() {
  return (
    <div className="flex h-20 min-h-0 shrink-0 items-center justify-center sm:h-16">
      <div className="flex flex-wrap justify-center gap-3">
        <h2 className="sr-only">Suggested Chat Messages</h2>
        {SUGGESTED_JOBS.map((job, index) => (
          <button key={index} className="inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap text-nowrap border font-medium outline-none transition-all focus-visible:ring-2 focus-visible:ring-offset-1 text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus-visible:bg-gray-100 h-6 px-2 text-xs rounded-full bg-muted gap-0.5">
            <span className="block md:hidden">{job.mobile}</span>
            <span className="hidden md:block">{job.desktop}</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        ))}
      </div>
    </div>
  );
}
