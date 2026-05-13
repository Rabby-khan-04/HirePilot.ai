import ContactCard from "./ContactCard";

import { FiHeadphones, FiBriefcase, FiZap } from "react-icons/fi";

export default function ContactOptions() {
  return (
    <section className="py-section-padding px-margin-page z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap">
        <ContactCard
          icon={<FiHeadphones />}
          label="EMAIL SUPPORT"
          title="Technical Assistance"
          description="Get help with account issues, AI analysis problems, roadmap generation, or technical support."
          footer="Best for general assistance and troubleshooting."
        />

        <ContactCard
          icon={<FiZap />}
          label="FEATURE REQUESTS"
          title="Product Feedback"
          description="Share ideas, improvements, and workflow suggestions to help shape HirePilot AI."
          footer="Perfect for product feedback and enhancement ideas."
        />

        <ContactCard
          icon={<FiBriefcase />}
          label="BUSINESS"
          title="Collaboration"
          description="Reach out for partnerships, integrations, collaborations, or business inquiries."
          footer="Let's explore opportunities together."
        />
      </div>
    </section>
  );
}
