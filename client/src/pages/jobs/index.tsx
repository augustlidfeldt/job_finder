import { JobGrid } from "@/components/JobGrid";
import SideBar from "@/components/SideBar";
import React from "react";

function jobs() {
  return (
    <div className="jobs-page">
      <SideBar></SideBar>
      <JobGrid></JobGrid>
    </div>
  );
}

export default jobs;
