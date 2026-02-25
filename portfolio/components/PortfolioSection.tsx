"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const DRAG_THRESHOLD = 50; // أقل مسافة سحب لقلب الكاروسيل

const projects = [
  {
    id: 1,
    title: "DR.Gamer — متجر منتجات رقمية",
    description: "متجر إلكتروني لبيع المنتجات الرقميّة (ألعاب، كودات، Xbox، PlayStation، Steam). واجهة داكنة مع عروض وكوبونات وبحث عن المنتجات.",
    tech: ["Next.js", "SEO", "منتجات رقمية"],
    link: "https://www.dr-gamer.net/",
    image: "/projects/dr-gamer.png",
  },
  {
    id: 2,
    title: "Infinity Math — منصة تعليمية",
    description: "منصة تعليمية خاصة بمعلم للرياضيات. تقديم المحتوى والدورات والمواد التعليمية للطلاب.",
    tech: ["Next.js", "منصة تعليمية", "React"],
    link: "https://www.infinity-math.com/",
    image: "/projects/infinity-math.png",
  },
  {
    id: 3,
    title: "MHM — أكاديمية تعليمية أونلاين",
    description: "أكاديمية تعليمية أونلاين تضم مناهج سعودية ومناهج مصرية للطلاب.",
    tech: ["Next.js", "مناهج سعودية ومصرية", "أكاديمية أونلاين"],
    link: "https://www.mhm-online-school.com/",
    image: "/projects/mhm-academy.png",
  },
  {
    id: 4,
    title: "Hawaigar — موقع تعريفي لشركة بناء",
    description: "موقع تعريفي لشركة بناء سعودية. عرض الخدمات والمشاريع والاتصال.",
    tech: ["Next.js", "موقع تعريفي", "شركة بناء"],
    link: "https://www.hawaigar.com/",
    image: "/projects/hawaigar.png",
  },
  {
    id: 5,
    title: "انتم السابقون — موقع لعبة",
    description: "موقع تعريفي للعبة رعب جماعية على ستيم. لعبة تنافسية بين ناجين ووحش، مع شخصيات وخرائط وعرض تشويقي.",
    tech: ["Next.js", "موقع ألعاب", "ستيم"],
    link: "https://www.antumalsabiqon.com/",
    image: "/projects/antum-alsabiqon.png",
  },
  {
    id: 6,
    title: "منصة الدكتور محمد سعدة",
    description: "منصة تعليمية متخصصة في التربية الخاصة والعلاج التخاطبي. دورات في التوحد، التخاطب، صعوبات التعلم، والشهادات المعتمدة.",
    tech: ["Next.js", "منصة تعليمية", "تربية خاصة"],
    link: "https://mohamed-seada.vercel.app/",
    image: "/projects/mohamed-seada.png",
  },
  {
    id: 7,
    title: "SUPERNOVA — موقع لعبة المستقبل",
    description: "موقع تعريفي للعبة Super Nova. أبطال خارقون، لحظات أيقونية، ومزايا لعب. اللعبة متاحة على Steam.",
    tech: ["Next.js", "موقع ألعاب", "Steam"],
    link: "https://www.supernova-game.com/",
    image: "/projects/supernova.png",
  },
];

const VISIBLE = 3; // عدد الكروت الظاهرة جنب بعض

export default function PortfolioSection() {
  const [index, setIndex] = useState(0);
  const n = projects.length;
  const visible = Array.from({ length: VISIBLE }, (_, j) => projects[(index + j) % n]);

  const dragStartX = useRef<number>(0);
  const hasDragged = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    hasDragged.current = false;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 10) hasDragged.current = true;
    if (Math.abs(dx) >= DRAG_THRESHOLD) {
      if (dx > 0) setIndex((i) => (i - 1 + n) % n);
      else setIndex((i) => (i + 1) % n);
    }
    setTimeout(() => {
      hasDragged.current = false;
    }, 0);
  };

  return (
    <section id="works" className="relative z-10 py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="title-line rounded-full" />
          <span className="text-luxury-accent font-medium text-sm tracking-widest uppercase">
            أعمال الاستوديو
          </span>
        </div>
        <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-semibold text-white/95 mb-4">
          المواقع التي تم تطويرها لعملائنا
        </h2>
        <p className="text-slate-400 max-w-xl mb-16">
          مجموعة من المشاريع التي تم تنفيذها باستخدام إطار عمل Next.js ولغة JavaScript.
        </p>

        {/* موبايل: كل الكروت تحت بعض بدون كاروسيل */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-white/10 bg-[rgba(18,18,20,0.85)] backdrop-blur-sm overflow-hidden card-glow p-6 hover:border-luxury-accent/30 transition-opacity duration-500"
            >
              <div className="aspect-video rounded-xl bg-white/5 flex items-center justify-center mb-5 overflow-hidden relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                ) : (
                  <span className="text-slate-500 text-4xl font-light">M</span>
                )}
              </div>
              <h3 className="font-semibold text-lg text-white/95 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* ديسكتوب: كاروسيل 3 كروت مع أزرار ونقاط */}
        <div className="hidden md:block relative">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + n) % n)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-black transition shadow-lg"
            aria-label="السابق"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % n)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-black transition shadow-lg"
            aria-label="التالي"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 select-none cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            role="group"
            aria-label="كاروسيل المشاريع — اسحب يميناً أو شمالاً للقلب"
          >
            {visible.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-white/10 bg-[rgba(18,18,20,0.85)] backdrop-blur-sm overflow-hidden card-glow p-6 hover:border-luxury-accent/30 transition-opacity duration-500"
                onClick={(e) => {
                  if (hasDragged.current) e.preventDefault();
                }}
              >
                <div className="aspect-video rounded-xl bg-white/5 flex items-center justify-center mb-5 overflow-hidden relative">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <span className="text-slate-500 text-4xl font-light">M</span>
                  )}
                </div>
                <h3 className="font-semibold text-lg text-white/95 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6" aria-hidden>
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-luxury-accent" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`عرض مجموعة ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
