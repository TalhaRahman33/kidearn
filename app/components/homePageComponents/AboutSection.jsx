"use client";

import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="about-one my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms">
            <div className="about-one__content">
              <div className="sec-title text-right">
                <h6 className="sec-title__tagline">من نحن</h6>
                <h3 className="sec-title__title" style={{ fontSize: "48px" }}>
                  بـــيت أمـــي
                </h3>
              </div>
              <p className="about-one__content__text">
                لأن الأم هي الحضن الرحيم والأمان والاطمئنان وهي الاحرص على
                أطفالها ولا يفوقها حرص الا امها، وقالوا قديما لا أعز من
                الولد إلا ولد الولد. ​ ولأننا ندرك أن الاحتياجات برغم
                تغيرها إلى أن المبدأ ذاته مستمر و لأننا ندرك أهمية العناية
                بالطفل في أوقات إنشغال أمه فقد حرصنا على استثمار ذلك الوقت
                في "بيت أمي" والذي هو كبيت الأم من الحرص على العناية
                بالطفل من حيث الصحة واستثمار الوقت باللعب والتعليم. ​ حيث
                سيجد الطفل الكوادر السعوديه من الامهات المتخصصات في رعاية
                الاطفال وحضانتهم واخصائيات رياض الاطفال لتقديم البرامج
                التعليميه لكل الاعمار.
              </p>
              <Link href="/about" className="kidearn-btn">
                <span>المزيد</span>
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-one__image">
              <div
                className="about-one__image__one kidearn-tilt"
                data-tilt-options='{"glare": false, "maxglare": 0, "maxtilt": 5, "speed": 700, "scale": 1}'
              >
                <ExportedImage unoptimized={true} width={479} height={482} src="/images/about-1-11.webp" alt="kidearn" />
              </div>
              <div className="about-one__image__border wow fadeInUp" data-wow-delay="200ms">
                <ExportedImage unoptimized={true} width={489} height={526} src="/images/about-1-border.webp" alt="kidearn" />
              </div>
              <div
                className="about-one__image__leaf kidearn-splax"
                data-para-options='{"orientation": "left", "scale": 1.5, "overflow": true}'
              >
                <ExportedImage unoptimized={true} width={255} height={239} src="/images/about-1-leaf-rtl.webp" alt="kidearn" />
              </div>
              <div className="about-one__image__ball wow fadeInUp" data-wow-delay="100ms"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;