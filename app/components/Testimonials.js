"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ExportedImage from "next-image-export-optimizer";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Dynamically import the OwlCarousel component
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const Testimonials = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure that the component only runs on the client side
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    navText: [
      '<span className="icon-left-arrow">السابق</span>',
      '<span className="icon-right-arrow">التالي</span>',
    ],
  };

  return (
    <section className="testimonial-one">
      <div
        className="testimonial-one__pen kidearn-splax"
        data-para-options='{"orientation": "left", "scale": 2.5, "overflow": true}'
      >
        <ExportedImage
          src="/images/pen-rtl.png"
          alt="kidearn"
          unoptimized={true}
          // layout="responsive"
          width={320}
          height={265}
        />
      </div>
      <div className="container">
        <div className="testimonial-one__area">
          <div className="testimonial-one__bg"></div>
          <div
            className="testimonial-one__bg-shape kidearn-splax"
            style={{ backgroundImage: "url(/images/testimonial-shape-1.png)" }}
            data-para-options='{"orientation": "down", "scale": 1.5, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
          ></div>
          <div className="testimonial-one__star-left">
            <ExportedImage
              src="/images/star1.png"
              alt="kidearn"
              unoptimized={true}
              // layout="responsive"
              width={39}
              height={38}
            />
          </div>
          <div className="testimonial-one__star-right">
            <ExportedImage
              src="/images/star2.png"
              alt="kidearn"
              unoptimized={true}
              // layout="responsive"
              width={39}
              height={38}
            />
          </div>
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">الـــتعليقـــات</h6>
            <h3 className="sec-title__title">
            مـــاذا يـــقول عـــنا أولـــياء  الأمـــور ؟
            </h3>
            {/* <h3 className="sec-title__title">
              ماذا يقول عنا
              <br />
              أولياء الأمور{" "}
            </h3> */}
          </div>
          {isClient && (
            <OwlCarousel
              className="testimonial-one__carousel owl-carousel"
              {...options}
            >
              <div className="item">
                <div className="testimonial-one__item">
                  <div className="testimonial-one__item__quote">
                    مكان جميل جدا للطفال مستوى الأمان والنظافه عالي كل العاملين
                    في المركز مبدعين في عملهم تعاملت معاهم ٣ أسابيع كانت بنتي
                    سعيده في تواجدها بالمركز الأسعار جدا معقوله عندهم فعاليات
                    كثير للأطفال متنوعه ما يمل الطفل وهو عندهم الله يبارك لهم
                    يارب
                  </div>
                  <div className="testimonial-one__item__author">
                    {/* <ExportedImage
                      src="/images/testi-author-1.png"
                      alt="kidearn"
                      unoptimized={true}
                      layout="responsive"
                      width={46}
                      height={46}
                    /> */}
                    <h5 className="testimonial-one__item__author__name">
                    منيرة
                    </h5>
                    {/* <p className="testimonial-one__item__author__designation">
                      Munerah
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-one__item">
                  <div className="testimonial-one__item__quote">
                    شكرا شكرا شكرا من اعماق قلبي فعلا مركز وحضانة اكثر من رائعة
                    حطيت فيها ولدي تميم من عمر ثلاثة شهور إلى اللحين كمل ثلاث
                    سنوات ماشالله هي نظافة هي تعليم وتعامل رائع مع الطفل وكمية
                    حب مو طبيعية للاطفال شكرا مركز بيت امي 😍
                  </div>
                  <div className="testimonial-one__item__author">
                    {/* <ExportedImage
                      src="/images/testi-author-2.png"
                      alt="kidearn"
                      unoptimized={true}
                      layout="responsive"
                      width={46}
                      height={46}
                    /> */}
                    <h5 className="testimonial-one__item__author__name">
                    أم تميم                    </h5>
                    {/* <p className="testimonial-one__item__author__designation">
                   Um Tmim
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-one__item">
                  <div className="testimonial-one__item__quote">
                    أفضل خيار لكل أم بعد بحث مدته شهر في مراكز الرياض، أنصح
                    وبشدة بمركز بيت أمي ، المكان وطاقم العمل والأسعار ، جميعها
                    كونت دائرة كاملة متكاملة تبارك الله 👍🏼{" "}
                  </div>
                  <div className="testimonial-one__item__author">
                    {/* <ExportedImage
                      src="/images/testi-author-2.png"
                      alt="kidearn"
                      unoptimized={true}
                      layout="responsive"
                      width={46}
                      height={46}
                    /> */}
                    <h5 className="testimonial-one__item__author__name">
                    وفاء محمد
                    </h5>
                    {/* <p className="testimonial-one__item__author__designation">
                    Wafa Mohammed
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-one__item">
                  <div className="testimonial-one__item__quote">
                    من افضل المراكز الي شفتها بالرياض ، جلست فترة طويله ابحث عن
                    المركز المثالي وفقدت الامل ، صدفة وجدت مركز بيت امي حقيقة
                    مبهر رائع فعلاً .. مرافق ممتازة ، اهتمام رائع بالنظافة ،
                    امان عالي في الخروج والدخول ، كلاسات تعليميه للاطفال الاكبر
                    سن مع معلمات مختصات وادارة ممتازة جداً، لفتني حتى قسم الرضع
                    عندهم هادئ ومريح حقيقة صراحة اهتمام واضح ومجهود يحترم والله
                    يوفقهم{" "}
                  </div>
                  <div className="testimonial-one__item__author">
                    {/* <ExportedImage
                      src="/images/testi-author-2.png"
                      alt="kidearn"
                      unoptimized={true}
                      layout="responsive"
                      width={46}
                      height={46}
                    /> */}
                    <h5 className="testimonial-one__item__author__name">
                    أبرار سفر
                    </h5>
                    {/* <p className="testimonial-one__item__author__designation">
                  Abrar Safar
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-one__item">
                  <div className="testimonial-one__item__quote">
                    مركز بيت أمي فعلاً له من اسمه نصيب ، محضن آمن ومريح ، ومكان
                    تعليمي وترفيهي هادف ، بيئة صحية لتنمية مهارات الأطفال وتوسيع
                    مداركهم من خلال طاقات شابة تمتلك خبرات تعليمية و تقدم أفضل
                    مالديها وتسعى لتحفيز الإبداع لدى أطفالنا . بيت أمي : إدارة
                    ومعلمات كل الشكر والتقدير لكم على جهودكم المبذولة وعطاؤكم
                    الطيب بارك الله فيكم ولكم ،فنحن معاً نسعى لبناء لبنات
                    المستقبل ليرسم طريق النجاح والفخر .
                  </div>
                  <div className="testimonial-one__item__author">
                    {/* <ExportedImage
                      src="/images/testi-author-2.png"
                      alt="kidearn"
                      unoptimized={true}
                      layout="responsive"
                      width={46}
                      height={46}
                    /> */}
                    <h5 className="testimonial-one__item__author__name">
                    أم ريمة
                    </h5>
                    {/* <p className="testimonial-one__item__author__designation">
                Um Reema
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-one__item">
                  <div className="testimonial-one__item__quote">
                    الحضانة رائعة كل الاساسيات متوفرة فيها ودايما يعطوني تقرير
                    عن يومها😍 ركن الالعاب جميل بس يحتاج اشوية تطوير تعامل
                    المعلمات جدا رائع اخص بالشكر مس حصه في الاستقبال💕 نظافة
                    المكان حلوة وبنتي مرررة مبسوطة ومرتاحه معاهم ودايما متحمسة
                    تداوم
                  </div>
                  <div className="testimonial-one__item__author">
                    {/* <ExportedImage
                      src="/images/testi-author-2.png"
                      alt="kidearn"
                      unoptimized={true}
                      layout="responsive"
                      width={46}
                      height={46}
                    /> */}
                    <h5 className="testimonial-one__item__author__name">
                    حنان
                    </h5>
                    {/* <p className="testimonial-one__item__author__designation">
              Hanan
                    </p> */}
                  </div>
                </div>
              </div>
            </OwlCarousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

