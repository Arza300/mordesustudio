"use client";

import Link from "next/link";

const WHATSAPP_NUMBER = "966553612356";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const navLinks = [
  { label: "الرئيسية", href: "#" },
  { label: "خدماتنا", href: "#services" },
  { label: "أعمالنا", href: "#works" },
  { label: "اتصل بنا", href: "#contact" },
];

const navLinksMobile = [
  { label: "خدماتنا", href: "#services" },
  { label: "أعمالنا", href: "#works" },
];

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61562686209159";
const TIKTOK_URL = "https://www.tiktok.com/@mordesustudio.com";

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}
function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
function IconEmail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* الشريط العلوي — أسود (نفس الترتيب: سوشيال ثم اتصال) */}
      <div className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 flex flex-row flex-nowrap items-center justify-between gap-2 py-2 text-sm min-w-0">
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="p-1.5 text-white/90 hover:text-white transition" aria-label="TikTok">
              <IconTikTok className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="p-1.5 text-white/90 hover:text-white transition" aria-label="Facebook">
              <IconFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="p-1.5 text-white/90 hover:text-white transition" aria-label="X">
              <IconX className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="p-1.5 text-white/90 hover:text-white transition" aria-label="WhatsApp">
              <IconWhatsApp className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 min-w-0">
            <a href="mailto:mordesu1studio@gmail.com" className="flex items-center gap-1.5 text-white/90 hover:text-white transition shrink-0 min-w-0 max-w-[50%] sm:max-w-none" title="mordesu1studio@gmail.com">
              <IconEmail className="w-4 h-4 shrink-0" />
              <span className="truncate hidden sm:inline">mordesu1studio@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* شريط التنقل الرئيسي — أبيض (صف واحد: لوجو | تنقل | زر — مثل الكمبيوتر) */}
      <div className="bg-white text-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 flex flex-row flex-nowrap items-center gap-2 sm:gap-4 py-2.5 sm:py-3 min-w-0">
          {/* اللوجو — يمين في RTL */}
          <Link href="#" className="font-semibold text-xl sm:text-3xl text-black tracking-tight shrink-0">
            mordesu studio
          </Link>

          {/* روابط التنقل — موبايل: خدماتنا + أعمالنا فقط */}
          <nav
            className="md:hidden flex flex-row flex-nowrap items-center gap-1 sm:gap-2 min-w-0 flex-1 justify-center py-1"
            aria-label="القائمة الرئيسية"
          >
            {navLinksMobile.map((item, i) => (
              <span key={item.href} className="flex items-center shrink-0 gap-1 sm:gap-2">
                <Link
                  href={item.href}
                  className="px-1.5 sm:px-2 py-1 text-gray-700 hover:text-black text-sm sm:text-base font-bold tracking-wide transition whitespace-nowrap"
                >
                  {item.label}
                </Link>
                {i < navLinksMobile.length - 1 && (
                  <span className="text-gray-300 select-none shrink-0" aria-hidden>|</span>
                )}
              </span>
            ))}
          </nav>
          {/* ديسكتوب: كل الروابط */}
          <nav
            className="hidden md:flex flex-row flex-nowrap items-center gap-1 sm:gap-2 overflow-x-auto overflow-y-hidden min-w-0 flex-1 justify-center py-1"
            aria-label="القائمة الرئيسية"
          >
            {navLinks.map((item, i) => (
              <span key={item.href} className="flex items-center shrink-0 gap-1 sm:gap-2">
                <Link
                  href={item.href}
                  className="px-1.5 sm:px-2 py-1 text-gray-700 hover:text-black text-sm sm:text-base font-bold tracking-wide transition whitespace-nowrap"
                >
                  {item.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span className="text-gray-300 select-none shrink-0" aria-hidden>|</span>
                )}
              </span>
            ))}
          </nav>

          {/* زر طلب عرض سعر */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-black text-white font-medium text-xs sm:text-sm hover:bg-gray-900 transition shadow-md hover:shadow-lg whitespace-nowrap"
          >
            طلب عرض سعر
          </a>
        </div>
      </div>
    </header>
  );
}
