import React from 'react'
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
const NewDetail1 = () => {
  return (
    <>
    <section className="page-header" style={{ position: "relative" }}>
      <div className="page-header__bg-news" />    <div style={{
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
          <div className="col-lg-8">
            <div className="blog-details">
              <div className="blog-card blog-card-two @@extraClassName">
                <div className="blog-card__image">
                  <ExportedImage   unoptimized={true}
                    width={200} height={500} src="/images/blog-l-1-1.png"
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
                      ٢٧ يونيو ٢٠٢٤
                    </div>
                    {/* /.blog-card__date */}
                  </div>
                  {/* /.blog-card__content__top */}
                  <h3 className="blog-card__title">
                  خطوات التسجيل في قرة
                  </h3>
                  {/* /.blog-card__title */}
                  <p className="blog-card-two__text">
                  التسجيل في برنامج قرة - أفراد - دعم ضيافات الأطفال للمرأة العاملة صندوق تنمية الموارد البشرية هي مبادرة من صندوق تنمية الموارد البشرية «هدف» ضمن برامج التحول الوطني،تهدف لتقديم برنامج يدعم تمكين المرأة العاملة السعودية من الالتحاق بسوق العمل والاستمرار فيه وهي مطمئنة على الرعاية المقدمة لأطفالها، عبر تسجيلهم في خدمة ضيافة الأطفال المرخصة.
                  </p>
                  <Link target="_blank" href="https://youtu.be/1AqSHBBD0pg">  هدف || برنامج دعم ضيافة الأطفال ( قرة ) 
                    </Link>
                 
                    <h4>الخطوات :</h4>
                    <ul>
                      <li>
                      ١- التأكد من استيفاء شروط الالتحاق بالبرنامج
                      </li>
                      <li>
                      ٢- التسجيل عبر البوابة الوطنية للعمل "طاقات".
                      </li>
                      <li>
                      ٣- اختيار مركز الضيافة وتسجيل الطفل في بوابة قرة

                      </li>
                    

                      
                       
                     
                    </ul>
                    <h4>الشروط  :</h4>
                    <ul>
                      <li>
                      ١- لجنسية: سعودية.                      </li>
                      <li>
                      ٢- الأجر الشهري: ألا يزيد عن 8,000 ريال
                      </li>
                      {/* <li>
                      ٣- مسجلة في لتأمينات الاجتماعية
                     
                      </li> */}
                      <li>٣- مسجلة في &laquo;التأمينات الاجتماعية&raquo;.</li>
                      <li>
                      ٤- العمر: 18 – 65 عاماً.
                      </li>
                      <li>
                      ٥- لا يوجد حد اعلى لعدد الأطفال.
                      </li>
                     <p>
                     عمر أطفال المستفيدة: حتى يصل إلى (6) سنوات.

                     </p>
                    
                    </ul>
                    <h4>بوابة قرة 
                    :</h4>
                    <ul>
                      <li>
                      <Link target="_blank" href="">
                      بوابة قرة </Link>
                      </li>
                    
                    
                    </ul>
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