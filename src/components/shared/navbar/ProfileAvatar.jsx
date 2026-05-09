import { forwardRef } from "react";
import { LuUser } from "react-icons/lu";

const ProfileAvatar = forwardRef((props, ref) => (
  <button
    ref={ref}
    aria-label="Open profile menu"
    className="p-0.5 rounded-full bg-linear-to-tr from-primary to-outline-variant hover:scale-105 transition-transform focus:outline-none"
    {...props}
  >
    <div className="w-9 h-9 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center overflow-hidden">
      <LuUser size={18} className="text-primary/60" />
    </div>
  </button>
));

ProfileAvatar.displayName = "ProfileAvatar";
export default ProfileAvatar;
