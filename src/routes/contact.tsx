import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Prime Services Lahore" },
      {
        name: "description",
        content: "Our Contact page is coming soon. WhatsApp 0333 5430155 — open 24 hours.",
      },
      { property: "og:title", content: "Contact Us — Prime Services Lahore" },
      { property: "og:description", content: "Our Contact page is coming soon. WhatsApp 0333 5430155." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <ComingSoon
      label="Contact Us"
      title="Our Contact Page is"
      description="A full contact form and map are on the way. Meanwhile, tap the WhatsApp button below — we reply within minutes, 24 hours a day."
    />
  );
}