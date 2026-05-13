import { FiLock, FiGrid, FiShield, FiEyeOff } from "react-icons/fi";

const items = [
  {
    icon: <FiLock />,
    label: "SECURE HANDLING",
  },
  {
    icon: <FiGrid />,
    label: "PRIVATE DASHBOARDS",
  },
  {
    icon: <FiShield />,
    label: "ENCRYPTED DATA",
  },
  {
    icon: <FiEyeOff />,
    label: "NO PUBLIC EXPOSURE",
  },
];

export default function PrivacySection() {
  return (
    <section className="py-section-padding px-margin-page z-10 relative bg-surface-container-low/50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-6">
          Built With Privacy In Mind
        </h2>

        <p className="font-body-md text-body-md text-on-surface-variant">
          Your resumes, analyses, and learning progress stay secure and private
          inside HirePilot AI.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
        {items.map((item) => (
          <div key={item.label}>
            <div className="text-4xl text-primary mb-4 flex justify-center">
              {item.icon}
            </div>

            <div className="font-mono-label text-mono-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
