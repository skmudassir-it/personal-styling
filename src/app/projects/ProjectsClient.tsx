"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  result: string;
  client: string;
}

const projects: Project[] = [
  {
    title: "Executive Image Overhaul",
    category: "corporate",
    description: "Complete wardrobe transformation for a Fortune 500 CFO preparing for a media tour.",
    image: "/images/projects/executive-overhaul.svg",
    result: "Featured in Forbes, promoted to CEO within 8 months",
    client: "James K., CFO → CEO",
  },
  {
    title: "Post-Divorce Reinvention",
    category: "personal",
    description: "Style makeover helping a client rediscover confidence after a life transition.",
    image: "/images/projects/reinvention.svg",
    result: "Client reported 3x dating confidence and landed dream job",
    client: "Sarah M., Marketing Director",
  },
  {
    title: "Tech Conference Speaker Prep",
    category: "corporate",
    description: "Curated stage wardrobe for a keynote speaker at a major tech conference.",
    image: "/images/projects/speaker-prep.svg",
    result: "Standing ovation; invited to 4 more conferences",
    client: "David L., Tech Entrepreneur",
  },
  {
    title: "Bridal Party Styling",
    category: "event",
    description: "Coordinated looks for a wedding party of 12 with diverse body types and preferences.",
    image: "/images/projects/bridal-party.svg",
    result: "Wedding photos went viral on Pinterest",
    client: "Priya & Raj, Wedding Party",
  },
  {
    title: "Minimalist Capsule Wardrobe",
    category: "personal",
    description: "Designed a 35-piece capsule wardrobe for a traveling consultant.",
    image: "/images/projects/capsule-wardrobe.svg",
    result: "Packed for 3-week trips in a carry-on",
    client: "Alex T., Management Consultant",
  },
  {
    title: "Gala Red Carpet Styling",
    category: "event",
    description: "Full styling for a charity gala appearance including dress sourcing and accessories.",
    image: "/images/projects/gala-styling.svg",
    result: "Named Best Dressed by local media",
    client: "Michelle L., Philanthropist",
  },
  {
    title: "Team Image Workshop",
    category: "corporate",
    description: "Half-day workshop for a law firm's 25 associates on professional presence.",
    image: "/images/projects/team-workshop.svg",
    result: "Firm reported improved client perception scores",
    client: "Preston & Associates Law Firm",
  },
  {
    title: "Virtual Style Transformation",
    category: "personal",
    description: "Fully remote wardrobe overhaul for a busy physician in another state.",
    image: "/images/projects/virtual-transformation.svg",
    result: "Complete wardrobe refresh in 2 weeks",
    client: "Dr. Rachel K., Physician",
  },
  {
    title: "Maternity Style Guide",
    category: "personal",
    description: "Curated maternity and post-partum wardrobe strategy for a first-time mom.",
    image: "/images/projects/maternity-style.svg",
    result: "Felt confident and stylish throughout pregnancy",
    client: "Emily W., Product Manager",
  },
];

export function ProjectsClient() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">
            Portfolio
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Transformations That{" "}
            <span className="text-primary">Speak Volumes</span>
          </h1>
          <div className="gradient-divider w-24 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. Browse our portfolio of style
            transformations across personal, corporate, and event styling.
          </p>
        </div>

        <Tabs
          value={filter}
          onValueChange={(v: string | null) => setFilter(v || "all")}
          className="mb-10"
        >
          <TabsList className="mx-auto flex justify-center">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="corporate">Corporate</TabsTrigger>
            <TabsTrigger value="event">Events</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Card key={project.title} className="glass-card overflow-hidden group">
              <div className="w-full h-44 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <FontAwesomeIcon icon={faStar} className="size-8 text-primary/20" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-[10px]">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-base">{project.title}</CardTitle>
                <CardDescription className="text-xs">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground mb-1">
                  <span className="font-medium text-foreground">Result:</span>{" "}
                  {project.result}
                </div>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Client:</span>{" "}
                  {project.client}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="inline-flex">
            <Button className="gap-2">
              Start Your Transformation
              <FontAwesomeIcon icon={faArrowRight} className="size-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
