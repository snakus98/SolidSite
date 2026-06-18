import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

// Stub — to be developed in a future sprint
export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-[96px] min-h-screen flex items-center justify-center">
        <Container className="py-24 text-center">
          <h1 className="text-4xl font-extrabold text-[var(--text-primary)] mb-4">Book a Consultation</h1>
          <p className="text-[var(--text-secondary)] text-lg">Coming soon.</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
