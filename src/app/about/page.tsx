import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEye,
  faHandSparkles,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "StyleCraft is a premium personal styling and image consulting firm helping professionals discover their signature look and elevate their personal brand.",
};

const values = [
  {
    icon: faHeart,
    title: "Client-Centered",
    description:
      "Every session is tailored to your unique body, coloring, lifestyle, and goals — never a one-size-fits-all approach.",
  },
  {
    icon: faEye,
    title: "Eye for Detail",
    description:
      "We notice what others miss — the subtle fit adjustment, the perfect accessory, the color that makes your eyes pop.",
  },
  {
    icon: faHandSparkles,
    title: "Empowerment",
    description:
      "Our mission is to equip you with the knowledge and confidence to make brilliant style choices independently.",
  },
];

const team = [
  {
    name: "Alexandra Chen",
    role: "Founder & Lead Stylist",
    image: "/images/team/alexandra.svg",
    bio: "Certified image consultant with 12 years of fashion industry experience. Former personal stylist to C-suite executives in New York and London.",
  },
  {
    name: "Marcus Rivera",
    role: "Senior Stylist",
    image: "/images/team/marcus.svg",
    bio: "Specialist in menswear and executive presence. Trained at London College of Fashion with a focus on modern professional styling.",
  },
  {
    name: "Olivia Brooks",
    role: "Color Analyst",
    image: "/images/team/olivia.svg",
    bio: "Certified seasonal color analyst who has performed over 800 color consultations. Passionate about helping clients discover their palette.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              We Believe Style Is a{" "}
              <span className="text-primary">Superpower</span>
            </h1>
            <div className="gradient-divider w-24 mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              StyleCraft was founded on a simple belief: when you look your best,
              you feel your best — and when you feel your best, you achieve
              extraordinary things.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center">
              <div className="text-6xl font-bold text-primary/20">SC</div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                <p>
                  StyleCraft was born in 2018 when founder Alexandra Chen
                  realized that most professionals were underserving their
                  personal brand. They had the skills, the drive, and the
                  ambition — but their appearance wasn&apos;t telling the same
                  story.
                </p>
                <p>
                  What started as one-on-one styling sessions quickly grew into
                  a full-service image consulting firm. Today, we&apos;ve
                  transformed over 500 clients — from tech founders to trial
                  attorneys, from physicians to public speakers.
                </p>
                <p>
                  Our approach blends fashion expertise with practical
                  psychology. We don&apos;t just dress you; we help you
                  understand your unique style language so you can make
                  confident choices for the rest of your life.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-16" />

          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-6 text-center">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                  <FontAwesomeIcon icon={v.icon} className="size-5" />
                </div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

          <Separator className="my-16" />

          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary/40">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <div className="text-xs text-primary font-medium mb-2">
                  {member.role}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 glass-card mx-auto max-w-3xl mb-20 px-8 sm:px-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Let&apos;s Start Your Transformation</h2>
        <p className="text-muted-foreground mb-6 text-sm">
          Book a free consultation and discover how StyleCraft can elevate your
          personal image.
        </p>
        <Link href="/contact" className="inline-flex">
          <Button className="gap-2">
            Book Free Consultation
            <FontAwesomeIcon icon={faArrowRight} className="size-3.5" />
          </Button>
        </Link>
      </section>
    </>
  );
}
