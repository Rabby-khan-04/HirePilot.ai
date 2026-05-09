export default function ProfileUserInfo({ name, role }) {
  return (
    <div className="px-4 py-3">
      <p className="font-headline-md text-body-md font-bold text-on-surface">
        {name}
      </p>
      <div className="mt-1.5">
        <span className="px-2 py-0.5 bg-surface-container font-mono-label text-[10px] text-on-surface-variant border border-outline-variant">
          {role.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
