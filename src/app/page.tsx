import React from "react";
import { TrainingNav } from "@/components/ndt-training/TrainingNav";
import { TrainingHero } from "@/components/ndt-training/TrainingHero";
import { TrainingBackground } from "@/components/ndt-training/TrainingBackground";
import { AppShowcase } from "@/components/ndt-training/AppShowcase";
import PlatformFeatures from "@/components/ndt-training/PlatformFeatures";
import CurriculumRoadmap from "@/components/ndt-training/CurriculumRoadmap";
import StudentSuccess from "@/components/ndt-training/StudentSuccess";
import MembershipPlans from "@/components/ndt-training/MembershipPlans";
import FaqSection from "@/components/ndt-training/FaqSection";
import TrainingFooter from "@/components/ndt-training/TrainingFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <TrainingBackground />
      <TrainingNav />
      <TrainingHero />
      <PlatformFeatures />
      <AppShowcase />
      <CurriculumRoadmap />
      <StudentSuccess />
      <MembershipPlans />
      <FaqSection />
      <TrainingFooter />
    </main>
  );
}
