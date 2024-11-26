import React from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
const Program2 = () => {
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
              <Link href="/">الصفحة الرئيسية</Link>
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
                      {/* <Link href="#" className="blog-card__category">
            After School Care
          </Link> */}
                      {/* /.blog-card__date */}
                    </div>
                    <h3 className="blog-card__title">
                      برنامج متخصص للعناية بالطفل الرضيع يركز على عدة جوانب
                      أساسية، منها التغذية، النظافة، اللعب، الاهتمام الصحي،
                      والنوم. :
                    </h3>
                    {/* /.blog-card__content__top */}
                    <p className="blog-card-two__text">
                      <strong>١. التغذية:</strong> تقديم حليب الأم أو الحليب
                      الصناعي: ضمان توفير الكميات المناسبة من التغذية. التغذية
                      التكميلية: بدء إدخال الأطعمة الصلبة تدريجيًا بعد عمر الستة
                      أشهر، مع التركيز على الأطعمة الغنية بالفيتامينات والمعادن.
                      التثقيف الغذائي: توعية الأهل حول أهمية التغذية المتوازنة
                      وكيفية اختيار الأطعمة المناسبة.
                    </p>
                    <p className="blog-card-two__text">
                      <strong>٢. النظافة:</strong> تغيير الحفاضات: تغيير
                      الحفاضات بشكل منتظم للحفاظ على صحة الجلد. تعقيم الأدوات:
                      التأكيد على أهمية تعقيم الزجاجات والأدوات المستخدمة في
                      تغذية الطفل.
                    </p>
                    <p className="blog-card-two__text">
                      <strong>٣. اللعب:</strong> تنمية الحواس: تقديم ألعاب
                      مناسبة للعمر تساعد في تطوير الحواس مثل اللمس، السمع،
                      والرؤية. الأنشطة الحركية: تشجيع الأنشطة التي تعزز الحركة
                      مثل الزحف أو اللعب على الأرض لتعزيز التطور الحركي. وقت
                      اللعب التفاعلي: مشاركة الاطفال في اللعب لتعزيز الروابط
                      العاطفية وتطوير المهارات الاجتماعية.
                    </p>
                    <p className="blog-card-two__text">
                      <strong>٤. الاهتمام الصحي:</strong> مراقبة النمو: متابعة
                      الوزن والطول للتأكد من أن الطفل ينمو بشكل صحي.
                    </p>
                    <p className="blog-card-two__text">
                      <strong>٥. النوم:</strong> جدول نوم منتظم: إنشاء روتين
                      محدد لوقت النوم يساعد الطفل على التكيف والاسترخاء. بيئة
                      نوم مريحة: توفير غرفة هادئة ومظلمة مع درجة حرارة مناسبة
                      لضمان نوم هادئ. مراقبة أنماط النوم: متابعة مدة وجودة نوم
                      الطفل، والتأكد من أن الرضيع يحصل على القيلولة اللازمة.
                      تقنيات تهدئة: استخدام طرق مثل الهمسات أو اللمسات الخفيفة
                      لمساعدة الطفل على الاسترخاء قبل النوم. هذا البرنامج يهدف
                      إلى توفير بيئة شاملة تدعم النمو السليم للرضع وتطمئن الأهل
                      على تلبية احتياجات أطفالهم بشكل فعال.
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

export default Program2;
