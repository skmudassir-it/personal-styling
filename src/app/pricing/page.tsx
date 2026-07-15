import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { serviceList } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for all StyleCraft personal styling services. Choose the package that fits your style goals.",
};

const packages = [
  {
    name: "Style Refresh",
    price: "$299",
    description: "Perfect for quick style tune-ups and seasonal updates.",
    features: [
      "90-minute consultation",
      "Wardrobe audit of 20 items",
      "5 new outfit combinations",
      "Digital lookbook",
      "1 week chat support",
    ],
    popular: false,
  },
  {
    name: "Style Transformation",
    price: "$799",
    description: "Our most popular package — a complete image overhaul.",
    features: [
      "2 style sessions (3 hours each)",
      "Full closet audit & organization",
      "Personal shopping experience",
      "Color analysis included",
      "30-day style support",
      "Seasonal style guide",
    ],
    popular: true,
  },
  {
    name: "Executive Presence",
    price: "$1,499",
    description: "Comprehensive image strategy for business leaders.",
    features: [
      "4 private styling sessions",
      "Complete wardrobe strategy",
      "Personal shopping (2 sessions)",
      "Media & presentation styling",
      "Quarterly check-ins (1 year)",
      "Priority chat support",
      "Grooming partner referrals",
    ],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Pricing
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Invest in{" "}
              <span className="text-primary">Your Best Self</span>
            </h1>
            <div className="gradient-divider w-24 mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing designed to fit your style goals and budget.
              Every package includes a free initial consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`glass-card text-center relative ${
                  pkg.popular ? "ring-2 ring-primary shadow-lg" : ""
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary my-3">
                    {pkg.price}
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-left mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex gap-2.5 items-start">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="size-4 text-primary mt-0.5 shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex w-full">
                    <Button
                      className="w-full gap-2"
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Get Started
                      <FontAwesomeIcon icon={faArrowRight} className="size-3.5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">Individual Service Pricing</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Prefer à la carte? Browse our individual services below.
            </p>
          </div>

          <div className="glass-card overflow-hidden max-w-2xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead className="text-right">Starting At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceList.map((s) => (
                  <TableRow key={s.slug}>
                    <TableCell>
                      <Link
                        href={`/services/${s.slug}`}
                        className="hover:text-primary transition-colors font-medium text-sm"
                      >
                        {s.title}
                      </Link>
                    </TableCell>
                    <TableCell className="text-right text-sm font-medium">
                      $149+
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
}
