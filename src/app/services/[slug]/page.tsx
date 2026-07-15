import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { services, serviceList } from "@/lib/services-data";

export function generateStaticParams() {
  return serviceList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) notFound();

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="size-3" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="w-full h-56 sm:h-72 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center mb-8">
                <div className="flex size-20 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <FontAwesomeIcon icon={service.icon} className="size-9" />
                </div>
              </div>

              <Badge variant="secondary" className="mb-3">
                Service Detail
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.longDescription}
              </p>

              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {service.features.map((f) => (
                  <div key={f} className="flex gap-2.5 items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="size-4 text-primary mt-0.5 shrink-0"
                    />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-10" />

              <h2 className="text-xl font-semibold mb-4">
                What&apos;s Included
              </h2>
              <div className="space-y-3">
                {service.includes.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 items-center p-3 rounded-lg bg-muted/50"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="size-4 text-primary shrink-0"
                    />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="glass-card p-6 sticky top-24">
                <h3 className="font-semibold mb-2">Ready to Get Started?</h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Book a free consultation to discuss your {service.title.toLowerCase()} goals.
                </p>
                <Link href="/contact" className="inline-flex w-full">
                  <Button className="w-full gap-2">
                    Book Free Consultation
                  </Button>
                </Link>

                <Separator className="my-5" />

                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Other Services
                </h4>
                <div className="space-y-2">
                  {serviceList
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 4)
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block p-2.5 rounded-lg text-sm hover:bg-muted transition-colors"
                      >
                        <span className="font-medium">{s.title}</span>
                        <span className="block text-xs text-muted-foreground mt-0.5">
                          {s.description}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
