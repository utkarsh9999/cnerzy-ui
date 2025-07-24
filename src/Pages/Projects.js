import React from "react";

import Header from "../components/Header";

export default function Projects({ selected }) {
  let title = "";
  let subtitle = "";
  let breadcrumb = "Projects";

  if (selected === "robo") {
    title = "RoboProject";
    subtitle = "Manage your Robo projects efficiently.";
    breadcrumb = "Projects > RoboProject";
  }
  if (selected === "my") {
    title = "MyProject";
    subtitle = "Track your personal project activities.";
    breadcrumb = "Projects > MyProject";
  }
  if (selected === "sell") {
    title = "Sells";
    subtitle = "Monitor and manage selling projects.";
    breadcrumb = "Projects > Sells";
  }

  return (
    <>
      <Header title={title} subtitle={subtitle} breadcrumb={breadcrumb} />
      <div className="p-4">Projects content for: {title}</div>
    </>
  );
}
