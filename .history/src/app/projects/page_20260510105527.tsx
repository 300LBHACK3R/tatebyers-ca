import type { Metadata } from "next";
import Projects from "@/components/home/Projects";

export const metadata: Metadata = {
  title: "Projects | L&L Tech Solutions",
  description:
    "Explore L&L Tech Solutions project categories including custom web builds, remote tech support, and infrastructure work.",
};

export default function ProjectsPage() {
  return <Projects />;
}