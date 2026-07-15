"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faClock,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { serviceList } from "@/lib/services-data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {}
    setLoading(false);
  }

  if (submitted) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
            <FontAwesomeIcon icon={faCheckCircle} className="size-8" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-muted-foreground mb-8">
            Your consultation request has been received. We&apos;ll reach out
            within 24 hours to schedule your free session.
          </p>
          <Link href="/" className="inline-flex">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Let&apos;s{" "}
            <span className="text-primary">Start Your Journey</span>
          </h1>
          <div className="gradient-divider w-24 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book your free 30-minute consultation. Tell us about your style
            goals and we&apos;ll create a personalized plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="space-y-6">
            {[
              {
                icon: faPhone,
                title: "Call Us",
                detail: "(555) 234-5678",
                sub: "Mon–Fri, 9am–6pm EST",
              },
              {
                icon: faEnvelope,
                title: "Email",
                detail: "hello@stylecraft.com",
                sub: "We respond within 2 hours",
              },
              {
                icon: faLocationDot,
                title: "Studio",
                detail: "127 Style Avenue, Suite 400",
                sub: "New York, NY 10001",
              },
              {
                icon: faClock,
                title: "Hours",
                detail: "By Appointment",
                sub: "Evening & weekend slots available",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <FontAwesomeIcon icon={item.icon} className="size-4" />
                </div>
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-sm text-foreground/80">{item.detail}</div>
                  <div className="text-xs text-muted-foreground">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="glass-card p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      First Name
                    </label>
                    <Input name="firstName" required placeholder="Jane" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      Last Name
                    </label>
                    <Input name="lastName" required placeholder="Doe" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      Phone
                    </label>
                    <Input name="phone" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Service Interest
                  </label>
                  <Select
                    value={service}
                    onValueChange={(v) => setService(v ?? "")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceList.map((s) => (
                        <SelectItem key={s.slug} value={s.slug}>
                          {s.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Tell Us About Your Style Goals
                  </label>
                  <Textarea
                    name="message"
                    rows={4}
                    placeholder="I'm looking for help with..."
                  />
                </div>
                <Button type="submit" className="gap-2" disabled={loading}>
                  <FontAwesomeIcon icon={faPaperPlane} className="size-3.5" />
                  {loading ? "Sending..." : "Book Free Consultation"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
