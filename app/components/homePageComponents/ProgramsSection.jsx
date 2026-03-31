"use client";

import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const programs = [
  {
    href: "/program1",
    image: "/images/program-1-1.webp",
    title: "برنامج ما بعد المدرسة",
    text: "برنامج متخصص لإستقبال الأطفال بعد انتهاء اليوم الدراسي مباشرة يوفر بيئة داعمة وآمنة",
    accent: "#F25334",
    order: false,
    delay: "00ms",
  },
  {
    href: "/program2",
    image: "/images/program-1-2.webp",
    title: "ضيافة الرضع",
    text: "برنامج متخصص للعناية بالطفل الرضيع من حيث التغذية والنظافة واللعب والاهتمام الصحي",
    accent: "#75C137",
    order: true,
    delay: "100ms",
  },
  {
    href: "/program3",
    image: "/images/program-1-3.webp",
    title: "التعلم باللعب",
    text: "برنامج متخصص لضيافة الاطفال عبر برامج متنوعة تمزج مابين التعلم واللعب بجو من المرح",
    accent: "#2390FF",
    order: false,
    delay: "200ms",
  },
];

const ShapeSVGs = () => (
  <div className="program-one__item__shape">
    <svg className="program-one__item__shape-one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 43">
      <path d="M11.0817 6.98831C-9.7901 23.3302 2.35379 52.1177 18.5511 39.5735C34.7647 27.0458 39.1287 -14.9434 11.0817 6.98831Z" />
    </svg>
    <svg className="program-one__item__shape-two" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 21">
      <path d="M5.28824 3.20713C-4.67276 11.0063 1.12287 24.745 8.85298 18.7583C16.5909 12.7795 18.6736 -7.25972 5.28824 3.20713Z" />
    </svg>
  </div>
);

const ProgramsSection = () => {
  return (
    <section className="program-one" style={{ zIndex: 1 }}>
      <div
        className="program-one__bg kidearn-splax"
        data-para-options='{ "orientation": "up", "scale": 2.5, "overflow": true }'
      >
        <ExportedImage src="/images/program-bg-shape.webp" alt="kidearn" width={1326} height={525} unoptimized={true} />
      </div>

      <div className="container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">الـــبرامـــج الـــمتوفـــرة</h6>
          <h3 className="sec-title__title">
            بـــيت أمـــي لـــدعم الأســـرة وتـــنمية الـــطفل
          </h3>
        </div>

        <div className="row">
          {programs.map((program) => (
            <div key={program.href} className="col-lg-4 col-md-6">
              <div
                className={`program-one__item${program.order ? " program-one__item--order" : ""} wow fadeInUp`}
                data-wow-duration="1500ms"
                data-wow-delay={program.delay}
                style={{ "--accent-color": program.accent }}
              >
                <ShapeSVGs />
                <div className="program-one__item__bg"></div>
                <div className="program-one__item__image">
                  <ExportedImage src={program.image} alt={program.title} width={217} height={136} unoptimized={true} />
                </div>
                <div className="program-one__item__content">
                  <h3 className="program-one__item__title">
                    <Link href={program.href}>{program.title}</Link>
                  </h3>
                  <p className="program-one__item__text">{program.text}</p>
                  <Link className="program-one__item__rm" href={program.href}>
                    <span className="icon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;