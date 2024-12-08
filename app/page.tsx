"use client";

import { MainLayout } from "../components/MainLayout";
import { FloatingPanelsSection } from "../components/FloatingPanelsSection";
import { WorksSection } from "../components/WorksSection";

export default function Home() {
  return (
    <MainLayout>
      <FloatingPanelsSection />
      <WorksSection />
    </MainLayout>
  );
}
