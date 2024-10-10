"use client";

import React from 'react';
import Slider from 'react-slick';
import ExportedImage from 'next-image-export-optimizer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define a loader for images if needed
const myLoader = ({ src }) => {
  return `/images/${src}`;
};

const TestimonialSection = () => {
  // Slider settings
  const settings = {
 
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="testimonial-one testimonial-one--home-two testimonial-one--about-page">
      <div className="testimonial-one__left-shape kidearn-splax">
        <ExportedImage
          loader={myLoader}
          src="/images/testimonial-shape-2.png"
          alt="kidearn"
          width={400}
          height={400}
          unoptimized={true}
        />
      </div>
      <div className="testimonial-one__right-shape kidearn-splax">
        <ExportedImage
          loader={myLoader}
          src="/images/testimonial-shape-3.png"
          alt="kidearn"
          width={400}
          height={400}
          unoptimized={true}
        />
      </div>
      <div className="container">
        <div className="testimonial-one__area">
          <div className="testimonial-one__bg"></div>
          <div
            className="testimonial-one__bg-shape kidearn-splax"
            style={{ backgroundImage: 'url(/images/testimonial-shape-4.png)' }}
          ></div>
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">التعليقات</h6>
            <h3 className="sec-title__title">
            ماذا يقول عنا أولياء الأمور
            </h3>
          </div>
          <Slider {...settings}>
            <div>
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
                    loader={myLoader}
                    src="/images/testi-author-1.png"
                    alt="kidearn"
                    width={100}
                    height={100}
                    unoptimized={true}
                  /> */}
                  <h5 className="testimonial-one__item__author__name">   منيرة</h5>
                  {/* <p className="testimonial-one__item__author__designation">  Munerah</p> */}
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-one__item">
                <div className="testimonial-one__item__quote">

                شكرا شكرا شكرا من اعماق قلبي فعلا مركز وحضانة اكثر من رائعة
                    حطيت فيها ولدي تميم من عمر ثلاثة شهور إلى اللحين كمل ثلاث
                    سنوات ماشالله هي نظافة هي تعليم وتعامل رائع مع الطفل وكمية
                    حب مو طبيعية للاطفال شكرا مركز بيت امي 😍                </div>
                <div className="testimonial-one__item__author">
                  {/* <ExportedImage
                    loader={myLoader}
                    src="/images/testi-author-2.png"
                    alt="kidearn"
                    width={100}
                    height={100}
                    unoptimized={true}
                  /> */}
                  <h5 className="testimonial-one__item__author__name">  أم تميم </h5>
                  {/* <p className="testimonial-one__item__author__designation">  Um Tmim </p> */}
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-one__item">
                <div className="testimonial-one__item__quote">
                أفضل خيار لكل أم بعد بحث مدته شهر في مراكز الرياض، أنصح
                    وبشدة بمركز بيت أمي ، المكان وطاقم العمل والأسعار ، جميعها
                    كونت دائرة كاملة متكاملة تبارك الله 👍🏼{" "}                </div>
                <div className="testimonial-one__item__author">
                  {/* <ExportedImage
                    loader={myLoader}
                    src="/images/testi-author-2.png"
                    alt="kidearn"
                    width={100}
                    height={100}
                    unoptimized={true}
                  /> */}
                  <h5 className="testimonial-one__item__author__name">  وفاء محمد </h5>
                  {/* <p className="testimonial-one__item__author__designation"> Wafa Mohammed</p> */}
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-one__item">
                <div className="testimonial-one__item__quote">
                من افضل المراكز الي شفتها بالرياض ، جلست فترة طويله ابحث عن
                    المركز المثالي وفقدت الامل ، صدفة وجدت مركز بيت امي حقيقة
                    مبهر رائع فعلاً .. مرافق ممتازة ، اهتمام رائع بالنظافة ،
                    امان عالي في الخروج والدخول ، كلاسات تعليميه للاطفال الاكبر
                    سن مع معلمات مختصات وادارة ممتازة جداً، لفتني حتى قسم الرضع
                    عندهم هادئ ومريح حقيقة صراحة اهتمام واضح ومجهود يحترم والله
                    يوفقهم{" "}                </div>
                <div className="testimonial-one__item__author">
                  {/* <ExportedImage
                    loader={myLoader}
                    src="/images/testi-author-2.png"
                    alt="kidearn"
                    width={100}
                    height={100}
                    unoptimized={true}
                  /> */}
                  <h5 className="testimonial-one__item__author__name">  أبرار سفر </h5>
                  {/* <p className="testimonial-one__item__author__designation"> Abrar Safar</p> */}
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-one__item">
                <div className="testimonial-one__item__quote">

                مركز بيت أمي فعلاً له من اسمه نصيب ، محضن آمن ومريح ، ومكان
                    تعليمي وترفيهي هادف ، بيئة صحية لتنمية مهارات الأطفال وتوسيع
                    مداركهم من خلال طاقات شابة تمتلك خبرات تعليمية و تقدم أفضل
                    مالديها وتسعى لتحفيز الإبداع لدى أطفالنا . بيت أمي : إدارة
                    ومعلمات كل الشكر والتقدير لكم على جهودكم المبذولة وعطاؤكم
                    الطيب بارك الله فيكم ولكم ،فنحن معاً نسعى لبناء لبنات
                    المستقبل ليرسم طريق النجاح والفخر .                </div>
                <div className="testimonial-one__item__author">
                  {/* <ExportedImage
                    loader={myLoader}
                    src="/images/testi-author-2.png"
                    alt="kidearn"
                    width={100}
                    height={100}
                    unoptimized={true}
                  /> */}
                  <h5 className="testimonial-one__item__author__name">  أم ريمة </h5>
                  {/* <p className="testimonial-one__item__author__designation">  Um Reema</p> */}
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-one__item">
                <div className="testimonial-one__item__quote">

                الحضانة رائعة كل الاساسيات متوفرة فيها ودايما يعطوني تقرير
                    عن يومها😍 ركن الالعاب جميل بس يحتاج اشوية تطوير تعامل
                    المعلمات جدا رائع اخص بالشكر مس حصه في الاستقبال💕 نظافة
                    المكان حلوة وبنتي مرررة مبسوطة ومرتاحه معاهم ودايما متحمسة
                                    </div>
                <div className="testimonial-one__item__author">
                  {/* <ExportedImage
                    loader={myLoader}
                    src="/images/testi-author-2.png"
                    alt="kidearn"
                    width={100}
                    height={100}
                    unoptimized={true}
                  /> */}
                  <h5 className="testimonial-one__item__author__name">حنان </h5>
                  {/* <p className="testimonial-one__item__author__designation">Hanan </p> */}
                </div>
              </div>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
