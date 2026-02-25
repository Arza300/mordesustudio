import Image from "next/image";
import GridBackground from "@/components/GridBackground";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <GridBackground />
      <main className="relative z-10">
        {/* Hero: Logo في بداية الصفحة في المنتصف */}
        <section className="min-h-screen flex flex-col items-center justify-center hero-gradient px-4 pt-32 pb-16">
          <div className="logo-reveal opacity-0 flex flex-col items-center text-center -mt-20 sm:-mt-24">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 mb-8">
              <Image
                src="/logo.png"
                alt="الشعار"
                fill
                className="object-contain logo-glow"
                priority
                sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 288px"
              />
            </div>
            <h1 className="font-luxury font-semibold text-3xl sm:text-4xl md:text-5xl text-white/95 tracking-wide">
              مكتبة الأعمال الخاصة بالاستوديو
            </h1>
            <p className="text-slate-400 mt-3 max-w-md text-sm sm:text-base">
              ستوديو مختص في تطوير المواقع والتطبيقات الرقمية
            </p>
          </div>
        </section>

        {/* قسم الخدمات — خلفية سوداء مع المحتوى والأيقونات */}
        <ServicesSection />

        {/* قسم أعمال الاستوديو / المواقع المطورة */}
        <PortfolioSection />
      </main>
    </>
  );
}
