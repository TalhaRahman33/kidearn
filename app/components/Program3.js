import React from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
const Program3 = () => {
  return (
    <>
      <section className="page-header" style={{ position: "relative" }}>
        <div className="page-header__bg_program" />{" "}
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            background: "rgba(0, 0, 0, 0.5)",
            transition: "opacity 0.5s ease",
            zIndex: 0,
          }}
        />
        {/* /.page-header__bg */}
        <div className="container">
          <h2 className="page-header__title"> صفحة تفاصيل البرنامج</h2>
          <ul className="kidearn-breadcrumb list-unstyled">
            <li>
              <a href="/">الصفحة الرئيسية</a>
            </li>
            <li>
              <span> صفحة تفاصيل البرنامج</span>
            </li>
          </ul>
          {/* /.thm-breadcrumb list-unstyled */}
        </div>
        {/* /.container */}
      </section>
      {/* /.page-header */}
      <section className="blog-one blog-one--page">
        <div className="container">
          <div className="row gutter-y-60">
            {/* /.col-lg-4 */}
            <div className="col-lg-8">
              <div className="blog-details">
                <div className="blog-card blog-card-two @@extraClassName">
                  <div className="blog-card__image">
                    <ExportedImage
                      unoptimized={true}
                      // width={200}
                      // height={500}
                      // src="/images/blog-l-1-2.png"
                        width={200} height={400} src="/images/pg1.png"
                      alt="After School Care Program"
                    />
                  </div>
                  {/* /.blog-card__image */}
                  <div className="blog-card__content">
                    <div className="blog-card__content__top">
                      {/* <a href="#" className="blog-card__category">
            After School Care
          </a> */}
                      {/* /.blog-card__date */}
                    </div>
                    <h3 className="blog-card__title">
                      برنامج متخصص لضيافة الأطفال يركز على دمج التعلم واللعب في
                      جو من المرح، ويهدف إلى تطوير مهارات الأطفال وتعزيز
                      إبداعاتهم. إليك مكونات البرنامج:
                    </h3>
                    {/* /.blog-card__content__top */}
                    <p className="blog-card-two__text">
                      <strong>١. الأنشطة التعليمية:</strong> ورش عمل تفاعلية:
                      تنظيم ورش عمل في مجالات مثل العلوم، الفنون، والحساب، حيث
                      يتعلم الأطفال من خلال التجارب العملية. ألعاب تعليمية:
                      استخدام الألعاب التي تعزز المهارات المعرفية مثل الألغاز
                      والألعاب الجماعية.
                    </p>
                    <p className="blog-card-two__text">
                      <strong>٢. اللعب الحر:</strong> مساحات لعب آمنة: توفير
                      مناطق مخصصة للعب الخارجي والداخلي، حيث يمكن للأطفال
                      التعبير عن أنفسهم بحرية.
                    </p>
                    <p className="blog-card-two__text">
                      <strong>٣. التفاعل الاجتماعي:</strong> أنشطة جماعية: تنظيم
                      فعاليات جماعية مثل الفنون والحرف، مما يعزز التعاون
                      والتواصل بين الأطفال. جلسات قصص: قراءة قصص تفاعلية، حيث
                      يمكن للأطفال المشاركة والتفاعل مع السرد.
                    </p>
                    <p className="blog-card-two__text">
                      <strong>٤. الأنشطة الفنية:</strong> الإبداع والفنون: توفير
                      ورش للرسم، النحت، والحرف اليدوية، مما يساعد الأطفال على
                      التعبير عن أنفسهم من خلال الفنون.
                    </p>
                    <p className="blog-card-two__text">
                      <strong>٥. بيئة مرحة:</strong> تزيين المكان: خلق بيئة
                      مبهجة من خلال الألوان الزاهية والزينة التي تحفز الحماس.
                    </p>

                    <p className="blog-card-two__text">
                      هذا البرنامج يهدف إلى توفير تجربة تعليمية متكاملة تجمع بين
                      التعلم والمرح، مما يسهم في تطوير المهارات الاجتماعية
                      والمعرفية للأطفال في بيئة آمنة وداعمة.
                    </p>
                  </div>
                  {/* /.blog-card__content */}
                </div>
              </div>
            </div>

            {/* /.col-lg-8 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.blog-one blog-one--page */}
    </>
  );
};

export default Program3;
