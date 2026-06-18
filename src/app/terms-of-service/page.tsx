import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-[96px] min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] py-24">Coming soon.</h1>
      </main>
      <Footer />
    </>
  );
}
