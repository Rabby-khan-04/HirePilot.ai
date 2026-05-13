"use client";

import ContactFaq from "@/components/contactPage/ContactFaq";
import ContactForm from "@/components/contactPage/ContactForm";
import ContactHero from "@/components/contactPage/ContactHero";
import ContactOptions from "@/components/contactPage/ContactOptions";
import FinalCTA from "@/components/contactPage/FinalCTA";
import GridOverlay from "@/components/contactPage/GridOverlay";
import PrivacySection from "@/components/contactPage/PrivacySection";

export default function ContactPage() {
  return (
    <div>
      <GridOverlay />

      <ContactHero />

      <div className="grid-line-h"></div>

      <ContactOptions />

      <div className="grid-line-h"></div>

      <section className="py-section-padding px-margin-page z-10 relative">
        <div className="flex flex-col lg:flex-row gap-16">
          <ContactFaq />
          <ContactForm />
        </div>
      </section>

      <div className="grid-line-h"></div>

      <PrivacySection />

      <FinalCTA />
    </div>
  );
}
