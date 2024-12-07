import { MainLayout } from "../components/layout/MainLayout";
import { FloatingPanelsSection } from "../components/hero/FloatingPanelsSection";
import { WorksSection } from "../components/works/WorksSection";

export default function Home() {
  return (
    <MainLayout>
      <FloatingPanelsSection />
      <WorksSection />
    </MainLayout>
  );
}
