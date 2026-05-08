import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function MockupTopBar() {
  return (
    <div className="border-b border-outline-variant/30 px-6 py-4 flex justify-between items-center bg-surface-bright">
      <div className="flex items-center gap-4">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
          <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
          <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
        </div>
        <div className="h-4 w-px bg-outline-variant/40 mx-2" />
        <span className="font-mono-detail text-mono-detail text-on-surface-variant">
          hirepilot.ai/dashboard/overview
        </span>
      </div>
      <div className="flex items-center gap-6">
        <IoIosSearch className="text-on-surface-variant" size={20} />
        <IoMdNotificationsOutline
          className="text-on-surface-variant"
          size={20}
        />

        <div className="w-8 h-8 rounded-full bg-secondary-container" />
      </div>
    </div>
  );
}
