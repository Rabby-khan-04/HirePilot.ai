export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-110 relative z-20">
      <div className="bg-surface-container-lowest border border-outline-variant p-8 md:p-10 shadow-sm rounded">
        <div className="mb-10 text-center lg:text-left">
          <h2 className="font-headline-md text-headline-md mb-2">{title}</h2>
          <p className="font-body-md text-on-surface-variant">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
