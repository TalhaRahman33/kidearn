import React from 'react'
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
const NewDetail1 = () => {
  return (
    <>
    <section className="page-header">
      <div className="page-header__bg" />
      {/* /.page-header__bg */}
      <div className="container">
        <h2 className="page-header__title">تفاصيل الموضوع</h2>
        <ul className="kidearn-breadcrumb list-unstyled">
          <li>
            <a href="/">الصفحة الرئيسية</a>
          </li>
          <li>
            <span>تفاصيل الموضوع</span>
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
          <div className="col-lg-10">
            <div className="blog-details">
              <div className="blog-card blog-card-two @@extraClassName">
                <div className="blog-card__image">
                  <ExportedImage   unoptimized={true}
                    width={200} height={500} src="/images/blog-l-1-1.jpg"
                    alt="The Complete Web Developer Guideline 2023"
                  />
                </div>
                {/* /.blog-card__image */}
                <div className="blog-card__content">
                  <div className="blog-card__content__top">
                    {/* <a href="#" className="blog-card__category">
                      Kindergarten
                    </a> */}
                    <div className="blog-card__date">
                      <i className="icon-clock" />
                      ١٥ يناير ٢٠٢٤
                    </div>
                    {/* /.blog-card__date */}
                  </div>
                  <h3 className="blog-card__title">مبادرة فصيح </h3>
                  {/* /.blog-card__content__top */}
                  <p className="blog-card-two__text">
                      بالشراكة مع عبدالقادر المهيدب لخدمة المجتمع انطلقت مبادرة
                      فصيح. تهدف المبادرة إلى: الكشف المبكر عن اضطرابات اللغة
                      وجلسات لأكثر من 10,000 طفل في مختلف مناطق المملكة العربية
                      السعودية، بالإضافة إلى تقديم حملات توعوية و برامج تدريبية
                      لمن يعمل مع الأطفال. الفئة المستهدفة للمبادرة: الأطفال في
                      مرحلة الطفولة المبكرة (8 – 36 شهرًا) – العاملين مع الأطفال
                      – الأسر
                     
                    </p>
                    <Link target="_blank" href="https://apps.apple.com/us/app/ynmo-tifli/id6443390362">اأرغب بالاستفادة من المبادرة</Link>
                   
                  {/* <h3 className="blog-card__title">
                    The complete web developer guideline 2023
                  </h3>
                 
                  <p className="blog-card-two__text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteradution in some
                    form by injected humour, or randomised words which don't look
                    even slightly believable. If you are going There are many
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteradution in some form by injected
                    humour, or randomised words which don't look even slightly
                    believable. If you are going{" "}
                  </p> */}
                  
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

export default NewDetail1