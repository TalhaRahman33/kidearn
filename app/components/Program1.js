import React from 'react'
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
const Program1 = () => {
  return (
    <>
    <section className="page-header" style={{ position: "relative" }}>
      <div className="page-header__bg_program" />    <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: 'rgba(0, 0, 0, 0.5)',
        transition: 'opacity 0.5s ease',
        zIndex: 0,
      }} />
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
        <h3 className="blog-card__title"> برنامج استقبال الأطفال بعد انتهاء اليوم الدراسي يهدف إلى توفير بيئة آمنة وداعمة. يتضمن:  </h3>
        {/* /.blog-card__content__top */}
        {/* <p className="blog-card-two__text">
          برنامج استقبال الأطفال بعد انتهاء اليوم الدراسي يهدف إلى توفير بيئة آمنة وداعمة. يتضمن:
        </p> */}
    <p className="blog-card-two__text">
  <strong>١. استقبال الأطفال:</strong> توفير موظفين مؤهلين لاستقبال الأطفال ومراقبتهم.
</p>
<p className="blog-card-two__text">
  <strong>٢. وجبات خفيفة:</strong> تقديم وجبات خفيفة صحية لتعزيز الطاقة.
</p>
<p className="blog-card-two__text">
  <strong>٣. حل الواجبات:</strong> وقت مخصص لمساعدة الأطفال في الواجبات المدرسية.
</p>
<p className="blog-card-two__text">
  <strong>٤. أنشطة ترفيهية:</strong> تنظيم أنشطة مثل الألعاب، الفنون، والرياضة لتعزيز التواصل الاجتماعي.
</p>
<p className="blog-card-two__text">
  <strong>٥. ورش عمل تعليمية:</strong> تقديم ورش في مهارات جديدة مثل البرمجة أو الفنون.
</p>
<p className="blog-card-two__text">
  <strong>٦. التواصل مع الأهل:</strong> إبلاغ الأهل بتقدم أطفالهم وأنشطتهم.
</p>

        <p className="blog-card-two__text">
          هذا البرنامج يضمن تجربة مريحة وآمنة للأطفال، ويعزز من تطويرهم الأكاديمي والاجتماعي.
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
  
  )
}

export default Program1