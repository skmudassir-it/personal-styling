import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { serviceList } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive personal styling services — wardrobe consultation, personal shopping, color analysis, style makeovers, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Complete Style Solutions
            </h1>
            <div className="gradient-divider w-24 mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every service is personalized to your unique needs. Select a service
              below to learn more about what&apos;s included.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="glass-card h-full transition-shadow hover:shadow-lg overflow-hidden group cursor-pointer">
                  <div className="w-full h-40 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                    <div className="flex size-16 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <FontAwesomeIcon icon={service.icon} className="size-6" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5">
                      {service.features.map((f) => (
                        <li key={f} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-primary font-bold">•</span> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                      Learn more
                      <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <Separator className="my-16" />

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Not Sure Where to Start?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Book a free consultation and we&apos;ll recommend the perfect service
              package for your goals.
            </p>
            <Link href="/contact" className="inline-flex">
              <Badge className="text-sm px-5 py-2.5 gap-2 cursor-pointer">
                Book Free Consultation
                <FontAwesomeIcon icon={faArrowRight} className="size-3" />
              </Badge>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
