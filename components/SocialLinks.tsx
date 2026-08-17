import { Facebook, Instagram, Linkedin } from "lucide-react";
import { socialLinks } from "@/lib/site-config";

// lucide-react has no TikTok/X glyphs by default; inline minimal SVGs to match icon set.
// size is typed as number | string to structurally match lucide-react's LucideProps.
function TikTokIcon({ size = 18 }: { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.6 5.82c-.9-.63-1.5-1.63-1.62-2.82H12.6v13.44a2.6 2.6 0 1 1-1.84-2.49v-2.83a5.4 5.4 0 1 0 4.44 5.32V9.4a6.9 6.9 0 0 0 4.09 1.33V8.36c-.98 0-1.9-.31-2.69-.87Z" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5l-7.51 8.59L22.75 22h-6.94l-5.43-7.1L4.16 22H1l8.03-9.19L1.5 2h7.11l4.91 6.49L18.24 2Zm-1.22 18h1.71L7.06 3.9H5.22L17.02 20Z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ size?: number | string }>> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  tiktok: TikTokIcon,
  x: XIcon,
};

export default function SocialLinks({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  return (
    <ul className="flex items-center gap-3">
      {socialLinks.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Qlentra on ${social.label} (opens in a new tab)`}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                variant === "dark"
                  ? "border-white/15 text-white/70 hover:border-aqua/60 hover:text-aqua"
                  : "border-navy-800/12 text-navy-700 hover:border-violet/50 hover:text-violet"
              }`}
            >
              <Icon size={16} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
