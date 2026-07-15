import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faStar,
  faUsers,
  faCheckCircle,
  faArrowRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { serviceList } from "@/lib/services-data";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const testimonials = [
  {
    quote: "StyleCraft completely transformed how I see myself. I used to dread getting dressed — now it's my favorite part of the day.",
    name: "Sarah M.",
    role: "Marketing Director",
  },
  {
    quote: "The color analysis was life-changing. I finally understand what shades make me glow and which ones to avoid. My confidence has skyrocketed.",
    name: "James K.",
    role: "Tech Entrepreneur",
  },
  {
    quote: "After my style makeover, I landed the promotion I'd been chasing. Looking the part genuinely changed my career trajectory.",
    name: "Priya R.",
    role: "Finance Executive",
  },
  {
    quote: "Virtual styling was perfect for my busy schedule. My stylist curated looks I never would have tried — and I love every single one.",
    name: "Alex T.",
    role: "Physician",
  },
  {
    quote: "The personal shopping experience saved me hours and thousands in bad purchases. Every piece I bought works together beautifully.",
    name: "Michelle L.",
    role: "Attorney",
  },
];

const stats = [
  { value: "500+", label: "Clients Transformed" },
  { value: "8", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "4.9", label: "Average Rating" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-6">
              Your Style, Elevated
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Discover Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
                Signature Look
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Expert personal styling that transforms how you look and feel. From
              wardrobe audits to complete style makeovers — we help you project
              confidence through impeccable personal presentation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="gap-2">
                  <FontAwesomeIcon icon={faWandMagicSparkles} className="size-4" />
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button size="lg" variant="outline" className="gap-2">
                  Explore Services
                  <FontAwesomeIcon icon={faArrowRight} className="size-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/30 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything You Need to Shine
            </h2>
            <div className="gradient-divider w-24 mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From quick wardrobe refreshes to complete image transformations, we
              offer a full spectrum of personal styling services.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceList.slice(0, 8).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="glass-card h-full transition-shadow hover:shadow-lg overflow-hidden group cursor-pointer">
                  <div className="w-full h-36 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="flex size-16 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <FontAwesomeIcon icon={service.icon} className="size-6" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-base">{service.title}</CardTitle>
                    <CardDescription className="text-xs leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex">
              <Button variant="outline" className="gap-2">
                View All Services
                <FontAwesomeIcon icon={faArrowRight} className="size-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Why StyleCraft
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Style Is More Than Clothes — It&apos;s Your{" "}
                <span className="text-primary">Personal Brand</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We don&apos;t just tell you what to wear. We teach you to understand
                your body, your colors, and your unique style language so you can
                make confident choices for life.
              </p>
              <div className="space-y-4">
                {[
                  "Certified image consultants with 8+ years experience",
                  "Personalized approach — no cookie-cutter solutions",
                  "Ongoing support beyond the initial session",
                  "Trusted by 500+ professionals and executives",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="size-5 text-primary mt-0.5 shrink-0"
                    />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="flex size-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground mx-auto mb-4">
                    <FontAwesomeIcon icon={faStar} className="size-9" />
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">4.9</div>
                  <p className="text-sm text-muted-foreground">
                    Average Client Rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              What Our Clients Say
            </h2>
            <div className="gradient-divider w-24 mx-auto mb-6" />
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="relative z-10">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="size-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Ready to Transform Your Style?
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Book a free 30-minute consultation and discover how StyleCraft can
                elevate your personal image.
              </p>
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="gap-2">
                  Start Your Journey
                  <FontAwesomeIcon icon={faArrowRight} className="size-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
