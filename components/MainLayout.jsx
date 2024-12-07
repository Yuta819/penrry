import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export function MainLayout({
  children
}) {
  return (
    (<div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>)
  );
}
