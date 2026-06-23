import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectsView from "@/components/projects/ProjectsView";
import ProjectsStats from "@/components/projects/ProjectsStats";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export const metadata = {
  title: "Our Projects | Punic Systems",
  description:
    "Real projects, measurable impact — a selection of projects where Punic Systems helped organizations strengthen security, ensure compliance, modernize IT, and build scalable digital solutions.",
};

export default function OurProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectsView />
        <ProjectsStats />
        <ProjectsCTA />
      </main>
      <Footer />
    </>
  );
}
