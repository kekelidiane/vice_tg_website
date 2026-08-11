import type { Metadata } from "next";
import DonationHero from "@/components/donation/donation-hero";

export const metadata: Metadata = {
  title: "Faire un don - VICE TOGO",
};

export default function DonationPage() {
  return <DonationHero />;
}
