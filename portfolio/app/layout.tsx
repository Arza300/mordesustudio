import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "مكتبة الأعمال | أعمال الاستوديو",
  description: "عرض المواقع التي تم تطويرها باستخدام Next.js وتقنيات الويب الحديثة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <Header />
        {children}
        <footer className="relative z-10 bg-black w-full py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} mordesu studio. جميع الحقوق محفوظة للاستوديو.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              الأعمال والمحتوى المعروض ملك للاستوديو.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
