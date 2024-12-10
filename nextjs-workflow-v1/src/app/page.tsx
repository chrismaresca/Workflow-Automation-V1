"use client";
import React from "react";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <Button 
      variant="link"
      onClick={async () => {
        try {
          console.log("Sending request to /api/health");
          const response = await fetch("/api/health");
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Error fetching health status:", error);
        }
      }}
    >
      Check Health
    </Button>
  );
}
