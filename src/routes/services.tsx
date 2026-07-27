import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Prime Services Construction Lahore" },
      {
        name: "description",
        content: "Our Services page is coming soon. Contact Prime Services on WhatsApp for details.",
      },
      { property: "og:title", content: "Services — Prime Services Construction Lahore" },
      { property: "og:description", content: "Our Services page is coming soon." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <ComingSoon
      label="Our Services"
      title="Our Services Page is"
      description="We are polishing the full list of our services — Grey Structure, Finishing, Architecture, Interior Design and more. Message us on WhatsApp for pricing and a free site visit."
    />
  );
}