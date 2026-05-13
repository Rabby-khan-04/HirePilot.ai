export default function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none flex justify-between px-margin-page z-0">
      <div className="grid-line-v"></div>
      <div className="grid-line-v hidden md:block"></div>
      <div className="grid-line-v hidden md:block"></div>
      <div className="grid-line-v hidden md:block"></div>
      <div className="grid-line-v"></div>
    </div>
  );
}
