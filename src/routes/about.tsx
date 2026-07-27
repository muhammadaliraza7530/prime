import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Prime Services Lahore" },
      {
        name: "description",
        content:
          "Our About page is coming soon. Contact Prime Services on WhatsApp for details.",
      },
      { property: "og:title", content: "About Us — Prime Services Lahore" },
      { property: "og:description", content: "Our About page is coming soon." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <ComingSoon
      label="About Us"
      title="Our Story is"
      description="We are preparing a detailed About page covering our 20+ years of construction excellence in Lahore. In the meantime, reach us on WhatsApp for anything you need."
    />
  );
}