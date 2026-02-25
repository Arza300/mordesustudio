"use client";

const services = [
  {
    title: "تصميم المواقع الإلكترونية",
    description:
      "موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير تجربة مميزة.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "خدمات التسويق الالكتروني",
    description:
      "التواصل الفعّال بين الشركات وجمهورها هو أساس نجاح التسويق، خصوصًا الرقمي. السوشيال ميديا وسيلة قوية بفضل قدرتها على الوصول إلى ملايين البشر.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "تحسين محركات البحث",
    description:
      "تجهيز المواقع لتتوافق مع محركات البحث يضمن ظهورها تدريجيًا في النتائج الأولى. ذلك يتطلب عملًا مستمرًا لتحسين الأداء وزيادة جاذبيتها لمحركات البحث.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "تصميم المتاجر الإلكترونية",
    description:
      "لسنا مجرد مطورين للمتاجر الإلكترونية. نقدم حلولًا مبتكرة وأدوات فعالة تختصر الطريق لنجاح متجرك وزيادة مبيعاتك.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "استضافة المواقع الإلكترونية",
    description:
      "نقدم العديد من خدمات استضافة المواقع باستخدام أحدث التقنيات وأفضل الأسعار. نوفر مجموعة من خطط الاستضافة المشتركة لتلبية احتياجات جميع العملاء.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "خدمات الدعم الفني",
    description:
      "متواجدون معكم على مدار الساعة لتقديم خدمات الدعم الفني، والإجابة على الاستفسارات، والتعامل مع الشكاوى بسرعة وكفاءة لضمان راحتكم وسهولة تجربتكم.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-10 w-full bg-black -mt-14 sm:-mt-20 py-16 sm:py-20 px-4"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12 sm:mb-16">
          <h2 id="services-heading" className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            خدماتنا
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            من خلال حلول برمجية وتصميمات إبداعية، نقدم خدمات تطوير المواقع، كتابة المحتوى، والدعم الفني، لمساعدتكم على النمو والتفوق في مجالاتكم.
          </p>
        </header>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <article
              key={i}
              className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition"
            >
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 flex items-center justify-center text-white/90 p-2.5">
                {item.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
