import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of style transformations, wardrobe makeovers, and client success stories.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
