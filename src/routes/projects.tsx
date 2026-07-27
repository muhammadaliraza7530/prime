import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Prime Services Lahore" },
      {
        name: "description",
        content: "Our Projects page is coming soon. Contact Prime Services on WhatsApp for our portfolio.",
      },
      { property: "og:title", content: "Projects — Prime Services Lahore" },
      { property: "og:description", content: "Our Projects page is coming soon." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <ComingSoon
      label="Our Projects"
      title="Our Portfolio is"
      description="A gallery of our completed and ongoing projects across Lahore is on the way. Message us on WhatsApp to receive our latest project photos and videos right away."
    />
  );
}